const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'x5ropg',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here   
    },
    specPattern: "./cypress/tests/*/*",
    baseUrl: "https://www.demoblaze.com/"
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true
  },
  defaultCommandTimeout: 10000
});
