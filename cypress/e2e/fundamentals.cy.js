describe('Fundamentals tests', () => {

  beforeEach(() => {
    cy.visit('/fundamentals') // visits the page we wanted BEFORE each test
  })

  it('Contains correct header text', () => {
    cy.getDataTest('fundamentals-header').should('contain.text', 'Testing Fundamentals')
  })

  // it.only('Accordion works correctly', () => { you can use only to prioritize only one test at the time
  it('Accordion works correctly', () => {
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
  })
})