import { test, expect } from '@playwright/test'

test.describe.parallel('Checkout Process', () => {
    const baseUrl = 'https://gorest.co.in/public'
    const token = 'access-token=316b27c3eba437737791d2bec5cf6add9a500df31afa5b1aec84fae7dc579aac'
    
    test('POST Request - Create a new user', async ({ request }) => {
        const response = await request.post(`${baseUrl}/v2/users/?${token}`, {
            data: {
                name: 'Gojo Satoru',
                email: 'gojo_satoru@jjk.ex',
                gender: 'male',
                status: 'active'
            }
        })
        const responseBody = JSON.parse(await response.text())
        console.log(responseBody)
        expect(response.status()).toBe(201)
        expect(responseBody.name).toBe('Gojo Satoru')
        expect(responseBody.email).toBeTruthy()
        expect(responseBody.gender).toBe('male')
        expect(responseBody.status).toBe('active')
    })

    test('GET Request - Get user details', async ({ request }) => {
        const response = await request.get(`${baseUrl}/v2/users/6901338?${token}`)
        const responseBody = JSON.parse(await response.text()) 
        console.log(responseBody)       
        expect(response.status()).toBe(200)
        expect(responseBody.name).toBe('Gojo Satoru')
        expect(responseBody.email).toBeTruthy()
        expect(responseBody.gender).toBe('male')
        expect(responseBody.status).toBe('active')
    })

    test('PUT Request - Update user details', async ({ request }) => {
        const response = await request.put(`${baseUrl}/v2/users/6901338?${token}`, {
            data: {
                name: 'Satoru Gojo',
                status: 'inactive'
            }
        })
        const responseBody = JSON.parse(await response.text())
        expect(response.status()).toBe(200)
        expect(responseBody.name).toBe('Satoru Gojo')
        expect(responseBody.email).toBeTruthy()
        expect(responseBody.gender).toBe('male')
        expect(responseBody.status).toBe('inactive')
    });
});