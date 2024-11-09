describe('dropdown', ()=> {

  it('dropdown test', ()=>{
        cy.visit('https://the-internet.herokuapp.com/dropdown')


        cy.get("#dropdown")
        .select('Option 1');


        cy.wait(3000)
        //select option 2
        cy
        .get('#dropdown')
        .select('Option 2').should('have.value', '2') //boylece assert etmiş olduk.
    })


})