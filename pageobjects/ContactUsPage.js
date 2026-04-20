const path = require('path');
export class ContactUsPage {
    constructor(page) {
        this.page = page;
        this.selectors = {
            contactUsPageText : page.getByText('Get In Touch'),
            name: page.locator('input[name="name"]'),
            email: page.locator('input[data-qa="email"]'),
            subject: page.locator('input[data-qa="subject"]'),
            message: page.getByPlaceholder('Your Message Here'),
            file: page.locator('input[type="file"]'),
            submit: page.getByRole('button',{ name: 'Submit'}),
            successmsg: page.locator('.status.alert.alert-success')
        }
    }

    async setName(name) {
        await this.selectors.name.fill(name);
    }

    async setEmail(email) {
        await this.selectors.email.fill(email);
    }

    async setSubject(subject) {
       await this.selectors.subject.fill(subject);
    }

    async setMessage(message) {
        await this.selectors.message.fill(message);
    }

    async getSubject() {
        return this.subject;
    }

    async getMessage() {
        return this.message;
    }

    async clickUploadFile(file) {
       
        await this.selectors.file.click();
        await this.selectors.file.setInputFiles(file);
    }

    async clickSubmit() {
        await this.selectors.submit.click();
      
    }

}