import { test as base } from '@playwright/test';
import { RegisterPage } from '../pageobjects/RegisterPage.js';
import { LoginHelper } from '../pageobjects/Helpers/LoginHelper.js';

declare module '@playwright/test' {
  interface PageTestFixtures {
    reg: RegisterPage;
    loginHelper: LoginHelper;
  }
}