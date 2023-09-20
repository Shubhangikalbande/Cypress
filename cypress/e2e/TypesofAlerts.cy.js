describe("Types of alerts",()=>{


    it.skip("Normal Alert",()=>{

        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
        cy.get("input#alertexamples").click()
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('I am an alert box!');

        })

    })
    

    it.skip("confirmation alert by ok button",()=>{

        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
        cy.get("input.styled-click-button#confirmexample").click()
        cy.on('window:confirm', (alertText) => {
            expect(alertText).to.equal('I am a confirm alert');
        })
        cy.wait(2000);
        // cypress closed confirmation alert window by pressing ok button automatically
        cy.get("p.inline-explanation#confirmexplanation").should('have.text','You clicked OK, confirm returned true.')

    })

    it.skip("confirmation alert by pressing cancel button",()=>{
        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
        cy.get("input.styled-click-button#confirmexample").click()
        cy.on('window:confirm',()=> false);
        cy.get("p.inline-explanation#confirmexplanation").should('have.text','You clicked Cancel, confirm returned false.')




    })

    it.skip("Prompt alert",()=>{

        
        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")

        //we are using cy.window instead of cy.on beacuse we have to pass value in the text box before opening it,cypress by default closes opened window with ok.
        cy.window().then(win =>{
            cy.stub( win,'prompt').returns("welcome")

        }  )          

        cy.get("input.styled-click-button#promptexample[onclick='show_prompt()']").click()

        //cypress will  by default close prompt window by using ok button 
        cy.get("p.inline-explanation#promptexplanation").should('have.text','You clicked OK. prompt returned welcome.')


    })

    it.skip("Prompt alert by using cancel button",()=>{

        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
        cy.get("input.styled-click-button#promptexample[onclick='show_prompt()']").click()


        cy.on('window:prompt',()=> false);
        cy.get("p.inline-explanation#promptexplanation").should('have.text','You clicked Cancel. prompt returned null')


    })

    
        it("authenticate alert", () => {
            cy.visit("https://authenticationtest.com/HTTPAuth/", {
              auth: {
                username: "user",
                password: "pass"
              }
            });
          
           
          
            cy.get('.alert.alert-success').should('have.contain','Login Success');

          
            
          });
          
                                                                                                
    })

