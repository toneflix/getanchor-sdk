import { BaseApi } from '../BaseApi'
import type {
  AnchorCollection,
  AnchorDocument,
  IncludeQuery,
  RequestOptions,
  Transaction,
  TransactionListQuery,
} from '../types'

export class Transactions extends BaseApi {
  /**
   * List an account's ledger entries. Paginated. `accountId` is required.
   *
   * HTTP GET /api/v1/transactions
   * @see https://docs.getanchor.co/reference/list-transactions
   */
  async list(query: TransactionListQuery, options?: RequestOptions) {
    return this.request<AnchorCollection<Transaction>>('GET', '/api/v1/transactions', {
      query,
      options,
    })
  }

  /**
   * Fetch a transaction.
   *
   * HTTP GET /api/v1/transactions/{transactionId}
   * @see https://docs.getanchor.co/reference/fetch-transaction
   */
  async get(transactionId: string, query?: IncludeQuery, options?: RequestOptions) {
    return this.request<AnchorDocument<Transaction>>(
      'GET',
      '/api/v1/transactions/{transactionId}',
      {
        params: { transactionId },
        query,
        options,
      },
    )
  }
}
