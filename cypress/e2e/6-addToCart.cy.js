it ("Add item to cart EG" , ()=>{
    // open website
    cy.visit('https://homzmart.com/?srsltid=AfmBOopZUT6u4COJbIEjC-WXoLK-kGLfH3cMXDnTMtmdlvBS9gTn5dsk')
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

  // Wait for the popup to appear
 // cy.wait(5000);

  // Close popup if it appears
  cy.wait(5000)
  cy.handlePopup();


    //click on category
    cy.get(':nth-child(4) > .category_item > a > .images_Container > .image_item', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true })

   // Close popup if it appears
   cy.wait(5000)
   cy.handlePopup();


// click on item
cy.get(':nth-child(2) > a > .productCard__info')

  .click({ force: true })


  
    // Click on add to cart
    // cy.get('hz-button-icon-wrapper').click({force : true})  
    cy.xpath(`//*[@id="app-root"]/div[2]/div[2]/div/section[1]/div[2]/div[2]/div[2]/div[2]/div/button/div/span`).click({force:true})
  
    // See Validation message 
    cy.wait(2000)
    cy.get('.toastify').should('be.visible')
    
  });