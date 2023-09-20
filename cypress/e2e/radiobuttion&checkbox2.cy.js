/*describe("Testing radio button ",()=>{

    it(" Testing radio button",()=>{



        cy.visit("http://test.rubywatir.com/radios.php")
        cy.get("input[value='Nope']").should('be.visible')//to check visibility of male
        cy.get("#radioId").should('be.visible')//to check visibility of female

        // selection of radio button

        cy.get("input[value='Nope']").should('not.be.checked')
        cy.get("#radioId").check().should('be.checked')



    })
}) */
describe("testing checkboxes",()=>{

    it("testing checkboxes",()=>{


        cy.visit("http://test.rubywatir.com/checkboxes.php")
        //cy.get("input[value='football']").should('be.visible')// to check visibility of footbal
        //cy.get("input[value='snooker']").should('be.visible')

        cy.get("input[value='rugby']").check().should('be.checked')//to tick on th echeckbox
        cy.get("input[value='netball']").uncheck().should('not.be.checked')// to untick

        //to select all checkboxes at a time
        cy.get("input[type='checkbox'][name='sports']").check().should('be.checked')
        cy.get("input[type='checkbox'][name='sports']").uncheck().should('not.be.checked')

        cy.get("input[type='checkbox'][name='sports']").first().check().should('be.checked')
        cy.get("input[type='checkbox'][name='sports']").last().check().should('be.checked')
    })
    }) 
