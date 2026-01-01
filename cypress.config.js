const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    testIsolation: false,
     
       failOnStatusCode: false,
    baseUrl: process.env.BASE_URL,
    setupNodeEvents(on, config) {
      config.env.email = process.env.STAGING_EMAIL;
      config.env.password = process.env.STAGING_PASSWORD;
      return config;
    },
  },
});
