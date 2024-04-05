const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "cypress/reports/html",
    reportFilename: "[status]_[datetime]-[name]-report",
    timestamp: "isoDateTime",
    reportPassed: true,
    overwrite: false,
    reportPageTitle: 'Automated tests',
    embeddedScreenshots: true,
    inlineAssets: true
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // require('cypress-mochawesome-reporter/plugin')(on)
    },
    baseUrl: "https://ecommerce-playground.lambdatest.io"
  },
});
