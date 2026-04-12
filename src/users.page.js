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

    async openBulkUpload() {
        await this.page.getByRole('link', { name: 'Bulk import' }).click();
        await this.page.getByRole('link', { name: 'Next' }).click();
        await this.page.getByTestId('RadioButtonOffIcon').click();
        await this.page.getByRole('button', { name: 'Next' }).click();
    }

    async uploadBulkUsers(filePath) {
        await this.page.getByRole('button', { name: 'Browse & upload' }).click();
        await this.page.setInputFiles('input[type="file"]', filePath);
        await this.page.getByRole('button', { name: 'Looks good, continue' }).click();

        await this.page.getByText('Bulk creating users').waitFor({ state: 'visible' });
        await this.page.getByText(/complete|success|done/i).waitFor({ state: 'visible' });

        await this.page.getByRole('button', { name: 'View users list' }).click();
        await this.page.getByRole('link', { name: 'Users' }).click();

    }
}

export default UsersPage;