class BookOrderPage {
    Locators = {
        orderBooksHeading: 'div.datacolumn1  h1',
        orderDetailsHeading: 'div.datacolumn2  h1',
        chooseCategory: 'form h3',
        transactionRecord: 'div.purchasedbooks > h3',
        units : '[name="units"]',
        unitsInputNotValid : 'form :nth-child(8)',
        submitButton : '[name="submit"]',
        price : '[name="price"]',
        priceInputNotValid : 'form :nth-child(10)',
        discountCheckbox : '[name="discount"]',
        discountValue : '[name="discountvalue"]',
        discountInputNotValid : 'form :nth-child(11) p'
    }
    visitBookOrderApp() {
        cy.visit('https://react.simprocloud.com/build/index.html');
        cy.title().should('contain', 'React App')
    }
    validateFieldsOnBookOrderApp() {
        cy.get(this.Locators.orderBooksHeading).should('have.text', 'Order Books');
        cy.get(this.Locators.orderDetailsHeading).should('have.text', 'Order details');
        cy.get(this.Locators.chooseCategory).should('have.text', 'Choose a Category:');
        cy.get(this.Locators.transactionRecord).should('have.text', 'Transaction record');
    }

    validateUnitsInputFieldForValidData(units){
        cy.get(this.Locators.units).clear().type(units);
        cy.get(this.Locators.submitButton).click();
        cy.get(this.Locators.unitsInputNotValid).should('not.contain','Input is not valid')
    }
    validateUnitsInputFieldForInvalidData(units){
        cy.get(this.Locators.units).clear().type(units);
        cy.get(this.Locators.submitButton).click();
        cy.get(this.Locators.unitsInputNotValid).should('contain','Input is not valid')
    }

    validatePriceInputFieldForValidData(price){
        cy.get(this.Locators.price).clear().type(price);
        cy.get(this.Locators.submitButton).click();
        cy.get(this.Locators.priceInputNotValid).should('not.contain','Invalid price')
    }
    validatePriceInputFieldForInvalidData(price){
        cy.get(this.Locators.price).clear().type(price);
        cy.get(this.Locators.submitButton).click();
        cy.get(this.Locators.priceInputNotValid).should('contain','Invalid price')
    }
    discountCheckbox(){
        cy.get(this.Locators.discountCheckbox).click()
    }
    validateDiscountInputFieldForValidData(discount){
        cy.get(this.Locators.discountValue).clear().type(discount);
        cy.get(this.Locators.submitButton).click();
        cy.get(this.Locators.discountInputNotValid).should('not.exist')
    }
    validateDiscountInputFieldForInvalidData(discount){
        cy.get(this.Locators.discountValue).clear().type(discount);
        cy.get(this.Locators.submitButton).click();
        cy.get(this.Locators.discountInputNotValid).should('contain','Invalid discount amount !')
    }
}

export let bookOrderPage = new BookOrderPage();