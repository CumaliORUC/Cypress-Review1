describe('Windows',()=>{
    it.skip('windows',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.wait(3000)

        cy.get('.example > a').invoke('removeAttr','target').click()   //yeni sekme  açılmasını engelleyecek işlem yapıyoruz.

        cy.get('h3').should('have.text','New Window')
    })

    it('2.YONTEM PROP',()=>{
        //Burada yeni sayfanın linkini taşıyan attribute kullanarak bir değişkene atıyacak bir fonksiyon oluşturuyoruz
        // ve onu değişken vasıtasıyla test içerisinde kullanıyoruz.
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.wait(3000)
        cy
        .get('.example > a')
        .then((element)=>{
            const newURL=element.prop('href')
            cy.visit(newURL)
        })

    })

})