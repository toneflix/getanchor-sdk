import { BaseApi } from '../BaseApi'
import type {
  AccountBalance,
  AccountListQuery,
  AnchorCollection,
  AnchorDocument,
  CreateAccountInput,
  DepositAccount,
  FreezeAccountInput,
  IncludeQuery,
  RequestOptions,
  RootAccountQuery,
  UnfreezeAccountInput,
  UpdateAccountInput,
} from '../types'

export class Accounts extends BaseApi {
  /**
   * Open a deposit (or electronic) account for a verified customer. Anchor
   * emits `account.opened` once it is ready.
   *
   * HTTP POST /api/v1/accounts
   * @see https://docs.getanchor.co/reference/post_api-v1-accounts
   */
  async create(body: CreateAccountInput, options?: RequestOptions) {
    return this.request<AnchorDocument<DepositAccount>>('POST', '/api/v1/accounts', {
      body,
      options,
    })
  }

  /**
   * List deposit accounts. Paginated.
   *
   * HTTP GET /api/v1/accounts
   * @see https://docs.getanchor.co/reference/fetchaccounts
   */
  async list(query?: AccountListQuery, options?: RequestOptions) {
    return this.request<AnchorCollection<DepositAccount>>('GET', '/api/v1/accounts', {
      query,
      options,
    })
  }

  /**
   * Fetch a deposit account. Pass `include: 'AccountNumber'` to get its
   * unmasked account numbers in `included`.
   *
   * HTTP GET /api/v1/accounts/{accountId}
   * @see https://docs.getanchor.co/reference/getaccount
   */
  async get(accountId: string, query?: IncludeQuery, options?: RequestOptions) {
    return this.request<AnchorDocument<DepositAccount>>('GET', '/api/v1/accounts/{accountId}', {
      params: { accountId },
      query,
      options,
    })
  }

  /**
   * Change a deposit account's product.
   *
   * HTTP PATCH /api/v1/accounts/{accountId}
   * @see https://docs.getanchor.co/reference/updatebankaccount
   */
  async update(accountId: string, body: UpdateAccountInput, options?: RequestOptions) {
    return this.request<AnchorDocument<DepositAccount>>('PATCH', '/api/v1/accounts/{accountId}', {
      params: { accountId },
      body,
      options,
    })
  }

  /**
   * Fetch an account's available, ledger, hold and pending balances (minor units).
   *
   * HTTP GET /api/v1/accounts/balance/{accountId}
   * @see https://docs.getanchor.co/reference/getaccountbalance
   */
  async balance(accountId: string, options?: RequestOptions) {
    return this.request<AnchorDocument<AccountBalance>>(
      'GET',
      '/api/v1/accounts/balance/{accountId}',
      {
        params: { accountId },
        options,
      },
    )
  }

  /**
   * List the organisation's own master, revenue, settlement and FBO accounts.
   *
   * HTTP GET /api/v1/accounts/root-accounts
   * @see https://docs.getanchor.co/reference/getrootaccounts
   */
  async rootAccounts(query?: RootAccountQuery, options?: RequestOptions) {
    return this.request<AnchorCollection<DepositAccount>>('GET', '/api/v1/accounts/root-accounts', {
      query,
      options,
    })
  }

  /**
   * Freeze an account. A frozen account cannot send or receive money.
   *
   * HTTP POST /api/v1/accounts/{accountId}/freeze
   * @see https://docs.getanchor.co/reference/freezeaccount
   */
  async freeze(accountId: string, body: FreezeAccountInput, options?: RequestOptions) {
    return this.request<AnchorDocument<DepositAccount>>(
      'POST',
      '/api/v1/accounts/{accountId}/freeze',
      {
        params: { accountId },
        body,
        options,
      },
    )
  }

  /**
   * Unfreeze an account. The account id travels in the body.
   *
   * HTTP POST /api/v1/accounts/unfreeze
   * @see https://docs.getanchor.co/reference/unfreezeaccount
   */
  async unfreeze(body: UnfreezeAccountInput, options?: RequestOptions) {
    return this.request<AnchorDocument<DepositAccount>>('POST', '/api/v1/accounts/unfreeze', {
      body,
      options,
    })
  }
}
