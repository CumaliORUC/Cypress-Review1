describe('view port', ()=>{
    it('viewport',()=>{
        cy.visit('https://www.amazon.com')
        cy.viewport('iphone-7')  //ekran web gorünümünde mobil gorünüm gelmiyor.
        //ya da 
        cy.viewport(2500,1500)
    })
})