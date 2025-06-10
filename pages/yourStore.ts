import {Page, Locator} from '@playwright/test';

export class YourStore{
    readonly page: Page;
    readonly homeButton: Locator;
    readonly macBookAddToCartButton: Locator;
    readonly successToast: Locator;
    readonly cartButton: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.homeButton = page.getByRole('link', { name: '' });
        this.macBookAddToCartButton = page.getByRole('button', { name: ' Add to Cart' }).first();
        this.successToast = page.getByText('Success: You have added', {exact: false});
        this.cartButton = page.locator('#cart-total');
        this.checkoutButton = page.locator('#cart').getByRole('link', { name: ' Checkout' });
    }

    async gotoYourStore():Promise<boolean>{
        await this.homeButton.click();
        return await this.page.title() === 'Your Store';
    }

    async addMacBookToCart():Promise<boolean>{
        await this.macBookAddToCartButton.click();
        await this.successToast.waitFor({state: 'visible', timeout: 5000});
        return await this.successToast.isVisible();
    }

    async clickCartButton():Promise<boolean>{
        await this.cartButton.click();
        await this.checkoutButton.waitFor({state: 'visible', timeout: 5000})
        return await this.checkoutButton.isVisible();
    }

    async clickCheckoutButton():Promise<boolean>{
        await this.checkoutButton.click();
        return await this.page.title() === 'Checkout';
    }
}