describe("viewport", () => {
//sayfanın buyukluğunu kendimiz ayarlamak için kullanılır.

  it("iphone6", () => {
   cy.visit('https://www.amazon.com')

   cy.viewport('iphone8') //ıphone 8 nasıl gorulur onu gosterir.
   cy.screenshot



  });
  it("imac", () => {
cy.visit("https://www.amazon.com");

cy.viewport("macbook-16"); 

  });

  it("custom", () => {
        cy.visit("https://www.amazon.com")
        cy.viewport(2500, 1500)
        cy.screenshot
    })
});
