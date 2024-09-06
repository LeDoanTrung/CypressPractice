const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'x5ropg',
  env: {
    apiURL: "https://jsonplaceholder.typicode.com/posts"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here   
    },
    specPattern: "./cypress/tests/*/*",
    baseUrl: "https://www.demoblaze.com/",
    
  },
  reporter: 'mochawesome',
  defaultCommandTimeout: 10000
});
