describe(" capturing screeshots and videos",()=>{


    it("screenshots",()=>{

        cy.visit("https://demo.opencart.com/")
        //cy.screenshot("homepage")
        //cy.wait(3000)
        //cy.get("img[title='Your Store']").screenshot("logo")

        //to capture screeshot & video when the test gets failed by running command in cmd promt 

        cy.get("li:nth-child(7) a:nth-child(1)").click();
        cy.get("div[id='content'] h2").should('have.text',"Tablets") //purposly failing command to capture ss n video


    })
})