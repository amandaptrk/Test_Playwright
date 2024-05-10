import { test, expect } from '@playwright/test'


test.describe.parallel("API Testing", () => {
    const baseUrl = 'https://gorest.co.in/public'
    const token = 'access-token=0813b251f3ee401dfb3abc153c164d666baebab085c2efd192fa2e914159f9ad'

    test('Simple API Test - Assert Response Status', async ({ request }) => {
        const response = await request.get(`${baseUrl}/v2/users/6900806?${token}`)
        expect(response.status()).toBe(200)

        const responseBody = JSON.parse(await response.text())
        console.log(responseBody);
    })

    test('POST Request - Create a new user', async ({ request }) => {
        const response = await request.post(`${baseUrl}/v2/users/?access-token=0813b251f3ee401dfb3abc153c164d666baebab085c2efd192fa2e914159f9ad`, {
            data: {
                name: 'Nana Komatsu',
                email: 'komatsu_nana@blast.ex',
                gender: 'female',
                status: 'active'
            }
        })
        const responseBody = JSON.parse(await response.text())
        expect(response.status()).toBe(201)
        expect(responseBody.name).toBe('Nana Komtsu')
        expect(responseBody.email).toBe('komatsu_nana@blast.ex')
        expect(responseBody.gender).toBe('female')
        expect(responseBody.status).toBe('active')
    })
})