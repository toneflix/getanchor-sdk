import { BaseApi } from '../BaseApi'
import type { Customer, PaymentApiQuery } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class SubAccountTransaction extends BaseApi {

    /**
     * List SubAccount Transactions
     *
     * Operation to query SubAccount transactions
     *
     * HTTP GET /api/v1/sub-accounts/transactions
     * Operation ID: getApiV1SubAccountsTransactions
     *
     * @param query include: This can be used to fetch related resources.; page: The page number of the requested page, defaults to 0; size: Number of records in each page, defaults to 20 Type: PaymentApiQuery
     * @returns Success Customer
     */
    async list (query: PaymentApiQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/sub-accounts/transactions', {}, query),
            'GET',
            {},
            {}
        )

        return data
    }
}