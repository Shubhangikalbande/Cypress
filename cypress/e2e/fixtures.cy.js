describe("handling fixtures",()=>{

    let userdata;
    /*it("FixtureDemo test",()=>{


        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture('orangehrm').then((data)=>{

            //const { username, password, expected } = data;

      
        cy.get("input[placeholder='Username']").type(data.username)
        cy.get("input[placeholder='Password']").type(data.password)
        cy.get("button[type='submit']").click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module",{ timeout: 10000 }).should('have.text',data.expected)
    })
    })*/

    before(()=>{

        
        cy.fixture('orangehrm.json').then((data)=>{

            userdata=data;
        })
    })
    it("FixtureDemo test",()=>{


        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type(userdata.username)
        cy.get("input[placeholder='Password']").type(userdata.password)
        cy.get("button[type='submit']").click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module",{ timeout: 10000 }).should('have.text',userdata.expected)
    })


})