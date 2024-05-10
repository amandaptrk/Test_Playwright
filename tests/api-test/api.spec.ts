import { test, expect } from '@playwright/test'

test.describe.parallel('Checkout Process', () => {
    const baseUrl = 'https://gorest.co.in/public'
    const token = 'access-token=316b27c3eba437737791d2bec5cf6add9a500df31afa5b1aec84fae7dc579aac'
    
    test('POST Request - Create a new user', async ({ request }) => {
        const response = await request.post(`${baseUrl}/v2/users/?${token}`, {
            data: {
                name: 'Yamazaki Kento',
                email: 'yamaken@aliceinborderland.ex',
                gender: 'male',
                status: 'active'
            }
        })
        const responseBody = JSON.parse(await response.text())
        expect(response.status()).toBe(201)
        expect(responseBody.name).toBe('Yamazaki Kento')
        expect(responseBody.email).toBe('yamaken@aliceinborderland.ex')
        expect(responseBody.gender).toBe('male')
        expect(responseBody.status).toBe('active')
    })

    test('GET Request - Get user details', async ({ request }) => {
        const response = await request.get(`${baseUrl}/v2/users/6901150?${token}`)
        expect(response.status()).toBe(200)
        const responseBody = JSON.parse(await response.text())        
        expect(responseBody.name).toBe('Yamazaki Kento')
        expect(responseBody.email).toBe('yamaken@aliceinborderland.ex')
        expect(responseBody.gender).toBe('male')
        expect(responseBody.status).toBe('active')
    })

    test('PUT Request - Update user details', async ({ request }) => {
        const response = await request.put(`${baseUrl}/v2/users/6901116?${token}`, {
            data: {
                name: 'Kento Yamazakii',
                status: 'inactive'
            }
        })
        const responseBody = JSON.parse(await response.text())
        expect(response.status()).toBe(200)
        expect(responseBody.name).toBe('Kento Yamazakii')
        expect(responseBody.email).toBe('yamaken@aliceinborderland.ex')
        expect(responseBody.gender).toBe('male')
        expect(responseBody.status).toBe('inactive')
    });

    // test('DELETE Request - Get user details', async ({ request }) => {
    //     const response = await request.delete(`${baseUrl}/v2/users/6901116?${token}`)
    //     const responseBody = JSON.parse(await response.text())
    //     expect(response.status()).toBe(204)
    // });
});