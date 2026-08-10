import { BaseApi } from '../BaseApi'
import type { Customer, CustomerQuery, PaymentApiQuery, RolloverParams, StatementInput, WithdrawalByWithdrawalIdParams } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class Withdrawal extends BaseApi {

    /**
     * List Withdrawal
     *
     * Operation to fetch all Withdrawal created by an organization
     *
     * HTTP GET /api/v1/savings/withdrawal
     * Operation ID: getApiV1SavingsWithdrawal
     *
     * @param query include: This can be used to fetch related resources.; page: The page number of the requested page, defaults to 0; size: Number of records in each page, defaults to 20 Type: PaymentApiQuery
     * @returns Success Customer
     */
    async list (query: PaymentApiQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/savings/withdrawal', {}, query),
            'GET',
            {},
            {}
        )

        return data
    }

    /**
     * Create a Withdrawal
     *
     * Operation to create a Withdrawal
     *
     * HTTP POST /api/v1/savings/withdrawal
     * Operation ID: postApiV1SavingsWithdrawal
     *
     * @param body Request body Type: StatementInput
     * @returns Success Customer
     */
    async create (body: StatementInput): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/savings/withdrawal', {}, {}),
            'POST',
            body ?? {},
            {}
        )

        return data
    }

    /**
     * Savings withdrawal data
     *
     * Operation to get savings withdrawal daya
     *
     * HTTP GET /api/v1/savings/{savingsId}/withdrawal
     * Operation ID: getApiV1SavingsSavingsIdWithdrawal
     *
     * @param params savingsId Type: RolloverParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async get (params: RolloverParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/savings/{savingsId}/withdrawal', params, query),
            'GET',
            {},
            {}
        )

        return data
    }

    /**
     * Fetch a Withdrawal
     *
     * Operation to get details of a Withdrawal
     *
     * HTTP GET /api/v1/savings/withdrawal/{withdrawalId}
     * Operation ID: getApiV1SavingsWithdrawalWithdrawalId
     *
     * @param params withdrawalId Type: WithdrawalByWithdrawalIdParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async getGetOperation (params: WithdrawalByWithdrawalIdParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/savings/withdrawal/{withdrawalId}', params, query),
            'GET',
            {},
            {}
        )

        return data
    }
}