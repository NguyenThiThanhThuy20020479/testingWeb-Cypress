describe('My Form Test', () => {
    beforeEach(() => {
      cy.visit('http://localhost/hotel/project/index.php')
    }) 
    it('test check availability form', ()=>{
    //test input date(correct format)
    cy.get('.availability').find('input[name ="check_in"]')
      .type('2009-12-12').should('have.value', '2009-12-12')
    cy.get('.availability').find('input[name ="check_out"]')
      .type('2009-12-12').should('have.value', '2009-12-12')
    //test input selected(correct format)
    cy.get('.availability').find('select[name="adults"]')
      .select('2 adults').should('have.value', '2')
    cy.get('.availability').find('select[name="childs"]')
      .select('1 child').should('have.value', '1')
    cy.get('.availability').find('select[name="rooms"]')
      .select('1 room').should('have.value', '1')
    //test form submit && reload page
    cy.get('.availability').find('input[name="check"]').click()
    //test hidden dialog box
    cy.get('.swal-modal').should('be.visible')
    cy.get('.swal-title').should('contain', 'rooms are available')
    cy.get('.swal-button').click()
    cy.get('.swal-modal').should('not.be.visible')

    })

    it('test default input', ()=>{
    cy.get('.availability').find('input[name ="check_in"]')
      .should('have.value', '')
    cy.get('.availability').find('input[name ="check_out"]')
      .should('have.value', '')
    cy.get('.availability').find('select[name="adults"]')
      .should('have.value', '1')
    cy.get('.availability').find('select[name="childs"]')
      .should('have.value', '-')
    cy.get('.availability').find('select[name="rooms"]')
      .should('have.value', '1')
    })

    it('test required input', ()=>{
        cy.get('.availability').find('input[name = "check_in"]')
            .invoke('prop', 'validationMessage').should('contain', "Please fill out this field")
        cy.get('.availability').find('input[name = "check_out"]')
            .invoke('prop', 'validationMessage').should('contain', "Please fill out this field")
    }) 
})
  