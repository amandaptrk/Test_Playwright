import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

const USERNAME = [
    'standard_user',
    'locked_out_user'
  ];

test.describe('Login Success', () => {
    test('Login', async ({ page }) => {
        const username = page.getByPlaceholder('Username');
        await username.fill(USERNAME[0]);
        
        const password = page.getByPlaceholder('Password');
        await password.fill('secret_sauce');

        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByText('Products')).toBeVisible();
    })
});