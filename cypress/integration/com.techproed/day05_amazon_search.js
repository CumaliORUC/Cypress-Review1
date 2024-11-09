describe("search", () => {
  it("amazon search", () => {
    cy.amazonSearch("imac");
    //cy.amazonSearch("iphone");
    //Assertions
    // 1)
    cy.get(".a-section > .a-color-state").contains("imac");

    //2)
    //cy.get(".a-section > .a-color-state").should("have.text", '“imac”' )
  });
  it("test 2", () => {});
});
