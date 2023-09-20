describe("Assertion Demo",()=>{


    it("Implicit assertion",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //cy.url().should('include','orangehrmlive.com')
        //cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.url().should('contain','orangehrmlive.com')

        //cy.url().should('include','orangehrmlive.com')
        //.should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //.should('contain','orangehrmlive.com')

        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrmlive.com')
        .and('not.contain','greehrmlive.com')

        cy.url().should('include','orangehrmlive.com')
        cy.title().should('include' , 'OrangeHRM')
            .and('contain', 'HRM');

            cy.get('.orangehrm-login-branding > img').should('be.visible')
            cy.get('.oxd-text--h5').should('exist')

            cy.get('.container a').should('have.length', 0);

            cy.get("input[placeholder ='Username']").type("Admin") // to provide value to username input box
            cy.get("input[placeholder ='Username']").should('have.value','Admin') // to provide username as admin







    })
})