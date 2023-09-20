describe("Navigation",()=>{


    

    it("Navigating through pages", () => {
        cy.visit("https://demo.opencart.com/");
        cy.title().should('eq', "Your Store"); // Corrected page title
        
        cy.get("li:nth-child(7) a").click(); // Click on the Cameras link
        
        // Assertions on the Cameras page
        cy.title().should('eq', "Cameras"); // Updated page title assertion
        cy.get("div[id='content'] h2").should('have.text', 'Cameras');
        
        // Go back to the home page
        cy.go('back');
        
        // Assertions on the home page after going back
        cy.title().should("eq", "Your Store"); // Corrected page title
        
        // Go forward to the Cameras page again
        cy.go('forward');
        
        // Assertions on the Cameras page after going forward
        cy.title().should('eq', "Cameras"); // Updated page title assertion
        cy.get("div[id='content'] h2").should('have.text', 'Cameras');

        cy.go(-1) //alternative for home page
        cy.title().should('eq', "Your Store");

        cy.go(1)//alternative for camera page
        cy.reload();

      });
      
})