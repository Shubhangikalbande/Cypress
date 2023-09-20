describe ( ' CSSlocators ',()=>{

    it("CSSlocators" ,()=>{


        cy.visit("https://www.flipkart.com");
        cy.get("._3704LK").type("tshirt for women");
        cy.get(".L0Z3Pu").click();
        cy.url().should("include", "search?q=tshirt%20for%20women");
        cy.contains("._10Ermr", "tshirt for women").should("be.visible");
    })



})