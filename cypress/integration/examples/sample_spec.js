describe('Test Navbar', () => {
    it('should have 4 links in navbar', () => {
        cy.visit('https://simple-ecommerce-irv.surge.sh')

        cy.get('a').contains('eCommerce Site.')
        cy.get('a').contains('Home')
        cy.get('a').contains('Orders')
        cy.get('a').contains('Cart')
    })
})

describe('Test Cart Page', () => {
    it('should have Shipping Address class checkout-title', () => {
        cy.visit('https://simple-ecommerce-irv.surge.sh')
        cy.get('a').contains('Cart').click()

        cy.get('.checkout-title').contains('Shipping Address')
    })
})