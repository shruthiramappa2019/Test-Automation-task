import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

import LoginPage from '../src/login.page.js';
import UsersPage from '../src/users.page.js';
import testData from '../test-data/users.testdata.json' with { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('Bulk upload the users from the file', async ({ page }) => {

    test.setTimeout(120000);

    const loginPage = new LoginPage(page);
    const usersPage = new UsersPage(page);

    const { email, password } = testData.validUser;

    await loginPage.open();
    await loginPage.login(email, password);

    await usersPage.openUsersPage();

    console.log("Step 1: Navigate to Bulk Upload");
    await usersPage.openBulkUpload();
    const filePath = path.resolve(__dirname, '../test-data/users.csv');

    console.log("Step 2: Starting the Bulk Upload");
    await usersPage.uploadBulkUsers(filePath);

    await expect(page.getByText('Bulk import complete')).toBeVisible({ timeout: 10000 });
    await expect(page.getByRole('heading', { name: 'Users', exact: true })).toBeVisible();
    console.log("Step 3: Bulk upload Completed");

});