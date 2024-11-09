describe("Paylinn Bank", () => {
 before (function () { //burada ki fonkisyon ile bilgilere erişiyoruz.
  cy.fixture("creds").then(function(data) {
   this.data=data
  })

 })
  it("paylinn login test", function() {
    //URL’e git
    cy.visit("https://www.paylinn.com/");
    //Sign In’e click
    cy.contains("Sign In").click();
    //username gir
    cy.get(
      ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    ).type(this.data.username);

    //username girildigini dogrula
    //value attribute dogrulayacagiz. html de incele dediğimizde username yerine deger girdiğimizde aşağısdaki gibi value atrribute kısmı farklı oluyor. Onu kullanarak assret yapabiliriz.
    //<input aria-invalid=“true” name=“username” type=“text” class=“MuiInputBase-input MuiInput-input” value=“”>
    //<input aria-invalid=“false” name=“username” type=“text” class=“MuiInputBase-input MuiInput-input” value=“User”>

    cy.get(":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input")
        .should("have.attr", "value", this.data.username)
    //password gir
    //aynı şekilde yazılan ifadeler password içinde geçerlidir.
     cy.get(":nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input")
        .should("have.attr", "value", this.data.password)

    cy.get(
      ":nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    ).type(this.data.password);
    //sign In butonuna tikla
    cy.get(".MuiButton-label").click();
    //giris yapildigini onayla
    cy.get(".header__nav > :nth-child(1) > .header__lineOne")
    .should(
      "contain.text",
      "Welcome"
    ).and("contain.text", this.data.username)
    .and("contain.text","Logout")
    .and("contain.text","React")
  });
});
