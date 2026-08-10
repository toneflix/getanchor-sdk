import * as sdk from '../src/index'

import { beforeAll, describe, expect, it } from 'vitest'

import { faker } from '@faker-js/faker'

describe('generated sdk exports', () => {
    let customer: sdk.Customer | undefined
    let user: any
    const client = sdk.createClient({})

    beforeAll(() => {
        user = {
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email().toLowerCase(),
            country: 'NG',
        }
    })


    it('can create a customer', async () => {
        const input = {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            country: user.country,
        }

        const response = await client.api.customerApis.list({})
        customer = response

        expect(response).toMatchObject({
            id: expect.any(String),
            ...input,
        })
    })
}, 10000)