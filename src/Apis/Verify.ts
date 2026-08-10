import { BaseApi } from '../BaseApi'
import type { Customer, CustomerQuery, VerifyParams } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class Verify extends BaseApi {

    /**
     * Verify transfer
     *
     * Operation to verify a transfer
     *
     * HTTP GET /api/v1/transfers/verify/{transferId}
     * Operation ID: getApiV1TransfersVerifyTransferId
     *
     * @param params transferId Type: VerifyParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async get (params: VerifyParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/transfers/verify/{transferId}', params, query),
            'GET',
            {},
            {}
        )

        return data
    }
}