describe("Crystal Key Hotel", () => {
  it("Url Testi", () => {
    cy.visit("https://qa-environment.koalaresorthotels.com/");

    //login yapalım
    //1. yol
    //cy.get("#navLogon > .nav-link").click();

    //2. yol
    cy.contains("Log in").click();
    //contains() metni text olarak buluyor
    //username ve password girelim

    cy.get("#UserName").type('manager')
    cy.get("#Password").type('Manager1!')
    cy.get("#btnSubmit").click()



  });

});
