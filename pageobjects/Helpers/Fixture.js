import { test as base, expect } from '@playwright/test';
import { RegisterPage } from '../RegisterPage.js';
import { LoginHelper } from './LoginHelper.js';
import { ContactUsPage } from '../ContactUsPage.js';
import { ProductsPage } from '../ProductsPage.js';
import { HomePage } from '../HomePage.js';

/**
 * @typedef {Object} CustomFixtures
 * @property {RegisterPage} reg
 * @property {LoginHelper} loginHelper
 * @property {ContactUsPage} contactUsPage
 * @property {ProductsPage} productsPage
 * @property {HomePage} homePage
 */

/** @type {import('@playwright/test').TestType<import('@playwright/test').PlaywrightTestArgs & import('@playwright/test').PlaywrightTestOptions & CustomFixtures, import('@playwright/test').PlaywrightWorkerArgs & import('@playwright/test').PlaywrightWorkerOptions>} */


export const test = base.extend({
  reg: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  loginHelper: async ({ page }, use) => {
    await use(new LoginHelper(page));
  },
  contactUsPage: async ({ page }, use) => {
    await use(new ContactUsPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  homePage: async ({page}, use) => {
    await use(new HomePage(page));
  }
});

export { expect };