import { BaseApi } from '../BaseApi'
import type {
  AnchorDocument,
  CreatePayWithTransferInput,
  CreateReservedAccountInput,
  IncludeQuery,
  PayIn,
  PayWithTransfer,
  RequestOptions,
  ReservedAccount,
} from '../types'

/**
 * Anchor's payment program: per-customer reserved account numbers, single-use
 * pay-with-transfer accounts, and the pay-ins they receive. These live under
 * `/pay` rather than `/api/v1`, and in production need the payment program
 * enabled on your organisation.
 */
export class ReservedAccounts extends BaseApi {
  /**
   * Create a permanent account number for a customer. Pass an existing
   * customer relationship, or customer details to create both in one call.
   * Anchor emits `reservedAccount.created` or `reservedAccount.failed`.
   *
   * HTTP POST /pay/reserved-account
   * @see https://docs.getanchor.co/docs/reserved-accounts
   */
  async create(body: CreateReservedAccountInput, options?: RequestOptions) {
    return this.request<AnchorDocument<ReservedAccount>>('POST', '/pay/reserved-account', {
      body,
      options,
    })
  }
}

export class PayWithTransfers extends BaseApi {
  /**
   * Create a dynamic account number that expects one payment of a set amount
   * and expires (at most one hour).
   *
   * HTTP POST /pay/pay-with-transfer
   * @see https://docs.getanchor.co/docs/pay-with-transfer
   */
  async create(body: CreatePayWithTransferInput, options?: RequestOptions) {
    return this.request<AnchorDocument<PayWithTransfer>>('POST', '/pay/pay-with-transfer', {
      body,
      options,
    })
  }

  /**
   * Fetch a pay-with-transfer account. Once paid, its `payin` relationship is set.
   *
   * HTTP GET /pay/pay-with-transfer/{payWithTransferId}
   * @see https://docs.getanchor.co/docs/pay-with-transfer
   */
  async get(payWithTransferId: string, query?: IncludeQuery, options?: RequestOptions) {
    return this.request<AnchorDocument<PayWithTransfer>>(
      'GET',
      '/pay/pay-with-transfer/{payWithTransferId}',
      {
        params: { payWithTransferId },
        query,
        options,
      },
    )
  }
}

export class PayIns extends BaseApi {
  /**
   * Fetch a payment received into a reserved or pay-with-transfer account.
   * Pass `include: 'Charge,ReservedAccount'` for sender details. This replaces
   * the retired `/api/v1/payments` endpoints for reserved accounts.
   *
   * HTTP GET /pay/payin/{payInId}
   * @see https://docs.getanchor.co/docs/receiving-payment-to-reserved-account
   */
  async get(payInId: string, query?: IncludeQuery, options?: RequestOptions) {
    return this.request<AnchorDocument<PayIn>>('GET', '/pay/payin/{payInId}', {
      params: { payInId },
      query,
      options,
    })
  }
}
