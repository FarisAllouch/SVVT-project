import BasePage from "./base-page"
import {WebDriver, By} from "selenium-webdriver";

export class AccountPage extends BasePage {
    private userbutton = By.className("_user_icon_1rn26_1");
    private emailinput = By.name("email");
    private continuebutton = By.className("gl-cta gl-cta--primary gl-vspace-bpall-small");
    private passwordinput = By.name("password");
    private signin = By.className("gl-cta gl-cta--primary gl-vspace-bpall-small");

    constructor(driver:WebDriver) {
        super(driver);
    }

    async clickOnUserButton() {
        await this.findElementAndClick(this.userbutton);
    }

    async fillemailinput() {
        await this.fillInputField(this.emailinput, "farisallouch56@gmail.com")
    }

    async clickOnContinue() {
        await this.findElementAndClick(this.continuebutton);
    }
    
    async fillpassinput() {
        await this.fillInputField(this.passwordinput, "Random2002!")
    }

    async signIn() {
        await this.findElementAndClick(this.signin);
    }
}