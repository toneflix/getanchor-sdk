import { BaseApi } from '../BaseApi'
import type { Customer, CustomerQuery, DepositByDepositIdParams, PaymentApiQuery, StatementInput } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class Deposit extends BaseApi {

    /**
     * List Deposit
     *
     * Operation to fetch all Deposit created by an organization
     *
     * HTTP GET /api/v1/savings/deposit
     * Operation ID: getApiV1SavingsDeposit
     *
     * @param query include: This can be used to fetch related resources.; page: The page number of the requested page, defaults to 0; size: Number of records in each page, defaults to 20 Type: PaymentApiQuery
     * @returns Success Customer
     */
    async list (query: PaymentApiQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/savings/deposit', {}, query),
            'GET',
            {},
            {}
        )

        return data
    }

    /**
     * Create a Deposit
     *
     * Operation to create a Deposit
     *
     * HTTP POST /api/v1/savings/deposit
     * Operation ID: postApiV1SavingsDeposit
     *
     * @param body Request body Type: StatementInput
     * @returns Success Customer
     */
    async create (body: StatementInput): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/savings/deposit', {}, {}),
            'POST',
            body ?? {},
            {}
        )

        return data
    }

    /**
     * Fetch a Deposit
     *
     * Operation to get details of a Deposit
     *
     * HTTP GET /api/v1/savings/deposit/{depositId}
     * Operation ID: getApiV1SavingsDepositDepositId
     *
     * @param params depositId Type: DepositByDepositIdParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async get (params: DepositByDepositIdParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/savings/deposit/{depositId}', params, query),
            'GET',
            {},
            {}
        )

        return data
    }
}