const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl: 'hhtps://google.com'   lw 3aiz el url sabet
    experimentalStudio: true, 
    pageLoadTimeout: 120000
  },
});


require('@applitools/eyes-cypress')(module);
