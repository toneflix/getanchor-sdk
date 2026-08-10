import { BaseApi } from '../BaseApi'
import type { Customer, CustomerQuery, PaymentApiQuery, TransactionParams } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class Transaction extends BaseApi {

    /**
     * Fetch Transaction
     *
     * Operation to fetch details of a single transaction
     *
     * HTTP GET /api/v1/transactions/{transactionId}
     * Operation ID: getApiV1TransactionsTransactionId
     *
     * @param params transactionId: Id of the transaction Type: TransactionParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async get (params: TransactionParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/transactions/{transactionId}', params, query),
            'GET',
            {},
            {}
        )

        return data
    }

    /**
     * List Transactions
     *
     * Operation to query transactions
     *
     * HTTP GET /api/v1/transactions
     * Operation ID: getApiV1Transactions
     *
     * @param query include: This can be used to fetch related resources.; page: The page number of the requested page, defaults to 0; size: Number of records in each page, defaults to 20 Type: PaymentApiQuery
     * @returns Success Customer
     */
    async list (query: PaymentApiQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/transactions', {}, query),
            'GET',
            {},
            {}
        )

        return data
    }
}