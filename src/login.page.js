import { expect } from '@playwright/test';
class LoginPage {
    constructor(page) {
        this.page = page;

    }

    async open() {
        await this.page.goto('/');
        await expect(this.page.getByRole('button', { name: /sign in|log in|login/i })).toBeVisible();
    }

    async login(username, password) {
        await this.page.getByRole('textbox', { name: 'Username or email address' }).fill(username);
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
        await this.page.getByRole('button', { name: 'Sign in' }).click();
    }
}

export default LoginPage;
