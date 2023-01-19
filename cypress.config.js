const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "reporter": "cypress-multi-reporters",
    "reporterOptions": {
        "reporterEnabled": "mochawesome",
        "mochawesomeReporterOptions": {
            "reportDir": "cypress/reports/mocha",
            "quite": true,
            "overwrite": true,
            "html": true,
            "json": true
        }
    },
  e2e: {
    baseUrl: "http://localhost:3000",
    projectId: "q3wy8g",
    viewportHeight: 720,
    viewportWidth: 1280,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    excludeSpecPattern: ['*.js', '*.md'],
    specPattern: 'cypress/integration/**/*.{jsx,ts,tsx,feature}',
  },
});
