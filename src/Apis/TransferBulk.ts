import { BaseApi } from '../BaseApi'
import type { BulkByBulkTransferIdParams, BulkInput, Customer, CustomerQuery } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class TransferBulk extends BaseApi {

    /**
     * Create Bulk Transfer
     *
     * Batch multiple transfers in a single request. Example transfer types are NIP and Book Transfer
     *
     * HTTP POST /api/v1/transfers/bulk
     * Operation ID: postApiV1TransfersBulk
     *
     * @param body Request body Type: BulkInput
     * @returns Created Customer
     */
    async create (body: BulkInput): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/transfers/bulk', {}, {}),
            'POST',
            body ?? {},
            {}
        )

        return data
    }

    /**
     * Fetch Bulk Transfer
     *
     * Get the details and list of payment in a bulk transfer
     *
     * HTTP GET /api/v1/transfers/bulk/{bulkTransferId}
     * Operation ID: getApiV1TransfersBulkBulkTransferId
     *
     * @param params bulkTransferId: Id of the bulk transfer Type: BulkByBulkTransferIdParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async get (params: BulkByBulkTransferIdParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/transfers/bulk/{bulkTransferId}', params, query),
            'GET',
            {},
            {}
        )

        return data
    }
}