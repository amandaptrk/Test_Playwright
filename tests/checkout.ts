import { expect, type Locator, type Page } from '@playwright/test';

export class checkoutProcess {
    readonly page: Page;
    readonly addToCartButton: Locator;
    readonly removeButton: Locator;
    readonly cartBadge: Locator;
    readonly cartIcon: Locator;
    readonly checkoutButton: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly postCode: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartButton = page.locator('button', { hasText: 'Add to cart'});
        this.removeButton = page.locator('button', { hasText: 'Remove'});
        this.cartBadge = page.locator('shopping-cart-badge');
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
        this.checkoutButton = page.locator('button', { hasText: 'Checkout'});
        this.continueButton = page.locator('[value="Continue"]');
        this.finishButton = page.locator('button', { hasText: 'Finish'});
        this.firstName = page.getByPlaceholder('First Name');
        this.lastName = page.getByPlaceholder('Last Name');
        this.postCode = page.getByPlaceholder('Zip/Postal Code');
    }
    async clickAddToCart() {
        await this.addToCartButton.first().click();
        await expect(this.removeButton).toBeVisible;
    }

    async clickCartIcon() {
        await this.cartIcon.click();
    }
    async clickCheckout() {
        await this.checkoutButton.click();
    }
    async clickContinue() {
        await this.continueButton.click();
    }
    async clickFinish() {
        await this.finishButton.click();
    }
    async enterFirstName(strFirstName: string) {
        await this.firstName.type(strFirstName)
    }
    async enterLastName(strLastName: string) {
        await this.lastName.type(strLastName)
    }
    async enterPostCode(strPostCode: string) {
        await this.postCode.type(strPostCode)
    }
}