import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/accountLogin';
import { YourStore } from '../pages/yourStore';
import { Checkout } from '../pages/checkout';

test('e2eCheckout', async({page})=>{
    const loginPage = new LoginPage(page);
    expect(await loginPage.gotoLoginPage()).toBe(true);
    expect(await loginPage.doLogin('0123456789@gmail.com', 'testuser')).toBe(true);

    const yourStore = new YourStore(page);
    expect(await yourStore.gotoYourStore()).toBe(true);
    expect(await yourStore.addMacBookToCart()).toBe(true);
    expect(await yourStore.clickCartButton()).toBe(true);
    expect (await yourStore.clickCheckoutButton()).toBe(true);

    const checkout = new Checkout(page)
    expect (typeof await checkout.checkiWantToUseNewAddress()).toBe('boolean')
    expect (await checkout.fillFirstName('Test')).toBe(true);
    expect (await checkout.fillLastName('User')).toBe(true);
    expect (await checkout.fillAddress('This is my address.')).toBe(true);
    expect (await checkout.fillCity('This is my city.')).toBe(true);
    expect (await checkout.fillPostcode('This is my postcode.')).toBe(true);
    expect (await checkout.fillCountrySelector('81')).toBe(true);
    expect (await checkout.fillRegionSelector('1254')).toBe(true);

    await new Promise(resolve => setTimeout(resolve, 5000));
});