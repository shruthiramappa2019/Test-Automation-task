import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 0 : 0,
  workers: process.env.CI ? 5 : undefined,

  use: {
    baseURL: 'https://lift-dev.training/',
    headless: true,
    browserName: 'chromium',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  reporter: [['html', { open: 'never' }]],


});