describe('Test Fake API ', () => {
    it('Delete method - delete message', () => {
        cy.visit("localhost/hotel/project/")
        cy.request({
          method: 'DELETE',
          url :'http://localhost:3000/messages/0123'   
         }).then((respond)=>{
            cy.request({
                method: 'GET',
                url :'http://localhost:3000/messages'   
               }).then((respond)=>{
                expect(respond.body).have.length(0)  
               })
         })
        })

  })