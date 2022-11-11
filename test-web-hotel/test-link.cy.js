describe('My Link Test', () => {
    beforeEach(() => {
      cy.visit('http://localhost/hotel/project/index.php')
    })
    it('test1', ()=>{
        cy.get('.flex').contains("Hotels And Resorts").click()
        cy.url().should('eq', 'http://localhost/hotel/project/index.php#home' )
    })
    it('test2', ()=>
    {
    cy.get('.navbar').contains("home").click()
    cy.url().should('eq', 'http://localhost/hotel/project/index.php#home')
    
    })
    it('test 3', () =>
    {
        cy.get('.navbar').contains("about").click()
        cy.url().should('eq', 'http://localhost/hotel/project/index.php#about')
    })
    it('test 4', () =>
    {
        cy.get('.navbar').contains("reservation").click()
        cy.url().should('eq', 'http://localhost/hotel/project/index.php#reservation')
    })
    it('test 5', () =>
    {
        cy.get('.navbar').contains("contact").click()
        cy.url().should('eq', 'http://localhost/hotel/project/index.php#contact')
    })
    it('test 6', () =>
    {
        cy.get('.navbar').contains("gallery").click()
        cy.url().should('eq', 'http://localhost/hotel/project/index.php#gallery')
    })
    it('test 7', () =>
    {
        cy.get('.navbar').contains("reviews").click()
        cy.url().should('eq', 'http://localhost/hotel/project/index.php#reviews')
    })
    it('test 8', () =>
    {
        cy.get('.flex').contains("check availability").click()
        cy.url().should('eq', 'http://localhost/hotel/project/index.php#availability')
    })

    it('test 9', () =>
    {
        cy.visit('http://localhost/hotel/project/bookings.php')
        cy.get('.navbar').contains("my bookings").click()
    })
   
})