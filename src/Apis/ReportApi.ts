import { BaseApi } from '../BaseApi'
import type { Customer, CustomerQuery, PaymentApiQuery, ReportByReportIdParams, ReportInput } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class ReportApi extends BaseApi {

    /**
     * List Reports
     *
     * Operation to fetch all Reports created by an organization
     *
     * HTTP GET /api/v1/reports
     * Operation ID: getApiV1Reports
     *
     * @param query include: This can be used to fetch related resources.; page: The page number of the requested page, defaults to 0; size: Number of records in each page, defaults to 20 Type: PaymentApiQuery
     * @returns Success Customer
     */
    async list (query: PaymentApiQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/reports', {}, query),
            'GET',
            {},
            {}
        )

        return data
    }

    /**
     * Create a Report
     *
     * Operation to create a Report
     *
     * HTTP POST /api/v1/reports
     * Operation ID: postApiV1Reports
     *
     * @param body Request body Type: ReportInput
     * @returns Success Customer
     */
    async create (body: ReportInput): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/reports', {}, {}),
            'POST',
            body ?? {},
            {}
        )

        return data
    }

    /**
     * Fetch a Report
     *
     * Operation to get details of a report
     *
     * HTTP GET /api/v1/reports/{reportId}
     * Operation ID: getApiV1ReportsReportId
     *
     * @param params reportId Type: ReportByReportIdParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async get (params: ReportByReportIdParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/reports/{reportId}', params, query),
            'GET',
            {},
            {}
        )

        return data
    }
}