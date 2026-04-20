const { HomePage } = require("../pageobjects/HomePage")
const { test, expect } = require("../pageobjects/Helpers/Fixture")
import { loginUser,EXPECTED_TEXTS } from './testData.js';

test('ContactUs Form', async({page,contactUsPage}) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(homePage.selectors.homePageHightLight).toContainText(EXPECTED_TEXTS.HOME_TITLE);
    await homePage.clickContactUs();
    await expect(contactUsPage.selectors.contactUsPageText).toBeVisible();

    await contactUsPage.setName(loginUser.name);
    
    await contactUsPage.setEmail(loginUser.email);
    await contactUsPage.setSubject('contact us');
    await contactUsPage.setMessage('This is contact Us form');
    
    page.once('dialog',dialog => {
       
        dialog.accept().catch(() => {});
    });
    await contactUsPage.clickSubmit();  
    const successtxt = contactUsPage.selectors.successmsg;
    const expecttxt = 'Success! Your details have been submitted successfully.';
    await expect(successtxt).toBeVisible();
    await expect(successtxt).toHaveText(expecttxt);
    await homePage.goto();
    await expect(homePage.selectors.homePageHightLight).toContainText(EXPECTED_TEXTS.HOME_TITLE); 
});
