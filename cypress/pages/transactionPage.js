class TransactionPage {
    Locators = {
        books: '#transactionsection td:nth-child(2)',
        units: '#transactionsection td:nth-child(3)',
        price: '#transactionsection td:nth-child(4)',
        amount: '#transactionsection td:nth-child(5)',
        discountAmount: '#transactionsection td:nth-child(6)',
        finalAmount: '#transactionsection td:nth-child(7)'

    }

    validateBookOrder(book) {
        cy.get(this.Locators.books).should('have.text', book)
    }
    validateUnits(units) {
        cy.get(this.Locators.units).should('contain', units)
    }
    validatePrice(price) {
        cy.get(this.Locators.price).should('contain', `$ ${price}`)
    }
    validateAmount(units, price) {
        cy.get(this.Locators.amount).should('contain', `$ ${units * price}`)
    }
    validateDiscountAmount(units, price, discount) {
        cy.get(this.Locators.discountAmount).should('contain', `$ ${(units * price * discount / 100).toFixed(2)}`)
    }
    validateFinalAmount(units, price, discount) {
        cy.get(this.Locators.finalAmount).should('contain', `$ ${((units * price) - ((units * price) * discount / 100)).toFixed(2)}`)
    }
}

export let transactionPage = new TransactionPage();