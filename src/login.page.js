class LoginPage {
    constructor(page) {
        this.page = page;

    }

    async open() {
        await this.page.goto('/');
    }

        async login(username, password) {
        await this.page.getByRole('textbox', { name: 'Username or email address' }).fill(username);
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
        await this.page.getByRole('button', { name: 'Sign in' }).click();
    }
}

export default LoginPage;
