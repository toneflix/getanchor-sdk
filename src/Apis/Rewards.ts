import { BaseApi } from '../BaseApi'
import type { AnchorDocument, CreateRewardInput, RequestOptions, Reward } from '../types'

export class Rewards extends BaseApi {
  /**
   * Credit a customer's account from one of yours with an auditable "reward"
   * label (sign-up bonuses, referral payouts, goodwill credits).
   *
   * HTTP POST /api/v1/rewards
   * @see https://docs.getanchor.co/docs/rewards
   */
  async create(body: CreateRewardInput, options?: RequestOptions) {
    return this.request<AnchorDocument<Reward>>('POST', '/api/v1/rewards', { body, options })
  }
}
