describe("Pokedex", () => {
  beforeEach(() => {
    cy.visit("/pokedex");
  });

  it("test click", () => {
    cy.findByRole("heading").should(($h1) => {
      const text = $h1.text();
      console.log({ text });
      expect(text).to.equal("bulbasaur");
    });

    cy.findByRole("combobox").select("squirtle");

    cy.findByRole("heading").should(($h1) => {
      const text = $h1.text();
      console.log({ text });
      expect(text).to.equal("squirtle");
    });
  });
});
