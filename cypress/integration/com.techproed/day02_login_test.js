describe("Log in", () => {
  const eMail = "qwert@gmail.com";
  const pass = "qwert";

  const eMailthrue = "cypress_test_1@gmail.com";
  const passthrue = "admin_123";

  it("login negatif", () => {
    cy.visit("https://test.iyikisordun.com/login.php");

   cy.get('[type="email"]').type(eMail)
        cy.get('[type="password"]').type(pass)
        cy.get('.btn').click()
        cy.get('#fail').should('include.text', 'Girdiğiniz bilgiler hatalıdır.')
        //fail bekledigimiz durumlarda kullanabiliriz
    })
    it('login pozitif', ()=>{
        cy.visit('https://test.iyikisordun.com/login.php')
        cy.get('[type="email"]').type(eMailthrue)
        cy.get('[type="password"]').type(passthrue)
        cy.get('.btn').click()
        cy.get('.m-0').should('have.text', 'Dashboard')
        cy.url().should('include', 'index.php')
    })
});
