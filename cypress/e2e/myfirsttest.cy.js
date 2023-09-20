describe('My First Test', () =>
 {
    it('test1', () => 
    {
      cy.visit("https://www.orangehrm.com/en/book-a-free-demo/")
      cy.title().should("eq","OrangeHRM")

    }
    )
    
    
  })