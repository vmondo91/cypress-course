describe('Form tests', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })

    it('Test Subscribe Form', () => {
        cy.contains(/testing forms/i).should('be.visible')
        cy.getDataTest('subscribe-form').find('input').should('exist')
        cy.getDataTest('subscribe-form').type('skyguard39@gmail.com')
        cy.contains(/Successfully subbed/i).should('not.exist')
        cy.getDataTest('subscribe-button').click().wait(500)
        cy.contains(/Successfully subbed/i).should('exist')
    })
})