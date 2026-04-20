import { ContactUsPage } from './ContactUsPage';

export class HomePage {
    constructor(page) {
        this.page = page;
        this.selectors = {
             signupLoginLink: page.getByRole('link', { name: 'Signup / Login' }),
             homePageLink: page.getByRole('link', {name: 'Home'}),
             homePageHightLight: page.locator('xpath=(//a[contains(@style, "color: orange")])'),
             contactUsLink: page.getByRole('link', {name: ' Contact us'}),
             productspageLink: page.getByRole('link', {name: ' Products'})

        };
    }

    async goto() {
    await this.page.goto('http://automationexercise.com');
  }

  async clickHomePageLink() {
  await this.selectors.homePageLink.click();
  }

  async openSignupLogin() {
    await this.selectors.signupLoginLink.click();
  } 


  async clickContactUs() {
    await this.selectors.contactUsLink.click();
  }

  async clickProducts() { 
    await this.selectors.productspageLink.click();
  }

}