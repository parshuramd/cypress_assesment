class DramaBookPage {
    Locaters = {
        dramaBooks: '#radioselect2 > input',
        discountCheckbox: '[name="discount"]',
        discountValue: '[name="discountvalue"]',
        removeRecord: 'span.removeRecord',
        confirmMsg: '#deletedialog > p',
        deleteButton: '#deletedialog > button',

    }

    selectDramaBookCheckbox() {
        cy.get(this.Locaters.dramaBooks).check().should('be.checked');
    }

    addCouponDiscount(discount) {
        cy.get(this.Locaters.discountCheckbox).check().should('be.checked')
        cy.get(this.Locaters.discountValue).type(discount)
    }

    deleteRecord() {
        cy.get(this.Locaters.removeRecord).click();
        cy.get(this.Locaters.confirmMsg).should('contain', 'You want to delete this record ?');
        cy.get(this.Locaters.deleteButton).contains('Yes, Delete it!').click();
        cy.get(this.Locaters.removeRecord).should('not.exist');
    }
}

export let dramaBookPage = new DramaBookPage()