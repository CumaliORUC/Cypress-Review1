describe("hover Over", () => {
  it("move over", () => {
    cy.visit("https://www.amazon.com/");
    cy.get(".icp-nav-link-inner > .nav-line-2 > .nav-icon").trigger(
      "mouseover"
    );
    //trigger ile mouse hareket ettiriyoruz
    //change country/region

    cy.contains("Change country/region").click();

    //select canada

    //cy.get(‘.a-dropdown-prompt’).select(‘Canada’)
    /*
        <span class=“a-dropdown-prompt”>United States</span>
        yukaridaki locater bu tag icerinde geciyor.
        Ancak cy.select() kodu kullanirken locaterlarin <span></span>
        icerinde olmamasi lazim.

        locate ederken dropdownda acamazsa select yoktu bu ornekte uyari verdi ondan manual olarak parenta gittik ilk select buldugumuz yerde id yi aldik.
        */
    cy.get("#icp-selected-country").select("Canada", { force: true });
    // dropdown ellemetleri acmak ici kullaniyoruz.
  });
});
