import 'cypress-iframe' 
//eger bu satırı yazmazsak iframe ile ilgili komutları alamayız ve ifram içine giremeyiz.


describe('iframe', ()=>{

 it('iframe test',()=>{
   cy.visit("https://the-internet.herokuapp.com/iframe");

   cy.get("h3").should("contain", "Editor");

   cy.frameLoaded("#mce_0_ifr"); //iframeloaded ile yerini tanımlıyoruz. ve içinde bulunuyooruz.

   cy.iframe().find("p").clear(); //iframe içindeki p tag'ı ile yazılmış yazıyı clear ile sildik.

   cy.iframe().find("p").type("Hello World");

   //Seleniumdaki gibi switch to yapmamıza gerek yok. Ayrıca tekrar iframe den çıkmamızada gerek yok. Yani aşağıda olduğu gibi

   cy.get(".large-4 > div > a").click()
 })



})
