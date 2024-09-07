it (" Valid EG Login test" , ()=>{

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
    // validate succesfull login to homapage
    cy.get(':nth-child(4) > .category_item > a')
    .should('be.visible')
   
})

it (" Valid KSA Login test" , ()=>{

    // open website
    cy.visit('https://homzmart.sa/')
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
      .type("123456")
    cy.get('.MuiButton-root').click()

    // Close popup if it appears
  cy.handlePopup();

    // validate succesfull login to homapage
    cy.get(':nth-child(4) > .category_item > a')
    .should('be.visible')
   
})