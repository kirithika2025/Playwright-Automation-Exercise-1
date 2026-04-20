
  
export class LoginHelper {

 

    constructor(page) {
        this.page = page;
        this.name = page.locator('input[name="name"]');
        this.email = page.locator('input[data-qa="signup-email"]');
        this.regPassword = page.locator('input[id="password"]');
        this.loginEmailInput = page.locator('input[data-qa="login-email"]');
        this.loginEmailPassword = page.locator('input[data-qa="login-password"]');
       
    }



  async startLogin(email, password){
  await this.loginEmailInput.fill(email);
  await this.loginEmailPassword.fill(password);
  await this.page.getByRole('button', { name: 'Login' }).click();
}

async logout() {
  await this.page.locator('a:has-text("Logout")').click();
}


  get nameInput() { return this.name; }
  get emailInput() { return this.email; }
  get passwordInput() { return this.regPassword; }

  // Setters as fill actions
  async setName(name) { await this.name.fill(name); }
  async setEmail(email) { await this.email.fill(email); }
  async setPassword(password) { await this.regPassword.fill(password); }
  
  

}