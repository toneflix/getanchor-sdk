import { mkdtemp, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from 'vitest'

import { AnchorFileError, resolveFile } from '../src/index'
import { mockClient } from './helpers'

const PDF = new Uint8Array([37, 80, 68, 70, 45, 49, 46, 52]) // "%PDF-1.4"

let dir: string
let pdfPath: string

beforeAll(async () => {
    dir = await mkdtemp(join(tmpdir(), 'anchor-sdk-files-'))
    pdfPath = join(dir, 'cac certificate.pdf')
    await writeFile(pdfPath, PDF)
})

afterAll(async () => {
    await rm(dir, { recursive: true, force: true })
})

afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
})

const bytesOf = async (blob: Blob) => new Uint8Array(await blob.arrayBuffer())

const stubFetch = (body: Uint8Array, init: ResponseInit = {}) => {
    const fetchMock = vi.fn(async () => new Response(body as Uint8Array<ArrayBuffer>, init))
    vi.stubGlobal('fetch', fetchMock)

    return fetchMock
}

describe('resolveFile', () => {
    it('reads an absolute path and infers the name and type', async () => {
        const { blob, fileName } = await resolveFile(pdfPath)

        expect(fileName).toBe('cac certificate.pdf')
        expect(blob.type).toBe('application/pdf')
        expect(await bytesOf(blob)).toEqual(PDF)
    })

    it('reads a file:// URL', async () => {
        const { fileName } = await resolveFile(pathToFileURL(pdfPath).href)

        expect(fileName).toBe('cac certificate.pdf')
    })

    it('rejects relative paths instead of guessing the working directory', async () => {
        await expect(resolveFile('docs/cac.pdf')).rejects.toThrow(AnchorFileError)
        await expect(resolveFile('docs/cac.pdf')).rejects.toThrow('File paths must be absolute')
    })

    it('reports a missing file', async () => {
        await expect(resolveFile(join(dir, 'missing.pdf'))).rejects.toThrow('Could not read file')
    })

    it('downloads a URL, taking the type from the response and the name from the path', async () => {
        const fetchMock = stubFetch(PDF, { headers: { 'content-type': 'application/pdf; charset=binary' } })

        const { blob, fileName } = await resolveFile('https://files.example.com/kyb/cac%20cert.pdf?sig=abc')

        expect(fetchMock).toHaveBeenCalledWith('https://files.example.com/kyb/cac%20cert.pdf?sig=abc')
        expect(fileName).toBe('cac cert.pdf')
        expect(blob.type).toBe('application/pdf')
        expect(await bytesOf(blob)).toEqual(PDF)
    })

    it('prefers the Content-Disposition file name over the URL path', async () => {
        stubFetch(PDF, { headers: { 'content-disposition': 'attachment; filename="memorandum.pdf"' } })

        const { blob, fileName } = await resolveFile('https://files.example.com/download/123')

        expect(fileName).toBe('memorandum.pdf')
        expect(blob.type).toBe('application/pdf')
    })

    it('reports a failed download', async () => {
        stubFetch(new Uint8Array(), { status: 404 })

        await expect(resolveFile('https://files.example.com/gone.pdf')).rejects.toThrow('HTTP 404')
    })

    it('lets explicit options win over anything inferred', async () => {
        const { blob, fileName } = await resolveFile(pdfPath, { fileName: 'cac.pdf', contentType: 'image/png' })

        expect(fileName).toBe('cac.pdf')
        expect(blob.type).toBe('image/png')
    })

    it('keeps accepting Blobs and raw bytes', async () => {
        const file = await resolveFile(new File([PDF], 'id-card.jpg'))
        expect(file.fileName).toBe('id-card.jpg')
        expect(file.blob.type).toBe('image/jpeg')

        const bytes = await resolveFile(PDF, { fileName: 'proof.pdf' })
        expect(bytes.fileName).toBe('proof.pdf')
        expect(bytes.blob.type).toBe('application/pdf')
    })
})

describe('documents.upload with file sources', () => {
    it('uploads a file from an absolute path', async () => {
        const { client, lastRequest } = mockClient()

        await client.api.documents.upload('cst_1', 'doc_1', { file: pdfPath })

        const uploaded = (lastRequest().body as FormData).get('fileData') as File
        expect(uploaded.name).toBe('cac certificate.pdf')
        expect(uploaded.type).toBe('application/pdf')
        expect(await bytesOf(uploaded)).toEqual(PDF)
    })

    it('uploads a file downloaded from a URL', async () => {
        stubFetch(PDF, { headers: { 'content-type': 'application/pdf' } })
        const { client, lastRequest } = mockClient()

        await client.api.documents.upload('cst_1', 'doc_1', { file: 'https://files.example.com/cac.pdf' })

        const uploaded = (lastRequest().body as FormData).get('fileData') as File
        expect(uploaded.name).toBe('cac.pdf')
        expect(await bytesOf(uploaded)).toEqual(PDF)
    })

    it('does not call Anchor when the file cannot be resolved', async () => {
        const { client, send } = mockClient()

        await expect(client.api.documents.upload('cst_1', 'doc_1', { file: 'relative.pdf' })).rejects.toThrow(AnchorFileError)
        expect(send).not.toHaveBeenCalled()
    })
})
