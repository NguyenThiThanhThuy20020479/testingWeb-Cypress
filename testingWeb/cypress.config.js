const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'v1p2nd',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
