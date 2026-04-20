

export class RegisterPage {
  /** @param {import('@playwright/test').Page} page */
  
  constructor(page) {
    this.page = page;
    this.name = page.locator('input[name="name"]');
    this.email = page.locator('input[data-qa="signup-email"]');
    this.regPassword = page.locator('input[id="password"]');
   
    this.selectors = {

      signupButton: page.getByRole('button', { name: 'Signup' }),
      enterAccountInfoHeading: page.locator('text=ENTER ACCOUNT INFORMATION'),
      titleMr: page.locator('input#id_gender1'),
      titleMrs: page.locator('input#id_gender2'),
      daysSelect: page.locator('select#days'),
      monthsSelect: page.locator('select#months'),
      yearsSelect: page.locator('select#years'),
      newsletterCheckbox: page.locator('input#newsletter'),
      offersCheckbox: page.locator('input#optin'),
      firstNameInput: page.locator('input[name="first_name"]'),
      lastNameInput: page.locator('input[name="last_name"]'),
      companyInput: page.locator('input[name="company"]'),
      address1Input: page.locator('input[name="address1"]'),
      address2Input: page.locator('input[name="address2"]'),
      countrySelect: page.locator('select[name="country"]'),
      stateInput: page.locator('input[name="state"]'),
      cityInput: page.locator('input[name="city"]'),
      zipcodeInput: page.locator('input[name="zipcode"]'),
      mobileNumberInput: page.locator('input[name="mobile_number"]'),
      createAccountButton: page.getByRole('button', { name: 'Create Account' }),
      accountCreatedHeading: page.locator('text=ACCOUNT CREATED!'),
      continueButton: page.getByRole('link', { name: 'Continue' }),
      loggedInAs: page.locator('text=Logged in as'),
      deleteAccountLink: page.getByRole('link', { name: ' Delete Account' }),
      accountDeletedHeading: page.locator('text=ACCOUNT DELETED!')
    };
  }

    get nameInput() { return this.name; }
  get emailInput() { return this.email; }
  get passwordInput() { return this.regPassword; }


  // Setters as fill actions
  async setName(name) { await this.name.fill(name); }
  async setEmail(email) { await this.email.fill(email); }
  async setPassword(password) { await this.regPassword.fill(password); }
  

  async startSignup(user) {
    
    await this.setName(user.name);
    await this.setEmail(user.email);
    await this.selectors.signupButton.click();
  }

  async fillAccountInformation({ title = 'Mr', password='',dob = { day: '1', month: 'January', year: '1990' } } = {}) {
    if (title === 'Mr') await this.selectors.titleMr.check();
    else await this.selectors.titleMrs.check();
    await console.log(password);
    await this.setPassword(password);
    await this.selectors.daysSelect.selectOption(dob.day);
    await this.selectors.monthsSelect.selectOption({ label: dob.month });
    await this.selectors.yearsSelect.selectOption(dob.year);
    await this.selectors.newsletterCheckbox.check();
    await this.selectors.offersCheckbox.check();
  }

  async fillAddressDetails(details) {
    await this.selectors.firstNameInput.fill(details.firstName);
    await this.selectors.lastNameInput.fill(details.lastName);
    await this.selectors.companyInput.fill(details.company);
    await this.selectors.address1Input.fill(details.address1);
    await this.selectors.address2Input.fill(details.address2);
    await this.selectors.countrySelect.selectOption({ label: details.country });
    await this.selectors.stateInput.fill(details.state);
    await this.selectors.cityInput.fill(details.city);
    await this.selectors.zipcodeInput.fill(details.zipcode);
    await this.selectors.mobileNumberInput.fill(details.mobileNumber);
  }

  async createAccount() {
    await this.selectors.createAccountButton.click();
  }

  async continueAfterCreateOrDelete() {
    await this.selectors.continueButton.click();
  }

  async deleteAccount() {
    await this.selectors.deleteAccountLink.click();
  }
}
