describe ('My First Test', () => {
//describe ('isim', 'test için oluşturulan fonksiyonlar')

it ('URL Testi', () => {
//burada da yapılacak testi tanımlıyoruz @Test anotaion gibi

//it ('Testin ismi', 'oluşturulacak fonksiyonlar' )

//URL adresinde google var mı?

cy.visit('https://www.google.com/') //visit ile siteye gider.

cy.url().should('include', 'www.google.com') //url testini yaptık should include ile yapılıyor.


})

//2. testi yapalım. 

it('Title Test', () => {
 //Title da google var mı 
cy.visit('https://www.google.com/')
cy.title().should('eq', 'Google')
})

})