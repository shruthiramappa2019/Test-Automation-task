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
    console.log("\nSTART TEST CASE 2 : Show Users List Test");
    await usersPage.openUsersPage();
    console.log("Step1: Showing the list of users")
    await usersPage.verifyUsersTable();
    console.log(`End Test: Showing the list of users`)

});