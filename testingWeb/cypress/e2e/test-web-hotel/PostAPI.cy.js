//   <reference type = "Cypress" />
  describe('Test Fake API ', () => {
    it('Post method - create an message', () => {
        cy.visit("localhost/hotel/project/")
        cy.request({
          method: 'POST',
          url : 'http://localhost:3000/messages',
          body : {
            "id":"0123",
            "name": "Lê Thị Thuỳ Trang",
            "email": "thitrang@gmail.com",
            "number": "0987564322",
            "message":"Vui lòng cho chúng tôi lấy phòng lúc 8h"
          }
         }).then((respond)  => {
            cy.request({
            method: 'GET',
            url : 'http://localhost:3000/messages',
            }).then((respond)  => {
              expect(respond.body).have.length(1)
              expect(respond.body[0].number).to.eq("0987564322")
              expect(respond.body[0].id).to.eq("0123")
              expect(respond.body[0].message).to.eq("Vui lòng cho chúng tôi lấy phòng lúc 8h")
                })   
          })
        })
  })