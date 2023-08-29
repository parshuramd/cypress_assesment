import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { bookOrderPage } from "@pages/bookOrderApp";

Given('User Visits book ordering app', () => {
    bookOrderPage.visitBookOrderApp();
    bookOrderPage.validateFieldsOnBookOrderApp();
})

Given('User is able to put units values in interger only', (table) => {
    table.raw()[0].forEach(units => {
        bookOrderPage.validateUnitsInputFieldForValidData(units)
    });

})
Given('User is not able to put units values invalid data', (table) => {
    table.raw()[0].forEach(units => {
        bookOrderPage.validateUnitsInputFieldForInvalidData(units)
    });

})

Given('User is able to put price values in interger only', (table) => {
    table.raw()[0].forEach(price => {
        bookOrderPage.validatePriceInputFieldForValidData(price)
    });

})
Given('User is not able to put price values invalid data', (table) => {
    table.raw()[0].forEach(price => {
        bookOrderPage.validatePriceInputFieldForInvalidData(price)
    });

})
Given('User is able to put discount values in interger only', (table) => {
    bookOrderPage.discountCheckbox();
    table.raw()[0].forEach(discount => {
        bookOrderPage.validateDiscountInputFieldForValidData(discount)
    });

})
Given('User is not able to put discount values invalid data', (table) => {
    bookOrderPage.discountCheckbox();
    table.raw()[0].forEach(discount => {
        bookOrderPage.validateDiscountInputFieldForInvalidData(discount)
    });

})