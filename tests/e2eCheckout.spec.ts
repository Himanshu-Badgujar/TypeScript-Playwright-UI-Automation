import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/accountLogin';
import { YourStore } from '../pages/yourStore';

test('e2eCheckout', async({page})=>{
    const loginPage = new LoginPage(page);
    expect(await loginPage.gotoLoginPage()).toBe(true);
    expect(await loginPage.doLogin('0123456789@gmail.com', 'testuser')).toBe(true);

    const yourStore = new YourStore(page);
    expect(await yourStore.gotoYourStore()).toBe(true);
    expect(await yourStore.addMacBookToCart()).toBe(true);
    expect(await yourStore.clickCartButton()).toBe(true);
    expect (await yourStore.clickCheckoutButton()).toBe(true);

    await new Promise(resolve => setTimeout(resolve, 5000));
});