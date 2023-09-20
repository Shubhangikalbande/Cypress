import Login from '../PageObjects/loginpage.js';


describe("projectObjectmodel",()=>{
//normal approach
    it(" login",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text','Dashboard')
    })


    // using pom
    it("pom",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const ln= new Login()
        ln.setUserName("admin")
        ln.setPassword("admin123")
        ln.clickSubmit();
        ln.verifyLogin();

            })

    //using pom with fixture

    it.only("Login using POM with Fixtures", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.fixture('orangehrm-pom.json').then((data) => {
          const ln = new Login();
          ln.setUserName(data.username);
          ln.setPassword(data.password);
          ln.clickSubmit();
          ln.verifyLogin();
        });
      });
    });
    
    