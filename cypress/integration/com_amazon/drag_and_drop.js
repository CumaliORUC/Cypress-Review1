import '@4tw/cypress-drag-drop'

describe('Drag and Drop',()=>{
    it('Drag and Drop',()=>{

        cy.visit('https://demo.anhtester.com/drag-and-drop-demo.html')
        cy.get('#todrag > :nth-child(2)').drag('#mydropzone')
    })
})