export {}

describe('Shopping Cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Users Can Add Products To The Cart', () => {
    cy.getBySel('product-tag').eq(0).click()
    cy.get('[aria-label="Add to Cart"]').click()
    cy.get('[aria-label="Cart items: 1"]').contains('1')
  })

  it.only('The Shopping Cart Can Contain Multiple Items', () => {
    //add first item to cart
    cy.getBySel('product-tag').eq(0).click()
    cy.get('[aria-label="Add to Cart"]').click()
    cy.get('[aria-label="Cart items: 1"]').contains('1')

    //Close Cart
    cy.get('button[aria-label="Close"]').click()

    //Go to page to view all items
    cy.getBySel('nav-link-search').click()

    //Click another item
    cy.get('a[aria-label="Disney Park Posters"]').click().wait(1000)

    //add second item to cart
    cy.get('[aria-label="Add to Cart"]').should('be.visible').click()
    cy.get('[aria-label="Cart items: 2"]').contains('2')
  })

  it('The Shopping Cart Is Empty', () => {
    cy.get('button[aria-label="Cart items: 0"]').click()
    cy.get('h2').should('contain', 'Your cart is empty')
  })
})
