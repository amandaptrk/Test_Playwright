import { test, expect } from '@playwright/test'

test.describe.parallel('Checkout Process', () => {
    const baseUrl = 'https://gorest.co.in/public'
    const token = 'access-token=0813b251f3ee401dfb3abc153c164d666baebab085c2efd192fa2e914159f9ad'
    
    test('POST Request - Create a new user', async ({ request }) => {
        const response = await request.post(`${baseUrl}/v2/users/?${token}`, {
            data: {
                name: 'Nana Osaki',
                email: 'osaki_nana@blast.ex',
                gender: 'female',
                status: 'active'
            }
        })
        const responseBody = JSON.parse(await response.text())
        expect(response.status()).toBe(201)
        expect(responseBody.name).toBe('Nana Osaki')
        expect(responseBody.email).toBe('osaki_nana@blast.ex')
        expect(responseBody.gender).toBe('female')
        expect(responseBody.status).toBe('active')
    })

    test('GET Request - Get user details', async ({ request }) => {
        const response = await request.get(`${baseUrl}/v2/users/6900806?${token}`)
        expect(response.status()).toBe(200)

        const responseBody = JSON.parse(await response.text())
        expect(response.status()).toBe(200)
        console.log(responseBody);
    })

    test('PUT Request - Update user details', async ({ request }) => {
        const response = await request.put(`${baseUrl}/v2/users/6900806?${token}`, {
            data: {
                name: 'Nana Honjo',
                status: 'inactive'
            }
        })
        const responseBody = JSON.parse(await response.text())
        expect(response.status()).toBe(200)
        expect(responseBody.name).toBe('Nana Honjo')
        expect(responseBody.email).toBe('honjo_nana@blast.ex')
        expect(responseBody.gender).toBe('female')
        expect(responseBody.status).toBe('inactive')
    });
});