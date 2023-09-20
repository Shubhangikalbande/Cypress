describe("Assertion demo ",()=>{

    it("Explicit assertion",()=>{

cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
cy.get( "input[placeholder='Username']").type("Admin");
cy.get("input[placeholder='Password']").type("admin123");
cy.get("button[type='submit']").click();
 

    let ExpName ="anjali rather"
    cy.get(".oxd-userdropdown-name").then( (x) =>{


        let ActName = x.text();

        //BDD behavioural driven development

        expect(ActName).to.equal(ExpName)
        //expect(ActName).to.not.equal(ExpName) //this will throw error because actname=expname

        //TDD Test driven development
         
        assert.equal(ActName,ExpName)
        assert.notEqual(ActName,ExpName)  //this will throw error




    })
})
})