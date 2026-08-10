import { BaseApi } from '../BaseApi'
import type { Customer, CustomerQuery, PaymentApiQuery, PaymentParams } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class Payment extends BaseApi {

    /**
     * Fetch Payment
     *
     * Fetch a received payment details by id.
     *
     * HTTP GET /api/v1/payments/{paymentId}
     * Operation ID: getApiV1PaymentsPaymentId
     *
     * @param params paymentId: Id of the payment Type: PaymentParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async get (params: PaymentParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/payments/{paymentId}', params, query),
            'GET',
            {},
            {}
        )

        return data
    }

    /**
     * List Payments
     *
     * List all payments. Paging and filtering can be applied.
     *
     * HTTP GET /api/v1/payments
     * Operation ID: getApiV1Payments
     *
     * @param query include: This can be used to fetch related resources.; page: The page number of the requested page, defaults to 0; size: Number of records in each page, defaults to 20 Type: PaymentApiQuery
     * @returns Success Customer
     */
    async list (query: PaymentApiQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/payments', {}, query),
            'GET',
            {},
            {}
        )

        return data
    }
}