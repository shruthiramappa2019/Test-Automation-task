import { expect } from '@playwright/test';

class UsersPage {
    constructor(page) {
        this.page = page;
    }

    async openUsersPage() {
        await this.page.getByRole('link', { name: /User management/i }).click();
    }

    async verifyUsersTable() {
        await expect(this.page.getByRole('table')).toBeVisible();
    }
}

export default UsersPage;
