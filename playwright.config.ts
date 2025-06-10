import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://naveenautomationlabs.com',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        headless: false
       },
    },
    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari'],
        headless: false
       },
    },{
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],
        headless: false
       },
    },

  ]
});
