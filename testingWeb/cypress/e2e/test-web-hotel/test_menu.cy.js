describe('My Path Test', () => {
    beforeEach(() => {
      cy.visit('http://localhost/hotel/project/index.php')
    })
    it('test Hotels And Resorts', ()=>{
        cy.get('.flex').contains("Hotels And Resorts").click()
        cy.url().should('eq', 'http://localhost/hotel/project/index.php#home' )
    })
    it('test button home', ()=>
    {
    cy.get('.navbar').contains("home").click()
    cy.url().should('eq', 'http://localhost/hotel/project/index.php#home')
    
    })
    it('test button about', () =>
    {
        cy.get('.navbar').contains("about").click()
        cy.url().should('eq', 'http://localhost/hotel/project/index.php#about')
    })
    it('test button reservation', () =>
    {
        cy.get('.navbar').contains("reservation").click()
        cy.url().should('eq', 'http://localhost/hotel/project/index.php#reservation')
    })
    it('test button contact', () =>
    {
        cy.get('.navbar').contains("contact").click()
        cy.url().should('eq', 'http://localhost/hotel/project/index.php#contact')
    })
    it('test button gallery', () =>
    {
        cy.get('.navbar').contains("gallery").click()
        cy.url().should('eq', 'http://localhost/hotel/project/index.php#gallery')
    })
    it('test button reviews', () =>
    {
        cy.get('.navbar').contains("reviews").click()
        cy.url().should('eq', 'http://localhost/hotel/project/index.php#reviews')
    })
    it('test button availability', () =>
    {
        cy.get('.flex').contains("check availability").click()
        cy.url().should('eq', 'http://localhost/hotel/project/index.php#availability')
    })

    it('test button my bookings', () =>
    {
        cy.visit('http://localhost/hotel/project/bookings.php')
        cy.get('.navbar').contains("my bookings").click()
    })
   
})