import { BaseApi } from '../BaseApi'
import type { AnchorDocument, CardTransfer, CreateCardTransferInput, RequestOptions } from '../types'

export class CardTransfers extends BaseApi {
    /**
     * Fund a card from a deposit account, or unfund it back. The direction comes
     * from the `source` and `destination` relationship types. Starts `PENDING`;
     * settle on `cardTransfer.completed` or `cardTransfer.failed`.
     *
     * HTTP POST /api/v1/card-transfers
     * @see https://docs.getanchor.co/docs/card-transfers
     */
    async create (body: CreateCardTransferInput, options?: RequestOptions) {
        return this.request<AnchorDocument<CardTransfer>>('POST', '/api/v1/card-transfers', { body, options })
    }
}
