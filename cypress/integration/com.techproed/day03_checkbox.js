describe ('checkboxes', ()=> {

 it.skip('checkboxes', ()=>{
   cy.visit("http://automationpractice.com/index.php");
   //it.skip --> testi run etmez
   //it.only --> sadece o testi calistirir
   cy.get('a[title="Women"]').click();

   cy.get("#layered_category_4").should("not.be.checked");

   //should('not.be.checked',) tıklı olmadığını test eder.

   cy.get("#layered_category_4").check();

   cy.get("#layered_category_4").should("be.checked");

   //tıklamayı kaldıralım.
   cy.get("#layered_category_4").uncheck().should("not.be.checked"); //tıklı olmadığını assert et.
 })

 it.skip('check all checkboxes',()=>{
//bu testin çalıştığını kontrol etmek için yukarıyı skip ile ignore ettik. yani çalışmayacak  
 cy.visit("http://automationpractice.com/index.php");
 cy.get('a[title="Women"]').click();

 cy.get('input[type="checkbox"]').check() //tum checkboxler tıklar


cy.get('input[type="checkbox"]').uncheck();



 })

 it('click', ()=> {
   cy.visit("http://automationpractice.com/index.php");
   cy.get('a[title="Women"]').click();

   cy.get('input[type="checkbox"]').click({ multiple: true }); //normalde click sadece bir tane için çalşırmış ama eger çoklu click yapmak istiyorsak click içine ({ multiple: true }) yazarsak sorun çozulur. Abi superrrr yaaa...

   cy.get('input[type="checkbox"]').should("be.checked")
  //click({ multiple: true }) -> click() tek elemente uygulanır.
        //birden fazla elemente uygulmak icin { multiple: true } kullanilir.
        //Assert
        //1)
        cy.get('input[type="checkbox"]').first().should('be.checked') //first ilk checboxe tıklar.
        //2)
        cy.get('input[type="checkbox"]').first().parent().should("have.class", "checked") 
        //htmle baktığında check olunca yukarıda span yanındaki classda checked çıkıyor. Onun için have.class yaptık aynı şekilde aşağıdakiler içinde yapabiliriz 
        //3)should(‘have.id’, ‘username’)
        //4)should(‘have.type’, ‘text’)
        //should(‘have.class’, ‘container’)

 }) 

})