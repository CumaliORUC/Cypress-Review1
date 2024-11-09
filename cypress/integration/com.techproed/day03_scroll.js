describe('sccroll', ()=> {
it('scroll into view', ()=>{
cy.visit("https://qa-environment.koalaresorthotels.com/");


cy.get(".col-md-7 > .mb-4").scrollIntoView()

cy.wait(2000)

//scrollIntoView() locate edilen yere gider.
cy.get(":nth-child(9) > .container > .justify-content-center > .col-md-7 > h2").scrollIntoView()

cy.wait(3000)

//veya scroolTo komutu ile de sayfayı kaydırabiliriz.

cy.scrollTo('bottom') //en aşağıya goturur.
cy.wait(3000);

cy.scrollTo('top') //en yukarıya goturur.
cy.wait(3000);

cy.scrollTo(0,1000) //1000px aşağı gider.
cy.wait(3000);

cy.scrollTo(0,-500) //500px yukarı çıkar.
cy.wait(3000);


})

})