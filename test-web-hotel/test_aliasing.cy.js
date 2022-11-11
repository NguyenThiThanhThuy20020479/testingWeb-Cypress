describe("aliasing", ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost/hotel/project/index.php')
    })
    it('.as() - alias a route for later use', () => {
        // Alias the route to wait for its response
        cy.intercept('GET', '**/comments/*').as('getComment')
    
        // we have code that gets a comment when
        // the button is clicked in scripts.js
        cy.get('.faq')
        cy.get('.faq').contains("how to cancel?").click()
    
        // https://on.cypress.io/wait
        cy.wait('@getComment').its('response.statusCode').should('eq', 200)
      })
}
)