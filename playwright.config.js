const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium', headless: false }
        },
        {
            name: 'firefox',
            use: { browserName: 'firefox', headless: false }
        }
    ],
    reporter: [['html', { outputFolder: 'test-results' }]]
});
