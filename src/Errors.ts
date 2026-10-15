import { HttpException } from '@oapiex/sdk-kit'

/**
 * One entry of Anchor's JSON:API error array.
 *
 * @see https://docs.getanchor.co/reference/errors-1
 */
export interface AnchorErrorObject {
  title?: string
  status?: string
  detail?: string
  [key: string]: unknown
}

/**
 * Thrown for every non-2xx Anchor response. It extends the kit's `HttpException`
 * so existing `instanceof HttpException` handling keeps working, and carries
 * Anchor's own `errors` array, which the kit's generic mapper would discard.
 */
export class AnchorApiError extends HttpException {
  readonly errors: AnchorErrorObject[]
  readonly body: unknown

  constructor(statusCode: number, errors: AnchorErrorObject[], body?: unknown) {
    const first = errors[0]
    const message = first
      ? [first.title, first.detail].filter(Boolean).join(': ') ||
        `Anchor request failed with status ${statusCode}`
      : `Anchor request failed with status ${statusCode}`

    super(
      {
        success: false,
        message,
        status: 'failed',
        data: body,
        meta: {},
        error: {
          type: (first?.title ?? 'ANCHOR_ERROR').toUpperCase().replace(/\s+/g, '_'),
          code: first?.status ?? statusCode,
          message,
          validation_errors: [],
        },
      },
      statusCode,
    )

    this.name = 'AnchorApiError'
    this.errors = errors
    this.body = body
  }

  /**
   * Build an error from a raw response body. Anchor normally answers with
   * `{ errors: [...] }`, but gateways in front of it may return plain text or
   * a `{ message }` object, so both are folded into the same shape.
   *
   * @param statusCode
   * @param body
   */
  static fromResponse(statusCode: number, body: unknown): AnchorApiError {
    if (body && typeof body === 'object') {
      const record = body as Record<string, unknown>

      if (Array.isArray(record.errors)) {
        return new AnchorApiError(statusCode, record.errors as AnchorErrorObject[], body)
      }

      if (typeof record.message === 'string') {
        return new AnchorApiError(
          statusCode,
          [{ status: String(statusCode), detail: record.message }],
          body,
        )
      }
    }

    if (typeof body === 'string' && body.trim()) {
      return new AnchorApiError(
        statusCode,
        [{ status: String(statusCode), detail: body.trim() }],
        body,
      )
    }

    return new AnchorApiError(statusCode, [], body)
  }
}
