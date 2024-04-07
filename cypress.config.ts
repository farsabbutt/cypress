import { defineConfig } from "cypress";

export default defineConfig({
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/reports/mocha",
    "overwrite": false,
    "html": false,
    "json": true
  },
  e2e: {
    baseUrl: "https://example.cypress.io",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('@cypress/code-coverage/task')(on, config)
      // include any other plugin code...

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return config
    },
  },
});
