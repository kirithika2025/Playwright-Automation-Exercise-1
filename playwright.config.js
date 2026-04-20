// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  expect : {
    timeout: 40*1000
  },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Register',
      testMatch: 'RegisterUser.spec.js',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Login',
      testMatch: 'LoginUser.spec.js',
      use: { ...devices['Desktop Safari'] },
      dependencies: ['Register'],
    },
    {
      name: 'Contact Us',
      testMatch: 'ContactUs.spec.js',
      use: { ...devices['Desktop Safari'] },
    },
   {
      name: 'Products',
      testMatch: 'Products.spec.js',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'webkit',
      testIgnore: ['**/RegisterUser.spec.js', '**/LoginUser.spec.js', '**/ContactUs.spec.js', '**/Products.spec.js'],
      use: { ...devices['Desktop Safari'] },
    },

    
  ],

  
});

