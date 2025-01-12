const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalInteractiveRunEvents: true,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/step_definitions/*.feature",
    env: {
      baseURL_API: 'https://www.advantageonlineshopping.com/catalog/api/v1',
      baseURL_WEB: 'https://advantageonlineshopping.com/'
    }
  },
});