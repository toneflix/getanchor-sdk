import { BaseApi } from '../BaseApi'
import type { Customer, CustomerQuery, DownloadDocumentHeader, DownloadDocumentParams } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class DownloadDocumentDocument extends BaseApi {

    /**
     * Download Document
     *
     * Operation to download a customer's document
     *
     * HTTP GET /api/v1/documents/download-document/{customerId}/{documentId}
     * Operation ID: getApiV1DocumentsDownloadDocumentCustomerIdDocumentId
     *
     * @param params customerId; documentId Type: DownloadDocumentParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @param headers accept: Generated from available response content types Type: DownloadDocumentHeader
     * @returns Success Customer
     */
    async get (params: DownloadDocumentParams, query: CustomerQuery, headers?: DownloadDocumentHeader): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/documents/download-document/{customerId}/{documentId}', params, query),
            'GET',
            {},
            ((headers ? { ...headers } : {}) as Record<string, string | undefined>)
        )

        return data
    }
}