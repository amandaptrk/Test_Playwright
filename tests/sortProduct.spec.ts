import { test, expect, type Page } from '@playwright/test';
import { loginPage } from '../tests/login.ts';
import { inventoryPage } from './sort.ts';

test.beforeEach(async ({ page }) => {
    const login = new loginPage(page);
    await login.goto();
    await login.enterUsername('standard_user');
    await login.enterPassword('secret_sauce');
    await login.clickLogin();
});

test.describe('Sort Product', () => {
    test('Sort by Ascending Name', async ({ page }) => {
        const sort = new inventoryPage(page);
        await sort.sortAscendingName();
    });

    test('Sort by Descending Name', async ({ page }) => {
        const sort = new inventoryPage(page);
        await sort.sortDescendingName();
    });
    
    test('Sort by Ascending Price', async ({ page }) => {
        const sort = new inventoryPage(page);
        await sort.sortAscendingPrice();
    });

    test('Sort by Descending Price', async ({ page }) => {
        const sort = new inventoryPage(page);
        await sort.sortDescendingPrice();
    });
});