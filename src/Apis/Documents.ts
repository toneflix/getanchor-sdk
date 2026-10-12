import type {
    AnchorCollection,
    AnchorDocument,
    CustomerDocument,
    DocumentUploadInput,
    IncludeQuery,
    RequestOptions,
} from '../types'

import { BaseApi } from '../BaseApi'
import { resolveFile } from '../Files'

export class Documents extends BaseApi {
    /**
     * List the documents a customer has, or still needs, for KYB.
     *
     * HTTP GET /api/v1/documents/{customerId}
     * @see https://docs.getanchor.co/reference/fetch-all-documents
     */
    async list(customerId: string, query?: IncludeQuery, options?: RequestOptions) {
        return this.request<AnchorCollection<CustomerDocument>>('GET', '/api/v1/documents/{customerId}', {
            params: { customerId },
            query,
            options,
        })
    }

    /**
     * Fetch a document.
     *
     * HTTP GET /api/v1/documents/{customerId}/{documentId}
     * @see https://docs.getanchor.co/reference/fetch-document
     */
    async get(customerId: string, documentId: string, query?: IncludeQuery, options?: RequestOptions) {
        return this.request<AnchorDocument<CustomerDocument>>('GET', '/api/v1/documents/{customerId}/{documentId}', {
            params: { customerId, documentId },
            query,
            options,
        })
    }

    /**
     * Download an uploaded document.
     *
     * HTTP GET /api/v1/documents/download-document/{customerId}/{documentId}
     * @see https://docs.getanchor.co/reference/download-document
     */
    async download(customerId: string, documentId: string, options?: RequestOptions) {
        return this.request<AnchorDocument<string>>(
            'GET',
            '/api/v1/documents/download-document/{customerId}/{documentId}',
            { params: { customerId, documentId }, options },
        )
    }

    /**
     * Fulfil a required document, either as a file (multipart `fileData`) or as
     * a text value such as a TIN or RC number (`textData`). A file can be a
     * Blob, bytes, an absolute path, or an `http(s)` URL to download.
     *
     * HTTP POST /api/v1/documents/upload-document/{customerId}/{documentId}
     * @see https://docs.getanchor.co/reference/upload-document
     */
    async upload(customerId: string, documentId: string, input: DocumentUploadInput, options?: RequestOptions) {
        const path = '/api/v1/documents/upload-document/{customerId}/{documentId}'
        const params = { customerId, documentId }

        if ('text' in input) {
            return this.request<AnchorDocument<CustomerDocument>>('POST', path, {
                params,
                query: { textData: input.text },
                options,
            })
        }

        const { blob, fileName } = await resolveFile(input.file, input)

        const form = new FormData()
        form.append('fileData', blob, fileName)

        return this.request<AnchorDocument<CustomerDocument>>('POST', path, {
            params,
            body: form,
            // Without this the kit's JSON default makes axios serialise the form as JSON.
            options: { ...options, headers: { 'Content-Type': 'multipart/form-data', ...options?.headers } },
        })
    }
}
