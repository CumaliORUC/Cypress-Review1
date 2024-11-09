const { first } = require("cypress/types/lodash")

describe('Hover over',() => {
    it.skip('mouseover', ()=>{
        cy.visit('https://wwww.amazon.com')
        cy.get('.icp-nav-link-inner > .nav-line-2 > .nav-icon').trigger('mouseover')
        cy.contains('Change country/region.').click()
        cy.get('.a-dropdown-container > .a-button > .a-button-inner > .a-button-text').click()
        cy.get('#icp-dropdown_19').click()
        cy.get(-1)
        cy.get('.a-dropdown-container > .a-button > .a-button-inner > .a-button-text').click()
        cy.get('#icp-dropdown_7').click()
        cy.scrollTo('topLeft')
        //cy.get('span.a-dropdown-prompt').should('have.text','India')

        //eger dropdown methodu ile yapacak olursak. Bunun için select tagnamei olan locatorı kullanıyoruz.
        
        cy.get('#icp-dropdown').select('Canada',{force:true})  //force true ile zorlayarak yapmış oluyoruz.

        cy.get('.navFooterCopyright > ul > :nth-child(2) > .nav_a').scrollIntoView()
        cy.wait(3000)
        cy.scrollTo('top')
        cy.wait(3000)
        cy.scrollTo('bottom')
        cy.wait(3000)
        cy.scrollTo(0,500)
    })

})