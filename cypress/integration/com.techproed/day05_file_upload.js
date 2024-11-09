describe("file upload", () => {
  it.skip("tek dosya yukleme", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    cy.get("#filesToUpload").attachFile("image01.jpeg");

    cy.get("#fileList > li").should("include.text", "image01.jpeg");
  });
  it.skip("Çoklu Dosya Yukleme", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

    const path1 = "image01.jpeg";
    const path2 = "image02.jpeg";
    const path3 = "image03.jpeg";

    /*cy.get("#filesToUpload")
      .attachFile(path1)
      .attachFile(path2)
      .attachFile(path3);
      */

    //veya list halinde de ekliyebiliriz.
    cy.get("#filesToUpload").attachFile([path1, path2, path3]);
  });

  //==============FILE RENAME============
  //eklediğimiz dosyanın ismini değiştirmek için attachFile({filepath: path, filename:'name'}) ile yapıyoruz.
  it("override file name", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

    const path1 = "image01.jpeg";

    cy.get("#filesToUpload").attachFile({
      filePath: path1,
      fileName: "yeniisim.jpg",
    });

    cy.get("#fileList > li").should("have.text", "yeniisim.jpg");

    //veya cy.contains("yeniisim.jpeg").should("be.visible")
  });
});
