import { BaseApi } from '../BaseApi'
import type {
    AnchorDocument,
    BusinessCustomer,
    BusinessOfficerResource,
    CreateBusinessOfficerInput,
    MessageResource,
    RequestOptions,
    UpdateBusinessInput,
    UpdateBusinessOfficerInput,
} from '../types'

export class Businesses extends BaseApi {
    /**
     * Update a business customer's name, registration details or addresses.
     *
     * HTTP PATCH /api/v1/businesses/{businessId}
     * @see https://docs.getanchor.co/docs/manage-business-customers
     */
    async update (businessId: string, body: UpdateBusinessInput, options?: RequestOptions) {
        return this.request<AnchorDocument<BusinessCustomer>>('PATCH', '/api/v1/businesses/{businessId}', {
            params: { businessId },
            body,
            options,
        })
    }

    /**
     * Add a director or owner to a business customer.
     *
     * HTTP POST /api/v1/businesses/{businessId}/officers
     * @see https://docs.getanchor.co/docs/manage-business-customers#add-business-officer
     */
    async addOfficer (businessId: string, body: CreateBusinessOfficerInput, options?: RequestOptions) {
        return this.request<AnchorDocument<BusinessOfficerResource>>(
            'POST',
            '/api/v1/businesses/{businessId}/officers',
            { params: { businessId }, body, options },
        )
    }

    /**
     * Update a business officer's name, role, ownership or date of birth.
     *
     * HTTP PATCH /api/v1/businesses/{businessId}/officers/{officerId}
     * @see https://docs.getanchor.co/docs/manage-business-customers#update-single-business-officer
     */
    async updateOfficer (businessId: string, officerId: string, body: UpdateBusinessOfficerInput, options?: RequestOptions) {
        return this.request<AnchorDocument<BusinessOfficerResource>>(
            'PATCH',
            '/api/v1/businesses/{businessId}/officers/{officerId}',
            { params: { businessId, officerId }, body, options },
        )
    }

    /**
     * Remove a business officer.
     *
     * HTTP DELETE /api/v1/businesses/{businessId}/officers/{officerId}
     * @see https://docs.getanchor.co/docs/manage-business-customers#delete-business-officer
     */
    async deleteOfficer (businessId: string, officerId: string, options?: RequestOptions) {
        return this.request<AnchorDocument<MessageResource>>(
            'DELETE',
            '/api/v1/businesses/{businessId}/officers/{officerId}',
            { params: { businessId, officerId }, options },
        )
    }
}
