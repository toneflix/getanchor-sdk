import { BaseApi } from '../BaseApi'
import type {
    AnchorDocument,
    Card,
    CardDetails,
    CardRevealToken,
    CreateCardInput,
    IncludeQuery,
    RequestOptions,
    UpdateCardInput,
} from '../types'

export class Cards extends BaseApi {
    /**
     * Issue a card to a verified customer. Issuance is asynchronous: the card
     * comes back `PENDING`; wait for the `card.created` event before using it.
     *
     * HTTP POST /api/v1/cards
     * @see https://docs.getanchor.co/docs/create-card
     */
    async create (body: CreateCardInput, options?: RequestOptions) {
        return this.request<AnchorDocument<Card>>('POST', '/api/v1/cards', { body, options })
    }

    /**
     * Fetch a card's non-sensitive details (masked PAN, last four, status, balance).
     *
     * HTTP GET /api/v1/cards/{cardId}
     * @see https://docs.getanchor.co/docs/manage-cards
     */
    async get (cardId: string, query?: IncludeQuery, options?: RequestOptions) {
        return this.request<AnchorDocument<Card>>('GET', '/api/v1/cards/{cardId}', {
            params: { cardId },
            query,
            options,
        })
    }

    /**
     * Change a card's description, the only attribute that can change after creation.
     *
     * HTTP POST /api/v1/cards/{cardId}
     * @see https://docs.getanchor.co/docs/manage-cards#update-card
     */
    async update (cardId: string, body: UpdateCardInput, options?: RequestOptions) {
        return this.request<AnchorDocument<Card>>('POST', '/api/v1/cards/{cardId}', {
            params: { cardId },
            body,
            options,
        })
    }

    /**
     * Freeze a lost, stolen or unused card. Refresh the card afterwards rather
     * than assuming the new status.
     *
     * HTTP POST /api/v1/cards/{cardId}/freeze
     * @see https://docs.getanchor.co/docs/manage-cards#freeze-card
     */
    async freeze (cardId: string, options?: RequestOptions) {
        return this.request<AnchorDocument<Card>>('POST', '/api/v1/cards/{cardId}/freeze', {
            params: { cardId },
            options,
        })
    }

    /**
     * Unfreeze a card. Not every frozen card is eligible; check the returned status.
     *
     * HTTP POST /api/v1/cards/{cardId}/unfreeze
     * @see https://docs.getanchor.co/docs/manage-cards#unfreeze-card
     */
    async unfreeze (cardId: string, options?: RequestOptions) {
        return this.request<AnchorDocument<Card>>('POST', '/api/v1/cards/{cardId}/unfreeze', {
            params: { cardId },
            options,
        })
    }

    /**
     * Cancel a card permanently.
     *
     * HTTP DELETE /api/v1/cards/{cardId}
     * @see https://docs.getanchor.co/docs/manage-cards#cancel-card
     */
    async cancel (cardId: string, options?: RequestOptions) {
        return this.request<AnchorDocument<Card> | undefined>('DELETE', '/api/v1/cards/{cardId}', {
            params: { cardId },
            options,
        })
    }

    /**
     * Step 1 of revealing PAN, CVV, PIN and expiry: mint a short-lived token
     * scoped to this card. Generate one per reveal; never store or log it.
     *
     * HTTP POST /api/v1/cards/{cardId}/reveal-token
     * @see https://docs.getanchor.co/docs/create-card#5-retrieving-sensitive-card-details
     */
    async createRevealToken (cardId: string, options?: RequestOptions) {
        return this.request<AnchorDocument<CardRevealToken>>('POST', '/api/v1/cards/{cardId}/reveal-token', {
            params: { cardId },
            options,
        })
    }

    /**
     * Fetch a card's PAN, CVV, PIN and expiry.
     *
     * Pass `{ cardId }` to do both steps in one call: the SDK mints a fresh reveal
     * token for the card and spends it immediately, so the token never reaches
     * your code. Pass a reveal token string instead if you minted one yourself
     * with `createRevealToken`.
     *
     * The token is sent as the bearer credential *instead of* your API key.
     * Never store or log the details this returns.
     *
     * HTTP POST /api/v1/cards/{cardId}/reveal-token (with `{ cardId }`)
     * HTTP GET /api/v1/cards/details
     * @see https://docs.getanchor.co/docs/create-card#5-retrieving-sensitive-card-details
     */
    async revealDetails (card: { cardId: string }, options?: Omit<RequestOptions, 'idempotencyKey'>): Promise<AnchorDocument<CardDetails>>
    async revealDetails (revealToken: string, options?: Omit<RequestOptions, 'idempotencyKey'>): Promise<AnchorDocument<CardDetails>>
    async revealDetails (source: string | { cardId: string }, options?: Omit<RequestOptions, 'idempotencyKey'>) {
        const revealToken = typeof source === 'string'
            ? source
            : (await this.createRevealToken(source.cardId, options)).data?.token

        if (!revealToken) {
            throw new Error('Anchor did not return a card reveal token')
        }

        return this.request<AnchorDocument<CardDetails>>('GET', '/api/v1/cards/details', {
            auth: false,
            options: { ...options, headers: { ...options?.headers, Authorization: `Bearer ${revealToken}` } },
        })
    }
}
