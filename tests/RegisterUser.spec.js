// @ts-check
import { test , expect } from '../pageobjects/Helpers/Fixture.js';
import { LoginHelper } from '../pageobjects/Helpers/LoginHelper.js';
import { HomePage } from '../pageobjects/HomePage.js';
import { user,  createUniqueUser } from './testData.js';

let homePage;

test('Register User', async ({ page, reg }) => {
  
  homePage = new HomePage(page);
  await gotoHomePage(page,homePage);
  await openSignupLoginPage(page,homePage);

  
  // Fill signup form and submit
  await reg.startSignup(user);
   // Wait for account info section
  await expect(reg.selectors.enterAccountInfoHeading).toBeVisible();

  // Fill account information
  await reg.fillAccountInformation({
  title: 'Mr',
  password: user.passwordVal,         // ✅ password passed correctly
  dob: { day: '1', month: 'January', year: '1990' }
});

  // Fill address details
  await reg.fillAddressDetails({
    firstName: 'Test',
    lastName: 'User',
    company: 'ACME',
    address1: '123 Main St',
    address2: 'Suite 1',
    country: 'United States',
    state: 'CA',
    city: 'Los Angeles',
    zipcode: '90001',
    mobileNumber: '5551234567'
  });

  // Create account
  await reg.createAccount();
  await expect(reg.selectors.accountCreatedHeading).toBeVisible();
  // Continue to logged-in area
  await reg.continueAfterCreateOrDelete();
  await expect(reg.selectors.loggedInAs).toBeVisible();


});

test('Register same user', async ({ page, reg }) => {
    homePage = new HomePage(page);
  await gotoHomePage(page,homePage);
  await openSignupLoginPage(page,homePage);
  await reg.startSignup(user);
  await expect(page.locator('p:has-text("Email Address already exist!")')).toBeVisible();
});

test('Delete User', async({page,reg}) => {
  const loginHelper = new LoginHelper(page);
  homePage = new HomePage(page);
  await gotoHomePage(page,homePage);
  await openSignupLoginPage(page,homePage);

  await loginHelper.startLogin(user.email,user.passwordVal);
 
  await expect(reg.selectors.loggedInAs).toBeVisible();
    //Delete account and verify deletion
  await reg.deleteAccount();
  await expect(reg.selectors.accountDeletedHeading).toBeVisible();
  await reg.continueAfterCreateOrDelete(); 
  await expect(homePage.selectors.homePageLink).toBeVisible();
});

/**
 * @param {import('@playwright/test').Page} page
 * @param {import('../pageobjects/HomePage.js').HomePage} homePage
 * 
 */

async function gotoHomePage(page, homePage) {
  homePage = new HomePage(page);
   
  await homePage.goto();
  await expect(homePage.selectors.signupLoginLink).toBeVisible();

}
/**
 * @param {import('@playwright/test').Page} page
 * @param {import('../pageobjects/HomePage.js').HomePage} homePage
 * 
 */

async function openSignupLoginPage(page, homePage) {
  await homePage.openSignupLogin();
  await expect(page.locator('text=New User Signup!')).toBeVisible();
}
