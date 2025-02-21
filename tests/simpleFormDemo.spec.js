const { test, expect } = require('@playwright/test');

test('Simple Form Demo Test', async ({ page }) => {
    
    // Navigate to Selenium Playground
    await page.goto('https://www.lambdatest.com/selenium-playground');

    // Click on "Simple Form Demo"
    await page.locator("text=Simple Form Demo").click();

    // Validate that the URL contains "simple-form-demo"
    await expect(page).toHaveURL(/simple-form-demo/);

    // Define the test message
    const testMessage = "Welcome to LambdaTest";

    // Enter the message
    await page.fill("#user-message", testMessage);

    // Click the "Get Checked Value" button
    await page.click("#showInput");

    // Validate the displayed message
    const displayedMessage = await page.textContent("#message");
    expect(displayedMessage).toBe(testMessage);

});
