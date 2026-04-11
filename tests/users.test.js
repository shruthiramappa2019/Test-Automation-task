import { test } from '@playwright/test';
import LoginPage from '../src/login.page.js';
import UsersPage from '../src/users.page.js';
import testData from '../test-data/users.testdata.json' with { type: 'json' };

test('It is possible to show the list of users', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const usersPage = new UsersPage(page);

    const { email, password } = testData.validUser;


    await loginPage.open();
    await loginPage.login(email, password);

    await usersPage.openUsersPage();
    await usersPage.verifyUsersTable();

});