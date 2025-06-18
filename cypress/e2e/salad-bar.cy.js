describe('Can order a Salad', () => {
    it('Can enter name and number to start order', () => {
        cy.visit('http://localhost:4200')

        cy.get('[data-test="name-form"]').type('Mike')
        cy.get('[data-test="tel-form"]').type('0612121212')
        cy.get('[data-test="validate-form"]').click()

        cy.get('.mat-headline-medium').should('have.text', 'Welcome Mike')
    })
})