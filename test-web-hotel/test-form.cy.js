describe('My Form Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost/hotel/project/index.php')
  })
  
  it('test booking form', ()=>{
    //test input email
    cy.get('.reservation').find('input[name = "email"]')
      .type('fake@email.com').should('have.value', 'fake@email.com')
    //test input name
    cy.get('.reservation').find('input[name = "name"]')
      .type("Nguyen Van A").should('have.value', "Nguyen Van A")
      //test input phone number
    cy.get('.reservation').find('input[name ="number"]')
      .type('01234').should('have.value', '01234')
    //test input date
    cy.get('.reservation').find('input[name ="check_in"]')
      .type('2009-12-12')
    cy.get('.reservation').find('input[name ="check_out"]')
      .type('2009-12-12')
    //test input selected
    cy.get('.reservation').find('select[name="adults"]')
      .select('1 adult')
      .select('2 adults').should('have.value', '2')

    cy.get('.reservation').find('select[name="childs"]')
      .select('0 child').should('have.value','0')
    cy.get('.reservation').find('select[name="rooms"]')
      .select('1 room').should('have.value','1')
    //test form submit && reload page
    cy.get('.reservation').find('input[name="book"]').click()
  })
  it('test send massage form', ()=>{
    cy.get('.contact').find('input[name = "name"]')
      .type('Thuy Nguyen')
    cy.get('.contact').find('input[name = "email"]')
      .type('fake@email.com').should('have.value', 'fake@email.com')
    cy.get('.contact').find('input[name = "number"]')
      .type('01234').should('have.value', '01234')
    cy.get('textarea').type("hello world")
    cy.get('.contact').find('input[name="send"]').click()
  })
  it('test check availability form', ()=>{
    //test input date
    cy.get('.availability').find('input[name ="check_in"]')
    .type('2009-12-12')
  cy.get('.availability').find('input[name ="check_out"]')
    .type('2009-12-12')
  //test input selected
  cy.get('.availability').find('select[name="adults"]')
    .select('1 adult')
    .select('2 adults')
  cy.get('.availability').find('select[name="childs"]')
    .select('1 child')
  cy.get('.availability').find('select[name="rooms"]')
    .select('1 room')
  //test form submit && reload page
  cy.get('.availability').find('input[name="check"]').click()
  })
})
