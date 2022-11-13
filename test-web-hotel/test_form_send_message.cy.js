describe("My Form Test", ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost/hotel/project/index.php')
    })
    it('test send massage form', ()=>{
        //test input name(correct format)
        cy.get('.contact').find('input[name = "name"]')
          .type('Thuy Nguyen').should('have.value', 'Thuy Nguyen')
        //test input email(correct format)
        cy.get('.contact').find('input[name = "email"]')
          .type('fake@email.com').should('have.value', 'fake@email.com')
        //test input number(correct format)
        cy.get('.contact').find('input[name = "number"]')
          .type('01234').should('have.value', '01234')
        //test input text(correct format)
        cy.get('textarea').type("hello world").should('have.value', 'hello world')
        //test form submit
        cy.get('.contact').find('input[name="send"]').click()
        //test hidden dialog box 
        cy.get('.swal-modal').should('be.visible')
        cy.get('.swal-title').should('contain', 'message send successfully!')
        cy.get('.swal-button').click()
        cy.get('.swal-modal').should('not.be.visible')
    })
    it('test default input', ()=>{
        cy.get('.contact').find('input[name = "name"]')
          .should('have.value', '')
        //test input email(correct format)
        cy.get('.contact').find('input[name = "email"]')
          .should('have.value', '')
        //test input number(correct format)
        cy.get('.contact').find('input[name = "number"]')
          .should('have.value', '')
        //test input text(correct format)
        cy.get('textarea').should('have.value', '')
    })
    it('test required input', ()=>{
        cy.get('.contact').find('input[name = "email"]')
            .invoke('prop', 'validationMessage').should('contain', "Please fill out this field")
        cy.get('.contact').find('input[name = "name"]')
            .invoke('prop', 'validationMessage').should('contain', "Please fill out this field")
        cy.get('.contact').find('input[name = "number"]')
            .invoke('prop', 'validationMessage').should('contain', "Please fill out this field")
        cy.get('textarea').invoke('prop', 'validationMessage').should('contain', "Please fill out this field")
    })
    it('test wrong email input', ()=>{
        //others of input are correct
        cy.get('.contact').find('input[name = "name"]')
            .type('Thuy Nguyen')
        cy.get('.contact').find('input[name = "number"]')
            .type('01234')
        cy.get('textarea').type("hello world")
        //wrong input mail
        cy.get('.contact').find('input[name = "email"]')
            .type('fakeemail.com')
        //submit
        cy.get('.contact').find('input[name="send"]').click()
        cy.get('.contact').find('input[name = "email"]')
            .invoke('prop', 'validationMessage').should('contain', "Please include an '@' in the email address. 'fakeemail.com' is missing an '@'.")
    })
    it('test wrong number input', ()=>{
        cy.get('.contact').find('input[name ="number"]').type('!@%hdh')
          .should('have.value', '')
      })
})