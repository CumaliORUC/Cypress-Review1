describe('fie upload',()=>{
it('file up',()=>{

    const path='FLOWER.jpg'
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
    cy.get('#filesToUpload').attachFile('FLOWER.jpg')

    cy.get('#filesToUpload').attachFile({filePath:path,fileName:'Deneme.jpg'})
    cy.get('#fileList > li').should('have.text','Deneme.jpg')
    })
})