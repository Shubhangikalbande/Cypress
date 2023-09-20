describe("handle dropdown",()=>{


    it.skip("testing dropdown - selection",()=>{


        cy.visit("https://www.geodatasource.com/software/country-region-dropdown-menu-demo")
        cy.get(".form-control.gds-cr[country-data-region-id='gds-cr-one']")
        .select('Fiji').should('have.value','Fiji')
    })

    it.skip("testing dropdown - without selection(by default something is selected) ",()=>{


        cy.visit("https://demo.mobiscroll.com/fullscreen/select/country-picker");
        cy.get("#demo155-country-picker").click();
        cy.wait(1000);
        cy.get('input[autocomplete="off"].mbsc-ios.mbsc-ltr.mbsc-select-filter-input.mbsc-textfield.mbsc-textfield-box[placeholder="Search"]').type('Japan');
        cy.wait(1000);
        cy.get('button.mbsc-popup-button.mbsc-popup-button-anchored.mbsc-ltr.mbsc-popup-button-primary.mbsc-reset.mbsc-font.mbsc-button.mbsc-ios.mbsc-ltr.mbsc-button-flat')
        .contains('Set').click();
        cy.get("#demo155-country-picker").should('have.value','Japan')
  
       
    })




   


it.skip("testing dropdown - auto suggested ",()=>{

    cy.visit("https://www.wikipedia.org/") 
    cy.get("#searchInput").type("Pune")
    cy.get(".suggestion-link").contains("Pune Metro").click()
})

//jquery function

it("testing dropdown - dyanamic dropdown ",()=>{

    cy.visit("https://www.google.com/") 
    cy.get("#APjFqb").type("cypress automation")
    cy.wait(3000)
    cy.get("div.wM6W7d>span").should('have.length',12)
   
    cy.get("div.wM6W7d>span").each(($el,index,$list)=>{

        if($el.text ()=="cypress automation jobs")
        cy.wrap($el).click();
    })

cy.get("#APjFqb").should('have.value','cypress automation jobs')

})

})

