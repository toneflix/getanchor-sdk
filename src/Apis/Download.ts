import { BaseApi } from '../BaseApi'
import type { Customer, CustomerQuery, DownloadDocumentHeader, ReportByReportIdParams } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class Download extends BaseApi {

    /**
     * Download a report document
     *
     * Operation to download a generated report
     *
     * HTTP GET /api/v1/reports/download/{reportId}
     * Operation ID: getApiV1ReportsDownloadReportId
     *
     * @param params reportId Type: ReportByReportIdParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @param headers accept: Generated from available response content types Type: DownloadDocumentHeader
     * @returns Success Customer
     */
    async get (params: ReportByReportIdParams, query: CustomerQuery, headers?: DownloadDocumentHeader): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/reports/download/{reportId}', params, query),
            'GET',
            {},
            ((headers ? { ...headers } : {}) as Record<string, string | undefined>)
        )

        return data
    }
}