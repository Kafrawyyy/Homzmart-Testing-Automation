it (" Invalid email EG Login test" , ()=>{

    // open website
    cy.visit('https://homzmart.com/?srsltid=AfmBOopZUT6u4COJbIEjC-WXoLK-kGLfH3cMXDnTMtmdlvBS9gTn5dsk')
    //click user menu
    cy.get('.userMenu__handle')
      .click()
    // click sign in
    cy.get('.signIn__btn > .hz-button-icon-wrapper > .button-with-icon')
      .click()
    // ener invalid email
    cy.get('#outlined-basic').type("testwrognmail")
    cy.get('.MuiButtonBase-root').click()
    //validate error message
    cy.get('#outlined-basic-helper-text')      
   
   
})

it (" Invalid email KSA Login test" , ()=>{

    // open website
    cy.visit('https://homzmart.sa/')
    //click user menu
    cy.get('.userMenu__handle')
      .click()
    // click sign in
    cy.get('.signIn__btn > .hz-button-icon-wrapper > .button-with-icon')
      .click()
    // ener invalid email
    cy.get('#outlined-basic').type("testwrognmail")
    cy.get('.MuiButtonBase-root').click()
    //validate error message
    cy.get('#outlined-basic-helper-text')      
   
   
})

it (" Invalid password EG Login test" , ()=>{

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
    // Close popup if it appears
  cy.wait(5000)
  cy.handlePopup();
    //enter invalid password
    cy.get('.base-password-input_BasePasswordInput__mMDxt > .MuiInputBase-root > #outlined-basic')
      .type("123456798798")
    cy.get('.MuiButton-root').click()
    // validate error message
    cy.get('.GlobalToaster_toaster_content__wreXd')
      
   
})

it (" Invalid password KSA Login test" , ()=>{

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
    //enter invalid password
    cy.get('.base-password-input_BasePasswordInput__mMDxt > .MuiInputBase-root > #outlined-basic')
      .type("56446464564")
    cy.get('.MuiButton-root').click()
    // validate error message
    cy.get('.GlobalToaster_toaster_content__wreXd')
      
   
})