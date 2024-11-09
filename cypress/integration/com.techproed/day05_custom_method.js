describe("custom method", () => {
  it.skip("login", () => {
   //commad js de tanımladığımız login methodunu parametre olarak kullandık.
    cy.login("123murat123@gmail.com", "123murat123");

   
  });
 

  it("negative login", () => {
   
   cy.login("123murat12@gmail.com", "123murat123");

   cy.get("#center_column > :nth-child(2)").contains('failed.')
   //cy.contains(‘Authentication failed’).should(‘be.visible’)
        cy.url().should("include", "controller=authentication")
        cy.screenshot()

  });
});
