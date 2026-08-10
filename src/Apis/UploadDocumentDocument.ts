import { BaseApi } from '../BaseApi'
import type { Customer, DownloadDocumentParams, UploadDocumentInput, UploadDocumentQuery } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class UploadDocumentDocument extends BaseApi {

    /**
     * Upload Document
     *
     * Operation to upload customer documents
     *
     * HTTP POST /api/v1/documents/upload-document/{customerId}/{documentId}
     * Operation ID: postApiV1DocumentsUploadDocumentCustomerIdDocumentId
     *
     * @param params customerId: Id of the customer; documentId: Id of the document being uploaded Type: DownloadDocumentParams
     * @param query textData: The text data being uploaded Type: UploadDocumentQuery
     * @param body Request body Type: UploadDocumentInput
     * @returns Success Customer
     */
    async create (params: DownloadDocumentParams, query: UploadDocumentQuery, body?: UploadDocumentInput): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/documents/upload-document/{customerId}/{documentId}', params, query),
            'POST',
            body ?? {},
            {}
        )

        return data
    }
}