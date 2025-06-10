import {Page, Locator} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page:Page) {
        this.page = page;
        this.emailInput = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async gotoLoginPage():Promise<boolean>{
        await this.page.goto('/opencart/index.php?route=account/login');
        return await this.page.title() === 'Account Login';
    }

    async doLogin(emailInputUser:string, passwordInputUser:string):Promise<boolean>{
        await this.emailInput.fill(emailInputUser);
        await this.passwordInput.fill(passwordInputUser);
        await this.loginButton.click();
        return await this.page.title() === 'My Account';
    }
}