export {}

describe('Header', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Links To The Correct Page', () => {
    cy.getBySel('logo').click()
    cy.location('pathname').should('eq', '/')

    cy.getBySel('nav-link-search').click()
    cy.location('pathname').should('eq', '/search')

    cy.getBySel('nav-link-home-page').click()
    cy.location('pathname').should('eq', '/search/frontpage')
  })

  it('The Search Bar Returns The Correct Search Results', () => {
    cy.getBySel('search-input').eq(0).type('bad{enter}')

    cy.getBySel('product-tag').within(() => {
      cy.getBySel('product-name').should('contain', 'The Bad Batch')
      cy.getBySel('product-price').should('contain', '$20.00 USD')
    })
  })
})
