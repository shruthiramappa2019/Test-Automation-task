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
        const fileInput = this.page.locator('input[type="file"]');
        await fileInput.setInputFiles(filePath);

        await this.page.getByRole('button', { name: 'Looks good, continue' }).click();
        await expect(this.page.getByText('Bulk creating users')).toBeVisible({
            timeout: 400000
        });
        const viewUsersBtn = this.page.getByRole('button', {
            name: /view users list/i
        });

        await expect(viewUsersBtn).toBeVisible({ timeout: 400000 });
        await expect(viewUsersBtn).toBeEnabled({ timeout: 400000 });

        await viewUsersBtn.click();

        await this.page.getByRole('link', { name: 'Users' }).click();
    }
}

export default UsersPage;