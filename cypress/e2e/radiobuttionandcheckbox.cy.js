/*describe("checking radio button",()=>{


    it("radio button test",()=>{

        cy.visit("http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        cy.get("#radio-buttons").should('be.visible') //visibility of radio button
        
        // selection of radiobutton

        cy.get("input[value='green']").check().should('be.checked')
        cy.get("input[value='blue']").should('not.be.checked')
    })
}) */

describe( " checking checkbox ",()=>{

    it("Testing checkbox",()=>{

        //cy.visit("https://practice.expandtesting.com/checkboxes")
        //cy.get("#checkbox1").should('be.visible') // visibility of the checkbox
        
        //cy.get ("#checkbox1").check().should('be.checked') // to select the 1stnd check box
        //cy.get ("#checkbox1").uncheck().should('not.be.checked') // to unselect the 1st check box

        //selecting all checkbox at a time

        cy.visit("https://practice.expandtesting.com/checkboxes")
        //cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        //cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        //cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        //cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')

        
})

})