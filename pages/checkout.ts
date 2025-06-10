import {Page, Locator} from '@playwright/test'

export class Checkout{
    readonly iWantToUseNewAddress: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly addressInput: Locator;
    readonly cityInput: Locator;
    readonly postcodeInput: Locator;
    readonly countrySelector: Locator;
    readonly regionSelector: Locator;
    readonly continueButton: Locator;
    readonly step2Assert: Locator;
    readonly checkbox: Locator;

    constructor(page: Page){
        this.iWantToUseNewAddress = page.getByRole('radio', { name: 'I want to use a new address' });
        this.firstNameInput = page.getByRole('textbox', { name: '* First Name' });
        this.lastNameInput = page.getByRole('textbox', { name: '* Last Name' });
        this.addressInput = page.getByRole('textbox', { name: '* Address' });
        this.cityInput = page.getByRole('textbox', { name: '* City' });
        this.postcodeInput = page.getByRole('textbox', { name: '* Post Code' });
        this.countrySelector = page.getByLabel('Country');
        this.regionSelector = page.getByLabel('Region / State');
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.step2Assert = page.locator('textarea[name="comment"]');
        this.checkbox = page.getByRole('checkbox');
    }

    async checkiWantToUseNewAddress():Promise<boolean>{
        if (await this.iWantToUseNewAddress.isChecked()){
            return true
        }
        else {
            await this.iWantToUseNewAddress.check();
            return await this.iWantToUseNewAddress.isChecked();
        }
    }

    async fillFirstName(firstNameUserInput: string):Promise<boolean>{
        await this.firstNameInput.fill(firstNameUserInput);
        const filledValue = await this.firstNameInput.inputValue();
        return filledValue === firstNameUserInput;
    }

    async fillLastName(lastNameUserInput: string):Promise<boolean>{
        await this.lastNameInput.fill(lastNameUserInput);
        const filledValue = await this.lastNameInput.inputValue()
        return filledValue === lastNameUserInput;
    }

    async fillAddress(addressUserInput: string):Promise<boolean>{
        await this.addressInput.fill(addressUserInput);
        const filledValue = await this.addressInput.inputValue()
        return filledValue === addressUserInput;
    }

    async fillCity(cityUserInput: string):Promise<boolean>{
        await this.cityInput.fill(cityUserInput);
        const filledValue = await this.cityInput.inputValue();
        return filledValue === cityUserInput;
    }

    async fillPostcode(postcodeUserInput: string):Promise<boolean>{
        await this.postcodeInput.fill(postcodeUserInput);
        const filledValue = await this.postcodeInput.inputValue();
        return filledValue === postcodeUserInput;
    }

    async fillCountrySelector(userSelection: string):Promise<boolean>{
        await this.countrySelector.selectOption(userSelection);
        const filledValue = await this.countrySelector.inputValue();
        return filledValue == userSelection;
    }

    async fillRegionSelector(userSelection: string):Promise<boolean>{
        await this.regionSelector.selectOption(userSelection);
        const filledValue = await this.regionSelector.inputValue();
        return filledValue == userSelection;
    }

    async pressContinueButton():Promise<boolean>{
        await this.continueButton.click();
        return this.step2Assert.isVisible();
    }

    async selectCheckbox():Promise<boolean>{
        await this.checkbox.check();
        return this.checkbox.isChecked();
    }
}