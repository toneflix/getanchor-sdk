import { BaseApi } from '../BaseApi'
import type { Customer, CustomerQuery, VerifyAccountParams } from '../Schema'
import { Http } from '@oapiex/sdk-kit'

export class VerifyAccountPayment extends BaseApi {

    /**
     * Verify Account Number
     *
     * Verify the details of an account number
     *
     * HTTP GET /api/v1/payments/verify-account/{bankIdOrBankCode}/{accountNumber}
     * Operation ID: getApiV1PaymentsVerifyAccountBankIdOrBankCodeAccountNumber
     *
     * @param params accountNumber; bankIdOrBankCode Type: VerifyAccountParams
     * @param query include: This can be used to fetch related resources. Type: CustomerQuery
     * @returns Success Customer
     */
    async get (params: VerifyAccountParams, query: CustomerQuery): Promise<Customer> {
        await this.core.validateAccess()

        const { data } = await Http.send<Customer>(
            this.core.builder.buildTargetUrl('/api/v1/payments/verify-account/{bankIdOrBankCode}/{accountNumber}', params, query),
            'GET',
            {},
            {}
        )

        return data
    }
}