describe("custom commands",()=>{


    it("handling user links",()=>{

        cy.visit("https://demo.nopcommerce.com/")

        //using custom command created in cypress>support>command.js folder
        cy.clicklink('HTC One M8 Android L 5.0 Lollipop')
        cy.get("div[class='product-name'] h1").should('be.visible')
    })

    it.only(" overwritting contains function",()=>{

        cy.visit("https://demo.nopcommerce.com/")
        cy.clicklink("Apple MacBook Pro  13-inch")
        cy.get("div[class='product-name'] h1").should('be visible')

})

it("login custom command", () => {
    
    cy.visit("https://demo.nopcommerce.com/")
    cy.get(".ico-login").click()
    //cy.wait(1000);
    cy.LoggIn('shubhangi.s.kalbande+2@gmail.com', 'abc@123')
    cy.wait(2000);
    cy.get('.ico-account').should('have.text','My account'); // Replace '#login-form' with the selector of the login form or another element that indicates success.

  })
  
  
})