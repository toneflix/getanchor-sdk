import { BaseApi } from '../BaseApi'
import type { Customer, CustomerQuery, DownloadDocumentHeader, StatementByStatementIdParams } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class StatementDownload extends BaseApi {

    /**
     * Download a statement
     *
     * Operation to download a generated statement
     *
     * HTTP GET /api/v1/statements/download/{statementId}
     * Operation ID: getApiV1StatementsDownloadStatementId
     *
     * @param params statementId Type: StatementByStatementIdParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @param headers accept: Generated from available response content types Type: DownloadDocumentHeader
     * @returns Success Customer
     */
    async get (params: StatementByStatementIdParams, query: CustomerQuery, headers?: DownloadDocumentHeader): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/statements/download/{statementId}', params, query),
            'GET',
            {},
            ((headers ? { ...headers } : {}) as Record<string, string | undefined>)
        )

        return data
    }
}