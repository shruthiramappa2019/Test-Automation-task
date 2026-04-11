import { test, expect } from '@playwright/test';
import LoginPage from '../src/login.page.js';
import testCases from '../test-data/login.testdata.json' with { type: 'json' };


testCases.forEach(({ name, email, password, type }) => {

    test(name, async ({ page }) => {
        const loginPage = new LoginPage(page);

        console.log(`\nSTART TEST: ${name}`);

        console.log("Step1: Open Login page")
        await loginPage.open();

        console.log('Step 2: Enter credentials and login');
        await loginPage.login(email, password);

        console.log('Step 3: Verify URL');
        await expect(page).toHaveURL(/lift-dev.training/);


        if (type === 'success') {

            console.log('Step 4: Verify successful login');
            await expect(page.getByRole('link', { name: 'Home' }))
                .toBeVisible({ timeout: 5000 });
            console.log('Step5: UI is shown within 5 seconds.');


        } else if (type === 'invalid') {

            console.log('Step 4: Verify error message');
            await expect(page.getByText('Invalid username or password'))
                .toBeVisible();

        } else if (type === 'empty') {

            console.log('Step 4: Verify login with empty credentials');
            await expect(page.getByRole('link', { name: 'Home' }))
                .not.toBeVisible();
        }
        console.log(`END TEST: ${name}\n`);
    });

});
