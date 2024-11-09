import 'cypress-iframe'

describe('Iframe',()=>{
    it('Iframe',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('h3').should('contain','Editor')
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe().find('p').clear()
        cy.iframe().find('p').should('have.text','')

        cy.iframe().find('p').type('Cypress Javascript ile çok güzel')

    })
})