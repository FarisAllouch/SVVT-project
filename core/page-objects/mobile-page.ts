import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";

export class MobilePage extends BasePage {
    private logo = By.className("_logo_1lkce_1");

    constructor(driver: WebDriver) {
        super(driver);
    }

    async CheckFeatures() {
        await this.findElementAndClick(this.logo);
     }
}