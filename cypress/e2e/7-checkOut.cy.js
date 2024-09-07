it ("Check out scenario" , ()=>{
    // open website
    cy.visit('https://homzmart.com/en/?gad_source=1&gclid=Cj0KCQjwiuC2BhDSARIsALOVfBLE3G0zukdUoNUFu_JVQSak3VVck6Ro1n_1TYF5AXLEKo2NiQtKjQQaAr7bEALw_wcB')
    //click user menu
    cy.get('.userMenu__handle')
      .click()
    // click sign in
    cy.get('.signIn__btn > .hz-button-icon-wrapper > .button-with-icon')
      .click()
    // ener valid email
    cy.get('#outlined-basic').type("mostafa.mmk3@gmail.com")
    cy.get('.MuiButtonBase-root').click()
    //enter valid password
    cy.get('.base-password-input_BasePasswordInput__mMDxt > .MuiInputBase-root > #outlined-basic')
      .type("test12345")
    cy.get('.MuiButton-root').click()
    
// Wait for the page to fully load
cy.window().then((win) => {
    return new Cypress.Promise((resolve) => {
      if (win.document.readyState === 'complete') {
        resolve();
      } else {
        win.addEventListener('load', resolve);
      }
    });
  });


  // Close popup if it appears
  cy.wait(5000)
  cy.handlePopup();

  // open cart
  cy.get('.cart__container').click({force:true})
  cy.get('#HEADER_CART_BRIEF_GO_TO_CART_BUTTON').click({force : true})

  cy.get('.base-summary_summary_btn__0TGBY > .MuiButtonBase-root').click({force : true})


  // Close popup if it appears
  cy.wait(5000)
  cy.handlePopup();

  // validate check out option
  cy.get('.base-summary_summary_btn__0TGBY > .MuiButtonBase-root').should('be.visible')







  
    
    
  });