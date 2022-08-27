export {}

describe('Home Page', () => {
  it('Displays All Products On The Home Page', () => {
    cy.visit('/')

    cy.getBySel('product-tag')
      .eq(0)
      .within(() => {
        cy.getBySel('product-name').should('contain', 'The Bad Batch')
        cy.getBySel('product-price').should('contain', '$20.00 USD')
      })

    cy.getBySel('product-tag')
      .eq(1)
      .within(() => {
        cy.getBySel('product-name').should('contain', 'Disney Park Posters')
        cy.getBySel('product-price').should('contain', '$50.00 USD')
      })
  })
})
