import { ContactUsPage } from '../pageobjects/ContactUsPage.js';
import {test,expect} from '../pageobjects/Helpers/Fixture.js'
const { HomePage } = require("../pageobjects/HomePage")
import { EXPECTED_TEXTS } from './testData.js';


test('Click First Product', async({page, productsPage, homePage}) => {

     await homePage.goto();
     await expect(homePage.selectors.homePageHightLight).toContainText(EXPECTED_TEXTS.HOME_TITLE, { timeout: 10_000 });
     
     await homePage.clickProducts();

     
     if(await productsPage.selectors.ad.isVisible()) {
      await productsPage.closead();
     }
     await expect(productsPage.selectors.allProducts).toContainText(EXPECTED_TEXTS.PRODUCTS_TITLE);
     await expect(productsPage.selectors.category).toContainText(EXPECTED_TEXTS.CATEGORY);
     
    await productsPage.clickfirstProduct();
    await page.waitForLoadState('domcontentloaded',  { timeout: 20000 });


}) 

test('Search and find product', async({page,productsPage,homePage}) => {
  await homePage.goto();
  await expect(homePage.selectors.homePageHightLight).toContainText(EXPECTED_TEXTS.HOME_TITLE);
  await homePage.clickProducts();
    if(await productsPage.selectors.ad.isVisible()) {
      await productsPage.closead();
     }
  await expect(productsPage.selectors.allProducts).toContainText(EXPECTED_TEXTS.PRODUCTS_TITLE);
  let searchText = 'Sleeveless';
  await productsPage.clickAndTypeSearch(searchText);
  
  await expect(productsPage.selectors.searchBox).toHaveValue(searchText);
})