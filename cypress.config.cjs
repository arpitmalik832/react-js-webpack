/**
 * This file is used to configure Cypress.
 * @file The file is saved as `cypress.config.cjs`.
 */
const { defineConfig } = require('cypress');
const fs = require('fs');

module.exports = defineConfig({
  e2e: {
    video: true,
    setupNodeEvents(on, config) {
      on('after:spec', (spec, results) => {
        if (results && results.video) {
          // Do we have failures for any retry attempts?
          const failures = results.tests.some(test =>
            test.attempts.some(attempt => attempt.state === 'failed'),
          );
          if (!failures) {
            // delete the video if the spec passed and no tests retried
            fs.unlinkSync(results.video);
          }
        }
      });
    },
  },
});
