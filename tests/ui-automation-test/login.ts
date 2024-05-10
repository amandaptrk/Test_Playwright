import { expect, type Locator, type Page } from '@playwright/test';

export class loginPage {
    readonly url = 'https://www.saucedemo.com/'
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = this.page.getByPlaceholder('Username');
        this.password = this.page.getByPlaceholder('Password');
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
    }
    async goto() {
        await this.page.goto(this.url);
    } 

    async enterUsername(strUser: string) {
        await this.username.type(strUser)
    }
    async enterPassword(strPwd: string) {
        await this.password.type(strPwd)
    }
    async clickLogin() {
        await this.loginButton.click()
    }
}
