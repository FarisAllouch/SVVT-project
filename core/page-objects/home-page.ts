import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";


export class HomePage extends BasePage {
    private allElements = By.css('*');
    private title = By.className("_title_1t7ue_14");
    private menbutton = By.className('_flyout_link_6lau5_4 _highlighted_6lau5_34');
    private shopbutton = By.className("gl-cta gl-cta--primary gl-cta--primary-light");
    private cartbutton = By.className("_cart_oakeh_1");
    private logo = By.className("_logo_1lkce_1");
    private rightslider= By.className("gl-cta gl-cta--icon gl-carousel__prev-next-button gl-carousel__prev-next-button--next");
   
    constructor(driver: WebDriver) {
        super(driver);
    }
    // async navigateToCarerButton() {
    //     await this.hoverElement(await this.findElement(this.carrers));
    // }
    // async clickJobsButton(){
    //     await this.findElementAndClick(this.jobs);
    // }

    //Check the layout for any visual discrepancies.
    async checkIfMatch() {
        await this.checkMatchingElements(this.title,"Popular right now");
    }

    async checkIfMatchMen() {
        await this.checkMatchingElements(this.menbutton, "MEN")
    }
    
    async checkAllElements() {
       await this.findElement(this.allElements)
    }

    async CheckFeatures() {
       await this.findElementAndClick(this.logo);
    }
}
