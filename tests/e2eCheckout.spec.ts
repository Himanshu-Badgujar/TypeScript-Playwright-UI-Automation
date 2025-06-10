import {test, expect} from '@playwright/test';

import {LoginPage} from '../pages/accountLogin';
import {YourStore} from '../pages/yourStore';
import {Checkout} from '../pages/checkout';
import * as dotenv from 'dotenv';

dotenv.config();

test('e2eCheckout', async({page})=>{
    const loginPage = new LoginPage(page);
    expect(await loginPage.gotoLoginPage()).toBe(true);
    expect(await loginPage.doLogin(process.env.emailID as string, process.env.password as string)).toBe(true);

    const yourStore = new YourStore(page);
    expect(await yourStore.gotoYourStore()).toBe(true);
    expect(await yourStore.addMacBookToCart()).toBe(true);
    expect(await yourStore.clickCartButton()).toBe(true);
    expect (await yourStore.clickCheckoutButton()).toBe(true);

    const checkout = new Checkout(page)
    expect (typeof await checkout.checkiWantToUseNewAddress()).toBe('boolean')
    expect (await checkout.fillFirstName(process.env.firstName as string)).toBe(true);
    expect (await checkout.fillLastName(process.env.lastName as string)).toBe(true);
    expect (await checkout.fillAddress(process.env.address as string)).toBe(true);
    expect (await checkout.fillCity(process.env.city as string)).toBe(true);
    expect (await checkout.fillPostcode(process.env.postcode as string)).toBe(true);
    expect (await checkout.fillCountrySelector(process.env.country as string)).toBe(true);
    expect (await checkout.fillRegionSelector(process.env.region as string)).toBe(true);
});