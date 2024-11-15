describe("XHR - XML, HTTP, Request", () => {
    //XHR, JavaScript ile sunulmus bir API
    //Web sitesini es zamanli olarak arka planda calisan olaylari takip eder.
    const requestUrl = "https://jsonplaceholder.cypress.io/comments"
    it("XHR Example 1", () => {
        cy.request(requestUrl).should((response) =>{

         //addrese git ve tanımladığım response getir. adreste sağ tıklayıp incele diyerek gelen dataları console da inceliyoruz.
            console.log(response)
            assert.equal(response.status, 200)
            expect(response.statusText).to.eq("OK")
        })
    })
})