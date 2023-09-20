describe("Amazon Search", () => {
    it("should search for 'tshirt for women'", () => {
      // Visit Amazon's homepage
      cy.visit("https://www.amazon.com");
  
      // Type 'tshirt for women' in the search box and press Enter
      cy.get("#twotabsearchtextbox").type("tshirt for women{enter}");
  
      // Verify that the search results page loads
      cy.url().should("include", "/s?k=tshirt+for+women");
  
      // Verify that the search results contain the expected text
      cy.contains(".a-color-state.a-text-bold", "tshirt for women").should("be.visible");
    });
  });
  