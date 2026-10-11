import { describe, expect, it } from 'vitest'

import { findIncluded, includedOfType, relationshipId, relationshipIds } from '../src/index'

const document = {
    data: {
        id: 'acc_1',
        type: 'DepositAccount',
        attributes: {},
        relationships: {
            customer: { data: { id: 'cst_1', type: 'IndividualCustomer' } },
            accountNumbers: { data: [{ id: 'num_1', type: 'AccountNumber' }, { id: 'num_2', type: 'AccountNumber' }] },
            subAccounts: { data: [] },
        },
    },
    included: [
        { id: 'num_1', type: 'AccountNumber', attributes: { accountNumber: '2962576964' } },
        { id: 'num_2', type: 'AccountNumber', attributes: { accountNumber: '5031000017' } },
        { id: 'cst_1', type: 'IndividualCustomer', attributes: { email: 'ada@example.com' } },
    ],
}

describe('JSON:API helpers', () => {
    it('reads to-one and to-many relationship ids', () => {
        expect(relationshipId(document.data, 'customer')).toBe('cst_1')
        expect(relationshipId(document.data, 'accountNumbers')).toBeUndefined()
        expect(relationshipIds(document.data, 'accountNumbers')).toEqual(['num_1', 'num_2'])
        expect(relationshipIds(document.data, 'subAccounts')).toEqual([])
        expect(relationshipIds(document.data, 'missing')).toEqual([])
    })

    it('follows a relationship into included', () => {
        expect(findIncluded(document, [document.data, 'customer'])?.attributes).toEqual({ email: 'ada@example.com' })
        expect(findIncluded(document, { id: 'num_2', type: 'AccountNumber' })?.id).toBe('num_2')
        expect(findIncluded(document, [document.data, 'missing'])).toBeUndefined()
    })

    it('tolerates a relationship type that differs from the included type', () => {
        // Anchor events point at "Customer" while included carries "IndividualCustomer".
        expect(findIncluded(document, { id: 'cst_1', type: 'Customer' })?.type).toBe('IndividualCustomer')
    })

    it('filters included by type', () => {
        expect(includedOfType(document, 'AccountNumber').map(item => item.id)).toEqual(['num_1', 'num_2'])
    })
})
