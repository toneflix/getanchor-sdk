import { createHmac, timingSafeEqual } from 'node:crypto'

import type { IncludedResource, Relationships } from './types/common'
import type { AnchorEventType } from './types/platform'

/**
 * Anchor signs each webhook delivery with the token you set when creating the
 * webhook. The `x-anchor-signature` header is
 * `Base64(hexDigest(HMAC_SHA1(rawBody, token)))`: note the base64 wraps the
 * *hex string*, not the raw digest bytes. This module verifies that signature
 * in constant time and normalises the payload into one event shape.
 *
 * Anchor's signature carries no timestamp, so it cannot reject replays on its
 * own. Deduplicate on the event `id`, and treat an event as a prompt to fetch
 * the resource from the API rather than as the source of truth.
 *
 * @see https://docs.getanchor.co/docs/verify-webhooks
 */

export const ANCHOR_SIGNATURE_HEADER = 'x-anchor-signature'

/** The IP addresses Anchor documents as webhook senders, for allowlisting. */
export const ANCHOR_WEBHOOK_IPS = ['18.133.55.102'] as const

/** Request headers as delivered (Express-style: a value may be an array). */
export type AnchorWebhookHeaders = Record<string, string | string[] | undefined>

/** A parsed Anchor webhook delivery. */
export interface AnchorWebhookEvent<TType extends string = AnchorEventType> {
  /** The event id, e.g. `1729000028007-anc_et`. Use it to deduplicate deliveries. */
  id: string
  /** The event name, e.g. `nip.transfer.successful`. */
  type: TType
  attributes: {
    createdAt?: string
    failureReason?: string
    [key: string]: unknown
  }
  /** Pointers to the affected resources, e.g. `transfer`, `account`, `payIn`. */
  relationships: Relationships
  /** The affected resources, present when the webhook has "support included" on. */
  included: IncludedResource[]
}

/** Thrown when a webhook cannot be verified or parsed. */
export class AnchorWebhookError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'AnchorWebhookError'
  }
}

export class AnchorWebhooks {
  private readonly secret: string

  /**
   * @param secret The `token` you set on the webhook in Anchor.
   */
  constructor(secret: string) {
    if (!secret) {
      throw new AnchorWebhookError('An Anchor webhook token is required')
    }

    this.secret = secret
  }

  /**
   * Verify a delivery's signature and return the parsed event. Pass the raw
   * request body exactly as received (before any JSON parsing), and either the
   * request headers or the `x-anchor-signature` value itself.
   *
   * @param rawBody
   * @param headersOrSignature
   */
  verify<TType extends string = AnchorEventType>(
    rawBody: string | Buffer,
    headersOrSignature: AnchorWebhookHeaders | string,
  ): AnchorWebhookEvent<TType> {
    const body = toBody(rawBody)
    const signature =
      typeof headersOrSignature === 'string'
        ? headersOrSignature
        : header(headersOrSignature, ANCHOR_SIGNATURE_HEADER)

    if (!signature) {
      throw new AnchorWebhookError('Missing x-anchor-signature header')
    }

    if (!this.isValid(body, signature)) {
      throw new AnchorWebhookError('Invalid Anchor webhook signature')
    }

    return this.parse<TType>(body)
  }

  /**
   * Check a signature without parsing the body.
   *
   * @param rawBody
   * @param signature
   */
  isValid(rawBody: string | Buffer, signature: string): boolean {
    const expected = Buffer.from(this.sign(rawBody))
    const candidate = Buffer.from(signature.trim())

    return candidate.length === expected.length && timingSafeEqual(candidate, expected)
  }

  /**
   * Parse a body into an event without verifying it. Anchor sends events
   * either bare (`{ id, type, ... }`) or, with "support included" on, wrapped
   * as `{ data: { id, type, ... }, included: [...] }`; both come out the same.
   *
   * @param rawBody
   */
  parse<TType extends string = AnchorEventType>(
    rawBody: string | Buffer,
  ): AnchorWebhookEvent<TType> {
    let json: Record<string, unknown>
    try {
      json = JSON.parse(toBody(rawBody)) as Record<string, unknown>
    } catch {
      throw new AnchorWebhookError('Webhook body is not valid JSON')
    }

    const event = (
      json.data && typeof json.data === 'object' && !Array.isArray(json.data) ? json.data : json
    ) as Record<string, unknown>

    if (typeof event.type !== 'string' || !event.type) {
      throw new AnchorWebhookError('Webhook body has no event type')
    }

    return {
      id: String(event.id ?? ''),
      type: event.type as TType,
      attributes: (event.attributes ?? {}) as AnchorWebhookEvent['attributes'],
      relationships: (event.relationships ?? {}) as Relationships,
      included: (Array.isArray(json.included) ? json.included : []) as IncludedResource[],
    }
  }

  /**
   * Compute the signature Anchor would send for a body. Useful in tests and
   * when replaying a stored delivery.
   *
   * @param rawBody
   */
  sign(rawBody: string | Buffer): string {
    const hex = createHmac('sha1', this.secret).update(toBuffer(rawBody)).digest('hex')

    return Buffer.from(hex).toString('base64')
  }
}

const toBody = (rawBody: string | Buffer) =>
  typeof rawBody === 'string' ? rawBody : rawBody.toString('utf8')

const toBuffer = (rawBody: string | Buffer) =>
  typeof rawBody === 'string' ? Buffer.from(rawBody, 'utf8') : rawBody

const header = (headers: AnchorWebhookHeaders, name: string): string => {
  const target = name.toLowerCase()

  for (const key of Object.keys(headers)) {
    if (key.toLowerCase() === target) {
      const value = headers[key]

      return Array.isArray(value) ? (value[0] ?? '') : (value ?? '')
    }
  }

  return ''
}
