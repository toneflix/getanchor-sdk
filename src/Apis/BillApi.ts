import { BaseApi } from '../BaseApi'
import type { BillByBillPaymentIdParams, BillInput, Customer, CustomerQuery, PaymentApiQuery } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class BillApi extends BaseApi {

    /**
     * Create Bill Payment
     *
     * COMING SOON
     *
     * HTTP POST /api/v1/bills
     * Operation ID: postApiV1Bills
     *
     * @param body Request body Type: BillInput
     * @returns Success Customer
     */
    async create (body?: BillInput): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/bills', {}, {}),
            'POST',
            body ?? {},
            {}
        )

        return data
    }

    /**
     * List Bills Payment
     *
     * HTTP GET /api/v1/bills
     * Operation ID: getApiV1Bills
     *
     * @param query include: This can be used to fetch related resources.; page: The page number of the requested page, defaults to 0; size: Number of records in each page, defaults to 20 Type: PaymentApiQuery
     * @returns Success Customer
     */
    async list (query: PaymentApiQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/bills', {}, query),
            'GET',
            {},
            {}
        )

        return data
    }

    /**
     * Fetch Bill Payment
     *
     * Fetch details of a bill payment by id.
     *
     * HTTP GET /api/v1/bills/{billPaymentId}
     * Operation ID: getApiV1BillsBillPaymentId
     *
     * @param params billPaymentId Type: BillByBillPaymentIdParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async get (params: BillByBillPaymentIdParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/bills/{billPaymentId}', params, query),
            'GET',
            {},
            {}
        )

        return data
    }
}