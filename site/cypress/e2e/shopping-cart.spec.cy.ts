export {}

describe('Shopping Cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Users Can Add Products To The Cart', () => {
    cy.visit('/')
    cy.getBySel('product-tag').eq(0).click()
    cy.get('[aria-label="Add to Cart"]').click()
    cy.get('[aria-label="Cart items: 1"]').contains('1')
  })

  it.only('The Shopping Cart Can Contain Multiple Items', () => {
    //add first item to cart
    cy.getBySel('product-tag').eq(0).click()
    cy.get('[aria-label="Add to Cart"]').click()
    cy.get('[aria-label="Cart items: 1"]').contains('1')

    //add second item to cart
    cy.get('')
    cy.get('[aria-label="Cart items: 2"]').contains('2')
  })
})
