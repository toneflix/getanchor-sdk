import { BaseApi } from '../BaseApi'
import type {
  AccountDetail,
  AnchorCollection,
  AnchorDocument,
  BankResource,
  IncludeQuery,
  RequestOptions,
  VerifyAccountsInput,
} from '../types'

export class Banks extends BaseApi {
  /**
   * List the banks Anchor can send to, with their NIP codes.
   *
   * HTTP GET /api/v1/banks
   * @see https://docs.getanchor.co/reference/fetchbanks
   */
  async list(query?: IncludeQuery, options?: RequestOptions) {
    return this.request<AnchorCollection<BankResource>>('GET', '/api/v1/banks', { query, options })
  }

  /**
   * Name enquiry: resolve the account name behind a bank account number.
   *
   * HTTP GET /api/v1/payments/verify-account/{bankIdOrBankCode}/{accountNumber}
   * @see https://docs.getanchor.co/reference/fetch-account-details
   */
  async verifyAccount(bankIdOrBankCode: string, accountNumber: string, options?: RequestOptions) {
    return this.request<AnchorDocument<AccountDetail>>(
      'GET',
      '/api/v1/payments/verify-account/{bankIdOrBankCode}/{accountNumber}',
      { params: { bankIdOrBankCode, accountNumber }, options },
    )
  }

  /**
   * Name enquiry for several accounts at once.
   *
   * HTTP POST /api/v1/payments/verify-account/bulk
   * @see https://docs.getanchor.co/reference/performbulknamevalidation
   */
  async verifyAccounts(body: VerifyAccountsInput, options?: RequestOptions) {
    return this.request<AnchorCollection<AccountDetail>>(
      'POST',
      '/api/v1/payments/verify-account/bulk',
      {
        body,
        options,
      },
    )
  }
}
