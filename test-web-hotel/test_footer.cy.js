describe('My Path Test', () => {
    beforeEach(() => {
      cy.visit('http://localhost/hotel/project/index.php')
    })
    
    it('test 1', ()=>{
        cy.get('.footer').contains("home").click()
        cy.url().should('eq', 'http://localhost/hotel/project/index.php#home')
    })
    it('test 2', () =>
    {
        cy.get('.footer').contains("about").click()
        cy.url().should('eq', 'http://localhost/hotel/project/index.php#about')
    })
    it('test 3', () =>
    {
        cy.get('.footer').contains("reservation").click()
        cy.url().should('eq', 'http://localhost/hotel/project/index.php#reservation')
    })
    it('test 4', () =>
    {
        cy.get('.footer').contains("contact").click()
        cy.url().should('eq', 'http://localhost/hotel/project/index.php#contact')
    })
    it('test 5', () =>
    {
        cy.get('.footer').contains("gallery").click()
        cy.url().should('eq', 'http://localhost/hotel/project/index.php#gallery')
    })
    it('test 6', () =>
    {
        cy.get('.footer').contains("reviews").click()
        cy.url().should('eq', 'http://localhost/hotel/project/index.php#reviews')
    })
   
    it('test 7', () =>
    {
        cy.get('.footer').contains("my bookings").click()
    })
})