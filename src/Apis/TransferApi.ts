import { BaseApi } from '../BaseApi'
import type { Customer, CustomerQuery, PaymentApiQuery, TransferHeader, TransferInput, VerifyParams } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class TransferApi extends BaseApi {

    /**
     * Initiate Transfer
     *
     * Endpoint to do transfer
     *
     * HTTP POST /api/v1/transfers
     * Operation ID: postApiV1Transfers
     *
     * @param body Request body Type: TransferInput
     * @param headers x-anchor-idempotent-key: This endpoint support the optional Idempotency feature. Type: TransferHeader
     * @returns Created Customer
     */
    async create (body?: TransferInput, headers?: TransferHeader): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/transfers', {}, {}),
            'POST',
            body ?? {},
            ((headers ? { ...headers } : {}) as Record<string, string | undefined>)
        )

        return data
    }

    /**
     * List Transfers
     *
     * Operation to query transfers
     *
     * HTTP GET /api/v1/transfers
     * Operation ID: getApiV1Transfers
     *
     * @param query include: This can be used to fetch related resources.; page: The page number of the requested page, defaults to 0; size: Number of records in each page, defaults to 20 Type: PaymentApiQuery
     * @returns Success Customer
     */
    async list (query: PaymentApiQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/transfers', {}, query),
            'GET',
            {},
            {}
        )

        return data
    }

    /**
     * Fetch Transfer
     *
     * Operation to get details of a single transfer
     *
     * HTTP GET /api/v1/transfers/{transferId}
     * Operation ID: getApiV1TransfersTransferId
     *
     * @param params transferId: Id of the transfer Type: VerifyParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async get (params: VerifyParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/transfers/{transferId}', params, query),
            'GET',
            {},
            {}
        )

        return data
    }
}