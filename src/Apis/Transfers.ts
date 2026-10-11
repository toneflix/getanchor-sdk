import { BaseApi } from '../BaseApi'
import type {
    AnchorCollection,
    AnchorDocument,
    BulkTransfer,
    BulkTransferInput,
    CreateTransferInput,
    IncludeQuery,
    RequestOptions,
    Transfer,
    TransferListQuery,
} from '../types'

export class Transfers extends BaseApi {
    /**
     * Start a book transfer (between Anchor accounts) or a NIP transfer (to a
     * counterparty). Pass `options.idempotencyKey` so a retried request cannot
     * move money twice.
     *
     * HTTP POST /api/v1/transfers
     * @see https://docs.getanchor.co/reference/post_api-v1-transfers
     */
    async create (body: CreateTransferInput, options?: RequestOptions) {
        return this.request<AnchorDocument<Transfer>>('POST', '/api/v1/transfers', { body, options })
    }

    /**
     * List transfers. Paginated.
     *
     * HTTP GET /api/v1/transfers
     * @see https://docs.getanchor.co/reference/list-transfers
     */
    async list (query?: TransferListQuery, options?: RequestOptions) {
        return this.request<AnchorCollection<Transfer>>('GET', '/api/v1/transfers', { query, options })
    }

    /**
     * Fetch a transfer.
     *
     * HTTP GET /api/v1/transfers/{transferId}
     * @see https://docs.getanchor.co/reference/get-transfer-details
     */
    async get (transferId: string, query?: IncludeQuery, options?: RequestOptions) {
        return this.request<AnchorDocument<Transfer>>('GET', '/api/v1/transfers/{transferId}', {
            params: { transferId },
            query,
            options,
        })
    }

    /**
     * Re-check a transfer's status with the processor. Use this before treating
     * a pending transfer as failed.
     *
     * HTTP GET /api/v1/transfers/verify/{transferId}
     * @see https://docs.getanchor.co/reference/verify-transfer
     */
    async verify (transferId: string, query?: IncludeQuery, options?: RequestOptions) {
        return this.request<AnchorDocument<Transfer>>('GET', '/api/v1/transfers/verify/{transferId}', {
            params: { transferId },
            query,
            options,
        })
    }

    /**
     * Fetch a transfer by the reference you gave it. Useful for reconciling a
     * request that timed out before Anchor's response arrived.
     *
     * HTTP GET /api/v1/transfers/by-reference/{reference}
     * @see https://docs.getanchor.co/docs/verify-transfer-1
     */
    async getByReference (reference: string, query?: IncludeQuery, options?: RequestOptions) {
        return this.request<AnchorDocument<Transfer>>('GET', '/api/v1/transfers/by-reference/{reference}', {
            params: { reference },
            query,
            options,
        })
    }

    /**
     * Start many transfers in one request.
     *
     * HTTP POST /api/v1/transfers/bulk
     * @see https://docs.getanchor.co/reference/bulk-transfer
     */
    async createBulk (body: BulkTransferInput, options?: RequestOptions) {
        return this.request<AnchorDocument<BulkTransfer>>('POST', '/api/v1/transfers/bulk', { body, options })
    }

    /**
     * Fetch a bulk transfer and its progress counters.
     *
     * HTTP GET /api/v1/transfers/bulk/{bulkTransferId}
     * @see https://docs.getanchor.co/reference/get-bulk-transfer
     */
    async getBulk (bulkTransferId: string, query?: IncludeQuery, options?: RequestOptions) {
        return this.request<AnchorDocument<BulkTransfer>>('GET', '/api/v1/transfers/bulk/{bulkTransferId}', {
            params: { bulkTransferId },
            query,
            options,
        })
    }
}
