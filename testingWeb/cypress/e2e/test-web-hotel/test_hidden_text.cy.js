describe("Hidden text", ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost/hotel/project/index.php')
    })
    //test existance of hidden text
    it('test 1', ()=>{
        cy.get('.faq').contains("how to cancel?").next()
        .should('not.be.visible')
    }) 
    it('test 2', ()=>{
        cy.get('.faq').contains("is there any vacancy?").next()
        .should('not.be.visible')
    }) 
    it('test 3', ()=>{
        cy.get('.faq').contains("what are payment methods?").next()
        .should('not.be.visible')
    }) 
    it('test 4', ()=>{
        cy.get('.faq').contains("how to claim coupons codes?").next()
        .should('not.be.visible')
    }) 
    it('test 5', ()=>{
        cy.get('.faq').contains("what are the age requirements?").next()
        .should('not.be.visible')
    }) 

    //test visibility of hidden text after click
    it('test 6', () => {
        cy.get('.faq').contains("how to cancel?").click()
        cy.get('.faq').contains("how to cancel?").next()
        .should('be.visible')
    })
    it('test 7', () => {
        cy.get('.faq').contains("is there any vacancy?").click()
        cy.get('.faq').contains("is there any vacancy?").next()
        .should('be.visible')
        .should('exist')
    })
    it('test 8', () => {
        cy.get('.faq').contains("what are payment methods?").click()
        cy.get('.faq').contains("what are payment methods?").next()
        .should('be.visible')
    })
    it('test 9', () => {
        cy.get('.faq').contains("how to claim coupons codes?").click()
        cy.get('.faq').contains("how to claim coupons codes?").next()
        .should('be.visible')
    })
    it('test 10', () => {
        cy.get('.faq').contains("what are the age requirements?").click()
        cy.get('.faq').contains("what are the age requirements?").next()
       .should('be.visible')
    })
})