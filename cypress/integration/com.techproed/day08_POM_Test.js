//dosyaları import ederken oncelikle tek tırnak sonra yan yana iki nokta ve slac koyunca dosya adını getiriyor.

/// <reference types="Cypress" />  

//yukarıdaki ifade harf girince onunla alakalı methodları getirmek için kullanılıyormuş. Kraldan...
import HomePage from '../pageObjectRespository/HomePage' 



import LoginPage from '../pageObjectRespository/LoginPage'  


describe("Paylinn Bank", () => {
  before(function () {
    //burada ki fonkisyon ile bilgilere erişiyoruz.
    cy.fixture("creds").then(function (data) {
      this.data = data;
    });
  });
  it("paylinn login test", function () {
    //page object oluşturma 
    const homePage= new HomePage()

    //login oluşturma

    const loginPage= new LoginPage()

    cy.visit("https://www.paylinn.com/");
    //Sign In’e click
 

    homePage.getSigninLink().click()
    //username gir
    loginPage.getUserNameBox().type(this.data.username)
    //username girildiğini doğrula

    loginPage.getUserNameBox().should("have.attr", "value", this.data.username);

    //password gir
    loginPage.getPasswordBox().type(this.data.password)
    //password girildigini dogrula
    loginPage.getPasswordBox().should("have.attr", "value", this.data.password)
        //sign In butonuna tikla
    loginPage.getLoginButton().click()
        //giris yapildigini onayla
   loginPage.getWelcomeText().should("contain.text", "Welcome")
        //giris yapildigini assert etme
    loginPage
      .getNewbarHeader()
      .should("contain.text", "Welcome")
      .and("contain.text", "React")
      .and("contain.text", "Logout")
      .and("contain.text", this.data.username);
    })
});