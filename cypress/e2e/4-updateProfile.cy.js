it (" UPDATE KSA first name ensurring error handling" , ()=>{

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
    // validate succesfull login to homapage
    cy.get(':nth-child(4) > .category_item > a')
    .should('be.visible')
     //click user menu
    cy.get('.userMenu__handle')
      .click()
    // click my account
    cy.get('.menu__list > :nth-child(1) > :nth-child(1) > .userMenu__link')
      .click()
    // enter new invalid first name
    cy.get('[data-v-9ebf2ce9=""][placeholder="ادخل الاسم الاول"] > input')
      .type('djcsdhdsjkchsdjfhsdjfkhdskjfhshfsdjhfkjdshfkjdshfjdshkjdshfdshdjf')
    // see error message
    cy.get('.app-alert')
      .should('be.visible')
  
   
   
})

it (" UPDATE EG first name ensurring error handling" , ()=>{

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
     //click user menu
    cy.get('.userMenu__handle')
      .click()
    // click my account
    cy.get('.menu__list > :nth-child(1) > :nth-child(1) > .userMenu__link')
      .click()
    // enter new invalid first name
    cy.get('[data-v-9ebf2ce9=""][placeholder="ادخل الاسم الاول"] > input')
      .type('djcsdhdsjkchsdjfhsdjfkhdskjfhshfsdjhfkjdshfkjdshfjdshkjdshfdshdjf')
    // see error message
    cy.get('.app-alert')
      .should('be.visible')
  
   
   
})