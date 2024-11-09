describe('Checkbox',()=>{

    it.skip('Checkbox',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('a.sf-with-ul').first().click()  //4 tane element olduğundan boylece ilkine tıklamış olacağız.
        cy.get('#ul_layered_id_feature_7 > :nth-child(4) > label > a').scrollIntoView()
        cy.get('#uniform-layered_id_feature_11').should('not.be.checked')
        cy.get('#layered_category_4').check()
        cy.get('#layered_category_4').should('be.checked') //tıklı olduğunu assert eder
        cy.get('#layered_category_4').uncheck()  //uncheck ile tıkı kaldırıyoruz.
    })

    it('Checkbox All and Assert All',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('a.sf-with-ul').first().click()
        cy.get("input[type='checkbox']").check()   //tüm elementeleri css olarak locate edip check ettik.
        cy.get("input[type='checkbox']").should('be.checked')  //uncheck ettikten sonra tamamını assert ettik.

        cy.get("input[type='checkbox']").uncheck()  
        cy.get("input[type='checkbox']").should('not.be.checked')  //uncheck ettikten sonra tamamını assert ettik.

        cy.get("input[type='checkbox']").click({multiple: true})  //çoklu click yaptık
        cy.get("input[type='checkbox']").should('be.checked') 

        cy.get('#layered_category_4').first().parent().should('have.class','checked')     
        //Burada should('have.id','username')
        // should('have.type','text') gibi özellikler ekleyebiliriz.  
    })
})