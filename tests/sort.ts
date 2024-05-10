import { expect, type Locator, type Page } from '@playwright/test';

export class inventoryPage {
    readonly url = 'https://www.saucedemo.com/inventory.html'
    readonly page: Page;
    readonly sort: Locator;
    readonly mostExpensive: Locator;
    readonly leastExpensive: Locator;
    readonly firstItem: Locator;
    readonly lastItem: Locator;

    constructor(page: Page) {
        this.page = page;
        this.sort = page.locator('select', { hasText: 'Name (A to Z)'});
        this.firstItem = page.getByTestId('add-to-cart-sauce-labs-backpack');
        this.lastItem = page.getByTestId('add-to-cart-test.allthethings()-t-shirt-(red)');
        this.mostExpensive = page.getByTestId('add-to-cart-sauce-labs-fleece-jacket');
        this.leastExpensive = page.getByTestId('add-to-cart-sauce-labs-onesie');
    }
    async goto(){
        await this.page.goto(this.url);
    } 

    async sortDescendingName() {
        await this.sort.selectOption('Name (Z to A)');
        await expect(this.firstItem).not.toBeInViewport();
    }
    async sortAscendingName() {
        await this.sort.selectOption('Name (A to Z)');
        await expect(this.lastItem).not.toBeInViewport();
    }
    async sortDescendingPrice() {
        await this.sort.selectOption('Price (high to low)');
        await expect(this.leastExpensive).not.toBeInViewport();
    }
    async sortAscendingPrice() {
        await this.sort.selectOption('Price (low to high)');
        await expect(this.mostExpensive).not.toBeInViewport();
    }
}
