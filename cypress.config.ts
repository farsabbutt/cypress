import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: ['./cypress/e2e/own/*.*'],
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
