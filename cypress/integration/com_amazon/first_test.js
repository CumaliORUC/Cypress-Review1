describe ("My First Test", ()=>{
//bu alana tüm test fonksiyonlarımızı ekliyoruz. Main method gibi
    it('Url testi', ()=>{
//Burada testimizi tanımlıyoruz.

//Url adresinde amazon var mı ona bakalım.
        cy.visit('https://wwww.amazon.com') //sayfaya git
        cy.url().should('include','www.amazon.com') //assert yapıyoruz.
    })

    //2. Test Title amazon içeriyor mu?

    it('title test', ()=>{
        cy.visit('https://wwww.amazon.com') //sayfaya git
        cy.title('eq','amazon')  //eq equalsın kısaltması demek
    })

//Login olma ve locator kullanma
    it('Login', ()=>{
        cy.visit('https://wwww.amazon.com')
        cy.get('#nav-link-accountList').click() 
        
        //Ya da burada çok güzel bir özellik daha var.
        // contains('string kelime') methodu yani eger sayfada ismini bildiğimiz unique bir element varsa
        //gider onu alır ve istenilen işlemi yapar. Yani click() yapabilir.
        cy.contains('Need help?').click()
    
    })
    
})
