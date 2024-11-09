class HomePage {
    getSigninLink(){
        return cy.get('[href="/login"]').click()
    }
}
//export yapıyoruz.
export default HomePage
