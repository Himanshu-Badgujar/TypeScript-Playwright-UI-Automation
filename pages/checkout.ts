import {expect, Page, Locator} from '@playwright/test'

export class Checkout{
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly companyNameInput: Locator;
    readonly addressInput: Locator;
    readonly address2Input: Locator;
    readonly cityInput: Locator;
    readonly postCodeInput: Locator;
    readonly countrySelector: Locator;
    readonly regionInput: Locator;
    readonly continueButton: Locator;

    constructor(page: Page){
        this.firstNameInput = page.getByRole('textbox', { name: '* First Name' });
        this.lastNameInput = page.getByRole('textbox', { name: '* Last Name' });
        this.companyNameInput = page.getByRole('textbox', { name: 'Company' });
        this.addressInput = page.getByRole('textbox', { name: '* Address' });
        this.address2Input = page.getByRole('textbox', { name: 'Address 2' });
        this.cityInput = page.getByRole('textbox', { name: '* City' });
        this.postCodeInput = page.getByRole('textbox', { name: '* Post Code' });
        this.countrySelector = page.getByLabel('Country');
        this.regionInput = page.getByLabel('Region / State');
        this.continueButton = page.getByRole('button', { name: 'Continue' });  
    }

    async enterFirstName(firstNameUserInput: string):Promise<boolean>{
        await this.firstNameInput.fill(firstNameUserInput);
        const filledValue = await this.firstNameInput.inputValue();
        return filledValue === firstNameUserInput;
    }

    async enterLastName(lastNameUserInput: string):Promise<boolean>{
        await this.lastNameInput.fill(lastNameUserInput);
        const filledValue = await this.lastNameInput.inputValue()
        return filledValue === lastNameUserInput;
    }

    async EnterCompanyName(companyNameUserInput: string):Promise<boolean>{
        await this.companyNameInput.fill(companyNameUserInput);
        const filledValue = await this.companyNameInput.inputValue()
        return filledValue === companyNameUserInput;
    }

    async EnterAddress(addressUserInput: string):Promise<boolean>{
        await this.addressInput.fill(addressUserInput);
        const filledValue = await this.addressInput.inputValue()
        return filledValue === addressUserInput;
    }

    async EnterAddress2(address2UserInput: string):Promise<boolean>{
        await this.address2Input.fill(address2UserInput);
        const filledValue = await this.address2Input.inputValue()
        return filledValue === address2UserInput;
    }











}