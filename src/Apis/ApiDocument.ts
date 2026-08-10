import { BaseApi } from '../BaseApi'
import type { Customer, CustomerQuery, DownloadDocumentParams, UpdateParams } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class ApiDocument extends BaseApi {

    /**
     * Fetch Document
     *
     * Operation to fetch a single document belonging to a customer
     *
     * HTTP GET /api/v1/documents/{customerId}/{documentId}
     * Operation ID: getApiV1DocumentsCustomerIdDocumentId
     *
     * @param params customerId: Id of the customer; documentId: Id of the document Type: DownloadDocumentParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async get (params: DownloadDocumentParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/documents/{customerId}/{documentId}', params, query),
            'GET',
            {},
            {}
        )

        return data
    }

    /**
     * Fetch All Documents
     *
     * Operation to fetch all documents belonging to a customer
     *
     * HTTP GET /api/v1/documents/{customerId}
     * Operation ID: getApiV1DocumentsCustomerId
     *
     * @param params customerId Type: UpdateParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async getGetOperation (params: UpdateParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/documents/{customerId}', params, query),
            'GET',
            {},
            {}
        )

        return data
    }
}