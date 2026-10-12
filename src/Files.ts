import { basename, extname, isAbsolute } from 'node:path'

import { fileURLToPath } from 'node:url'
import { readFile } from 'node:fs/promises'

/**
 * Anything an upload endpoint accepts as a file:
 *
 * - a `Blob` (or `File`) or raw bytes (`Uint8Array`, `Buffer`);
 * - an absolute path on disk, or a `file://` URL;
 * - an `http(s)://` URL, which is downloaded first.
 */
export type FileSource = Blob | Uint8Array | string

export interface FileOptions {
    /** Overrides the name inferred from the path, URL or `File`. */
    fileName?: string
    /** Overrides the type inferred from the response or file extension. */
    contentType?: string
}

export interface ResolvedFile {
    blob: Blob
    fileName: string
}

/** Thrown when a file source cannot be read or downloaded. */
export class AnchorFileError extends Error {
    constructor(message: string, options?: { cause?: unknown }) {
        super(message, options)
        this.name = 'AnchorFileError'
    }
}

const DEFAULT_NAME = 'document'

const MIME_TYPES: Record<string, string> = {
    '.pdf': 'application/pdf',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.heic': 'image/heic',
    '.tif': 'image/tiff',
    '.tiff': 'image/tiff',
    '.doc': 'application/msword',
    '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    '.csv': 'text/csv',
    '.txt': 'text/plain',
}

const typeFromName = (name: string) => MIME_TYPES[extname(name).toLowerCase()] ?? 'application/octet-stream'

/**
 * Turn a file source into a `Blob` with a file name, ready for multipart upload.
 *
 * Note: downloading a URL makes a request from your server. Only pass URLs you
 * trust (for example, your own storage), never one taken straight from a user,
 * or the upload becomes a way to make your server fetch arbitrary addresses.
 *
 * @param source
 * @param options
 */
export const resolveFile = async (source: FileSource, options: FileOptions = {}): Promise<ResolvedFile> => {
    if (typeof source === 'string') {
        return /^https?:\/\//i.test(source) ? fromUrl(source, options) : fromPath(source, options)
    }

    if (source instanceof Blob) {
        const fileName = options.fileName ?? ((source as File).name || DEFAULT_NAME)
        const type = options.contentType ?? (source.type || typeFromName(fileName))

        return { blob: source.type === type ? source : new Blob([source], { type }), fileName }
    }

    const fileName = options.fileName ?? DEFAULT_NAME

    return {
        blob: new Blob([source as Uint8Array<ArrayBuffer>], { type: options.contentType ?? typeFromName(fileName) }),
        fileName,
    }
}

const fromPath = async (source: string, options: FileOptions): Promise<ResolvedFile> => {
    const path = source.startsWith('file:') ? fileURLToPath(source) : source

    if (!isAbsolute(path)) {
        throw new AnchorFileError(`File paths must be absolute, got "${source}"`)
    }

    let bytes: Uint8Array
    try {
        bytes = await readFile(path)
    } catch (error) {
        throw new AnchorFileError(`Could not read file "${path}"`, { cause: error })
    }

    const fileName = options.fileName ?? basename(path)

    return {
        blob: new Blob([bytes as Uint8Array<ArrayBuffer>], { type: options.contentType ?? typeFromName(fileName) }),
        fileName,
    }
}

const fromUrl = async (url: string, options: FileOptions): Promise<ResolvedFile> => {
    let response: Response
    try {
        response = await fetch(url)
    } catch (error) {
        throw new AnchorFileError(`Could not download "${url}"`, { cause: error })
    }

    if (!response.ok) {
        throw new AnchorFileError(`Could not download "${url}": HTTP ${response.status}`)
    }

    const fileName = options.fileName
        ?? nameFromDisposition(response.headers.get('content-disposition'))
        ?? (basename(decodeURIComponent(new URL(url).pathname)) || DEFAULT_NAME)

    const served = response.headers.get('content-type')?.split(';')[0]?.trim()
    const type = options.contentType
        ?? (served && served !== 'application/octet-stream' ? served : typeFromName(fileName))

    return { blob: new Blob([await response.arrayBuffer()], { type }), fileName }
}

const nameFromDisposition = (header: string | null): string | undefined => {
    if (!header) return undefined

    const encoded = header.match(/filename\*\s*=\s*(?:UTF-8'')?([^;]+)/i)?.[1]
    if (encoded) return decodeURIComponent(encoded.trim().replace(/^"|"$/g, ''))

    return header.match(/filename\s*=\s*"?([^";]+)"?/i)?.[1]?.trim()
}
