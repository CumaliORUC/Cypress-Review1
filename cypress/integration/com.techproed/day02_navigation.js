describe ('Navigation',()=>{

 it.skip('back, forward, refresh', ()=>{
cy.visit("https://qa-environment.koalaresorthotels.com/");

//it skip yapılınca bu bolum işleme alınmıyor ignore ediliyor.

cy.wait(4000) //hard wait of cypress
cy.contains('Log in').click();
cy.wait(2000);

cy.go('back')
cy.wait(2000);

cy.go('forward')
cy.wait(2000);

cy.go(-1) //bir onceki sayfaya gider
cy.wait(2000);

cy.go(1)  //ileri sayfaya gider
cy.wait(2000);

cy.reload()
//sayfayı tekrar yukler
})


it('Zincirleme Navigasyon', ()=>{

cy.visit("https://qa-environment.koalaresorthotels.com/");

cy.contains('Log in')

.click()
.go('back')
// cy.pause() testi durdurur. 
.go('forward')
.go(-1)
cy.
reload(true) //true yazmasak da olur.
.contains('Log in')
.should('be.visible')

 })



})