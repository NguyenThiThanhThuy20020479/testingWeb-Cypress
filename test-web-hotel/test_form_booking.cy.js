describe('My Form Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost/hotel/project/index.php')
  })

  it('test booking form', ()=>{
    //test input email(correct format)
    cy.get('.reservation').find('input[name = "email"]')
      .type('fake@email.com').should('have.value', 'fake@email.com')
    //test input name(correct format)
    cy.get('.reservation').find('input[name = "name"]')
      .type("Nguyen Van A").should('have.value', "Nguyen Van A")
    //test input number(correct format)
    cy.get('.reservation').find('input[name ="number"]')
      .type('01234').should('have.value', '01234')
    //test input date(correct format)
    cy.get('.reservation').find('input[name ="check_in"]')
      .type('2009-12-12')
    cy.get('.reservation').find('input[name ="check_out"]')
      .type('2009-12-12')
    //test input selected(correct format)
    cy.get('.reservation').find('select[name="adults"]')
      .select('2 adults').should('have.value', '2')
    cy.get('.reservation').find('select[name="childs"]')
      .select('0 child').should('have.value','0')
    cy.get('.reservation').find('select[name="rooms"]')
      .select('1 room').should('have.value','1')
    //test form submit && reload page
    cy.get('.reservation').find('input[name="book"]').click()
    //test hidden dialog box 
    cy.get('.swal-modal').should('be.visible')
    cy.get('.swal-title').should('contain', 'room booked successfully!')
    cy.get('.swal-button').click()
    cy.get('.swal-modal').should('not.be.visible')

  })

  it('test wrong email input', ()=>{
    //others input of form are correct
    cy.get('.reservation').find('input[name = "name"]')
      .type("Nguyen Van A")
    cy.get('.reservation').find('input[name ="number"]')
      .type('01234')
    cy.get('.reservation').find('input[name ="check_in"]')
      .type('2009-12-12')
    cy.get('.reservation').find('input[name ="check_out"]')
      .type('2009-12-12')
    cy.get('.reservation').find('select[name="adults"]')
      .select('2 adults')
    cy.get('.reservation').find('select[name="childs"]')
      .select('0 child')
    cy.get('.reservation').find('select[name="rooms"]')
      .select('1 room')
    //wrong input email
    cy.get('.reservation').find('input[name = "email"]').type('fakegmail.com')
    //submit 
    cy.get('.reservation').find('input[name="book"]').click()
    cy.get('.reservation').find('input[name = "email"]')
    .invoke('prop', 'validationMessage').should('contain', "Please include an '@' in the email address. 'fakegmail.com' is missing an '@'.")
  })
  
  it('test default input', ()=>{
    cy.get('.reservation').find('input[name = "email"]')
      .should('have.value', '')
    cy.get('.reservation').find('input[name = "name"]')
      .should('have.value', "")
    cy.get('.reservation').find('input[name ="number"]')
      .should('have.value', '')
    cy.get('.reservation').find('input[name ="check_in"]')
      .should('have.value', '')
    cy.get('.reservation').find('input[name ="check_out"]')
      .should('have.value', '')
    cy.get('.reservation').find('select[name="adults"]')
      .should('have.value', '1')
    cy.get('.reservation').find('select[name="childs"]')
      .should('have.value','0')
    cy.get('.reservation').find('select[name="rooms"]')
      .should('have.value','1')
    
  })

  it('test wrong number input', ()=>{
    cy.get('.reservation').find('input[name ="number"]').type('!@%hdh')
      .should('have.value', '')
  })

  it('test required input', ()=>{
    cy.get('.reservation').find('input[name = "email"]')
    .invoke('prop', 'validationMessage').should('contain', "Please fill out this field")
    cy.get('.reservation').find('input[name = "name"]')
    .invoke('prop', 'validationMessage').should('contain', "Please fill out this field")
    cy.get('.reservation').find('input[name = "check_in"]')
    .invoke('prop', 'validationMessage').should('contain', "Please fill out this field")
    cy.get('.reservation').find('input[name = "check_out"]')
    .invoke('prop', 'validationMessage').should('contain', "Please fill out this field")
    cy.get('.reservation').find('input[name = "number"]')
    .invoke('prop', 'validationMessage').should('contain', "Please fill out this field")
  })
})
