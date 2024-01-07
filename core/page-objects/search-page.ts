import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";

export class SearchPage extends BasePage {
    private searchbar = By.className("_input_1f3oz_13");
    private essentialsfleece_link = By.xpath('//a[@href="https://www.adidas.com/us/search?q=essentials+fleece&sitePath=us"]'); 
    private genderfilter = By.xpath('//*[@id="filters-panel"]/div/div[2]');
    private menfilter = By.xpath('//*[@id="filters-panel"]/div/div[2]/div[2]/div/ul/li[1]/a')
    private sortby = By.className("gl-dropdown-custom__select label dropdown-select");
    private sortlow = By.id("gl-dropdown-custom__item--plp-sort-dropdown-2");
    private searchresult = By.className("gl-vspace heading___3g-L_ heading--search");
    private filterresult = By.className("item_inner___1tIKx atp-1697___NleTW");

    constructor(driver: WebDriver) {
        super(driver);
    }

    async fillSearchbar() {
       await this.fillInputField(this.searchbar, "Essentials Fleece");
    }

    async ClickOnResulted() {
       await this.findElementAndClick(this.essentialsfleece_link);
    }

    async ClickOnFilter() {
        await this.findElementAndClick(this.genderfilter);
    }

    async ClickOnMan() {
        await this.findElementAndClick(this.menfilter);
    }

    async ClickOnSort() {
        await this.findElementAndClick(this.sortby);
    }

    async ClickOnLowSort() {
        await this.findElementAndClick(this.sortlow);
    }

    async CheckSearchResult() {
        await this.checkMatchingElements(this.searchresult, "ESSENTIALS FLEECE");
    }

    async CheckFilterResult() {
        await this.checkMatchingElements(this.filterresult, "Women");
    }
}