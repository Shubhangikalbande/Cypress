describe("frames",()=>{


    it("handling frames- 1st Approch",()=>{


        cy.visit("https://the-internet.herokuapp.com/iframe");

        
        let iframe=cy.get('iframe#mce_0_ifr')
        .its("0.contentDocument.body")
        .should('be.visible')
        .then(cy.wrap)

        iframe.clear().type("welcome {ctrl+A}");
        cy.get('button[aria-label="Bold"]')
        .click()

      });

      it.only("2nd approch by using custom command",()=>{


        cy.visit("https://the-internet.herokuapp.com/iframe");

        
        cy.getIframe("iframe#mce_0_ifr").clear().type("Welcome {ctrl+A}");

        
        cy.get('button[aria-label="Bold"]')
        .click()

      });

      
      
})
    
    
      



