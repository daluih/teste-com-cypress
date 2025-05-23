const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2q785b',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
