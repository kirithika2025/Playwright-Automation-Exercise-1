import { test,expect } from '@playwright/test';
import { LoginHelper } from '../pageobjects/Helpers/LoginHelper.js';
import { HomePage } from '../pageobjects/HomePage.js';
const { loginUser } = require('./testData.js');
let loginHelper;
test('Login User', async({page}) => {
  await login(page);    
  await loginHelper.startLogin(loginUser.email,loginUser.passwordVal);
  await expect(page.locator('a:has-text("Logged in as")')).toBeVisible();
  await expect(page.locator('a:has-text("Logged in as")')).toContainText(loginUser.name);
})

test('Invalid Login User', async({page}) => {
   await login(page);    
   await loginHelper.startLogin("example@gmail.com","example");
   await expect(page.locator('p:has-text("Your email or password is incorrect!")')).toBeVisible();
})

test('Logout',async({page}) => {
  await login(page);
  await loginHelper.startLogin(loginUser.email,loginUser.passwordVal);
  await expect(page.locator('a:has-text("Logged in as")')).toBeVisible();
  await expect(page.locator('a:has-text("Logged in as")')).toContainText(loginUser.name);
  await loginHelper.logout();
  await expect(page.locator('h2:has-text("Login to your account")')).toBeVisible();
})


async function login(page) {
  loginHelper = new LoginHelper(page);
  const homePage = new HomePage(page);
    
  await homePage.goto();
  await expect(homePage.selectors.signupLoginLink).toBeVisible();

  await homePage.openSignupLogin();
  await expect(page.locator('text=Login to your account')).toBeVisible();
  
}

