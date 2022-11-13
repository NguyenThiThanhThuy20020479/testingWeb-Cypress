 
const object1 = {
    "message": "chúng tôi sẽ trả phòng lúc 8h"
  }
describe('Test Fake API ', () => {
    it('Patch method - update message', () => {
        cy.visit("localhost/hotel/project/")
        cy.request({
          method: 'PATCH',
          url :'http://localhost:3000/messages/0123',
          body :  object1     
            
         }).then((respond)=>{
            expect(respond.body.message).have.eq("chúng tôi sẽ trả phòng lúc 8h")
         })
        })

  })