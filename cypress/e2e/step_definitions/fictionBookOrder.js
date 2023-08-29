import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { fictionBookPage } from "@pages/fictionBookPage";
import { transactionPage } from "@pages/transactionPage";
Given('User select fiction book radio box', () => {
    fictionBookPage.selectFictionBookRadioBox();
})

Given('User Select {string} book from choose a book dropdown', (book) => {
    fictionBookPage.selectBookOption(book)
})

Given('User input number of Units for Book {string}', (units) => {
    fictionBookPage.inputUnits(units)
})

Given('User input price of single unit for the book {string}', (price) => {
    fictionBookPage.inputPrice(price);
})

Given('User place order successfully by clicking on submit button', () => {
    fictionBookPage.clickOnSubmitButton();
})

Then('Order Placed Correctly with {string} book', (book) => {
    transactionPage.validateBookOrder(book);
})

Then('Validate units of book should be {string}', (units) => {
    transactionPage.validateUnits(units)
})

Then('Validate price of book should be {string}', (price) => {
    transactionPage.validatePrice(price)
})

Then('Validate amount AUD should be multiply {string} and {string}', (units, price) => {
    transactionPage.validateAmount(units, price)
})

Then('Validate discount amount AUD should be {string} * {string} * {string} divided by hundread', (units, price, discount) => {
    transactionPage.validateDiscountAmount(units, price, discount)
})

Then('Validate final amount AUD should be amount: {string} * {string} - discount: {string}', (units, price, discount) => {
    transactionPage.validateFinalAmount(units, price, discount)
})