describe("XHR - XML, HTTP, Request", () => {
  it("XHR Example 3", () => {
    cy.visit("https://example.cypress.io/commands/waiting");
    cy.intercept("GET", "**/comments/*").as("getComment");
    //networku dinle comments bolumunde oluşacak değişikliği takip et diyoruz. yani adreste get command bolumunde orada bir tıklama var mı yokmu ona bak diyoruz. onu da incelediğimizde path bolumnde /comments var
    //as -> degisken atiyor. daha sonra @ ile kullamilir
    cy.get(".network-btn").click();  //burada click yapıyoruz. Yani input veriyoruz.
    cy.wait("@getComment")   //Burada getcommand bolumundeki değişikliği alıyoruz.
      .its("response")        //burada response çağırıyoruz. Tüm 
      .then((response) => {
        console.log(response);
        assert.equal(response.statusCode, 200, "Status Code Control");

        //değişimi incelede network aç ve get commande tıklayıp network de değişimi gor. 
        //Değişimi görmek için Yani sayfanın kendisine git orada anlarsın.
      });
  });
});
