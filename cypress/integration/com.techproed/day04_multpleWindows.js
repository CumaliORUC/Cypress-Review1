describe('multiple Windows', ()=>{


 //1. YONTEM Yeni sekme acmadan yapmak
 it.skip('removing target',()=>{
   cy.visit("https://the-internet.herokuapp.com/windows");
   //incele yaptığımızda bizi başka sayfaya yonlendiren linkin yanında target blank ile bizi yeni sayfaya yonlendirir Eger burayı silerrsek aynı sayfada açar.Yani

   cy.get(".example > a").invoke("removeAttr", "target").click();

   //invoke('removeAttr', 'atribute name') boylece yeni sekmede acmadan aynı sayfada yapar.

   cy.get("h3").should('contains','New')
 })

 //2.Yontem Yeni bir URL ile yeni sekme

 it('yeni urlde acma', ()=>{
cy.visit("https://the-internet.herokuapp.com/windows");

cy.wait(3000)

cy.get(".example > a").then((element)=>{
 const newUrl=element.prop('href') //gidilecek sayfanın linkini prop() ile aldık başka bir degere atadık ve ordan visit ile buraya git diyoruz. 
 // 
cy.visit(newUrl)

})
//ve assertion
cy.get('h3').should('have.text', 'New Window')

 })

})