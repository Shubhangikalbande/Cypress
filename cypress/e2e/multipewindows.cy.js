describe("multiple windows",()=>{

    it("handling tabs-approch 1",()=>{


        cy.visit("https://the-internet.herokuapp.com/windows")//parent window
        cy.get("a[href='/windows/new']").invoke('removeAttr','target').click();
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')//child window
        cy.wait(3000);
        cy.go('back')//parent window
    })

    it.only("handling tabs-approch 2",()=>{


        cy.visit("https://the-internet.herokuapp.com/windows")//parent window
        cy.get("a[href='/windows/new']").then((a)=>{

            let abc = a.prop('href')
            cy.visit( abc)
        })
        
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')//child window
        cy.wait(3000);
        cy.go('back')//parent window
    })
    })

    //drawbck of 2nd approch is that the domain should be same ,here domain is https://the-internet.herokuapp.com 
    //sub domain can be different .In our example windows and windows/new are sub domain