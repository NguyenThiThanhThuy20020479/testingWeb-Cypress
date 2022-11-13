describe('Test Fake API ', () => {
    it('Get method - read admins', () => {
      cy.visit("localhost/hotel/project/")
      cy.request({
        method: 'GET',
        url : 'http://localhost:3000/admins',
  
       }).then((respond)  => {
        expect(respond.status).to.eq(200)
        expect(respond.body).have.length(3)
        expect(respond.body[0].name).to.eq('admin1')
        })
      })
    it('Get method - read booking', () => {
        cy.visit("localhost/hotel/project/")
        cy.request({
        method: 'GET',
        url : 'http://localhost:3000/booking',
        }).then((respond)  => {
          expect(respond.status).to.eq(200)
          expect(respond.body).have.length(5)
          expect(respond.body[1].name).to.eq("Nguyen Thi Hue")
          expect(respond.body[1].check_in).to.eq("23/04/2022")
          expect(respond.body[3].child).to.eq(2)
          })   
      })
      it('Get method - read message', () => {
        cy.visit("localhost/hotel/project/")
        cy.request({
        method: 'GET',
        url : 'http://localhost:3000/messages',
        }).then((respond)  => {
          expect(respond.status).to.eq(200)
          expect(respond.body).have.length(0)
          })   
      })
  })