// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//const { filter } = require("cypress/types/bluebird");

//custom commands to peform click action

Cypress.Commands.add('clicklink', (partialLabel) => {
    cy.get('a').contains(partialLabel).click();
  });
  
//OVERWRITTING CONTAINS FUNCTION

Cypress.Commands.overwriteQuery('contains', (originalFn, subject, text, filter, options = {}) => {
    if (typeof text === 'object' && typeof filter === 'undefined') {
      options = text;
      text = undefined;
    }
  
    options.matchCase = false;
  
    return originalFn(subject, text, filter, options);
  });
  

  //custom command for login

  Cypress.Commands.add('LoggIn',(email,password)=>{
    
    cy.get("#Email").type(email);
    cy.get("#Password").type(password);
    cy.get("button[class='button-1 login-button']").click()


  })

