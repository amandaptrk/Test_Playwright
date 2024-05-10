import { test, expect, type Page } from '@playwright/test';
import { loginPage } from '../tests/login.ts';
import { checkoutProcess } from '../tests/checkout.ts';

test.beforeEach(async ({ page }) => {
    const login = new loginPage(page);
    await login.goto();
    await login.enterUsername('standard_user');
    await login.enterPassword('secret_sauce');
    await login.clickLogin();
});

test.describe('Checkout Process', () => {
    test('Checkout two item', async ({ page }) => {
        const checkout = new checkoutProcess(page);
        await checkout.clickAddToCart();
        await checkout.cartBadge.getByText('1').isVisible();
        await checkout.clickAddToCart();
        await checkout.cartBadge.getByText('2').isVisible();
        await expect(page.getByText('Remove')).toHaveCount(2);

        await checkout.clickCartIcon();
        await checkout.clickCheckout();
        await checkout.enterFirstName('Amanda');
        await checkout.enterLastName('Putri');
        await checkout.enterPostCode('123456');
        await checkout.clickContinue();

        await checkout.clickFinish();
        await expect(page.getByText('Thank you for your order!')).toBeVisible();
        await expect(page.getByRole('button', { name: 'Back Home'})).toBeVisible();
    });
});