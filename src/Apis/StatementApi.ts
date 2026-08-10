import { BaseApi } from '../BaseApi'
import type { Customer, CustomerQuery, PaymentApiQuery, StatementByStatementIdParams, StatementInput } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class StatementApi extends BaseApi {

    /**
     * Create Statement
     *
     * Operation to generate an Account Statement
     *
     * HTTP POST /api/v1/statements
     * Operation ID: postApiV1Statements
     *
     * @param body Request body Type: StatementInput
     * @returns Success Customer
     */
    async create (body: StatementInput): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/statements', {}, {}),
            'POST',
            body ?? {},
            {}
        )

        return data
    }

    /**
     * List Statements
     *
     * Operation to fetch all statements created by an organization
     *
     * HTTP GET /api/v1/statements
     * Operation ID: getApiV1Statements
     *
     * @param query include: This can be used to fetch related resources.; page: The page number of the requested page, defaults to 0; size: Number of records in each page, defaults to 20 Type: PaymentApiQuery
     * @returns Success Customer
     */
    async list (query: PaymentApiQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/statements', {}, query),
            'GET',
            {},
            {}
        )

        return data
    }

    /**
     * Fetch Statement
     *
     * Operation to get details of a statement
     *
     * HTTP GET /api/v1/statements/{statementId}
     * Operation ID: getApiV1StatementsStatementId
     *
     * @param params statementId Type: StatementByStatementIdParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async get (params: StatementByStatementIdParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/statements/{statementId}', params, query),
            'GET',
            {},
            {}
        )

        return data
    }
}