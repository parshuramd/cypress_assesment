class FictionBookPage {
    Locators = {
        fictionBookRadioBox: '#radioselect1 > input',
        bookOptions: '.bookoptions',
        units: '[name="units"]',
        price: '[name="price"]',
        submitButton: '[name="submit"]'
    }

    selectFictionBookRadioBox() {
        cy.get(this.Locators.fictionBookRadioBox).check().should('be.checked');
    }
    selectBookOption(book) {
        cy.get(this.Locators.bookOptions).select(book);
    }
    inputUnits(units) {
        cy.get(this.Locators.units).clear().type(units);
    }
    inputPrice(price) {
        cy.get(this.Locators.price).type(price);
    }
    clickOnSubmitButton() {
        cy.get(this.Locators.submitButton).click()
    }
}

export let fictionBookPage = new FictionBookPage();