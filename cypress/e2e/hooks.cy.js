


//hooks

//before
//each
//beforeEach
//afterEach


//tags

//.skip
//.only

describe("My test suite",()=>{

    before(()=>{

        cy.log("launch the app")
    })

    after(()=>{

        cy.log(" app is closing")
    })

    it("search",()=>{

        cy.log(" searching.....")

    })

    beforeEach(()=>{

        cy.log("login credentials")
    })

    afterEach(()=>{

        cy.log("logout from application")
    })
    it(" advacnced search",()=>{

        cy.log(" advanced searching.....")
        
    })

    it("listing products",()=>{


        
    })
})