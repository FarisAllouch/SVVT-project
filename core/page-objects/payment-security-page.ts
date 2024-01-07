import BasePage from "./base-page"
import {WebDriver, By} from "selenium-webdriver";

export class PaymentSecurityPage extends BasePage { 
    private searchbar = By.className("_input_1f3oz_13");
    private essentialsfleece_link = By.xpath('//a[@href="https://www.adidas.com/us/search?q=essentials+fleece&sitePath=us"]');
    private essentialitem_link = By.xpath('//a[@href="https://www.adidas.com/us/essentials-fleece-3-stripes-full-zip-hoodie/IJ6480.html"]');
    private size = By.xpath('//*[@id="main-content"]/div[2]/div[2]/section/div[1]/div[2]/button[2]');
    private addbutton = By.className("add-to-bag___1vbiU gl-vspace-bpall-medium");
    private ViewBagBtt = By.className("gl-cta gl-cta--secondary gl-cta--full-width gl-vspace");
    private checkoutBtt = By.className("gl-cta gl-cta--primary gl-cta--full-width");
    private firstnameInput = By.id("shippingAddress-firstName");
    private lastnameInput = By.id("shippingAddress-lastName");
    private adressInput = By.id("inline-search-input");
    private phoneInput = By.id("shippingAddress-lastNumber");
    private adressConfirm = By.className("search-results__item___upni8");
    private nextbutton = By.className("gl-cta gl-cta--primary");
    private cardpay = By.xpath('//*[@id="app"]/div/div[1]/div[1]/div/div/div[1]/div/div[2]/div/main/div/div[4]/div[2]/div[2]/div/div[1]/div/div[3]/div[1]/div[1]/div[1]');
    private cardNumberInput = By.name("card.number");
    private cardCvv = By.name("card.cvv");
    private expirydate = By.className("wpwl-control wpwl-control-expiry gl-input__field");
    private placeorder = By.className("gl-cta gl-cta--primary gl-cta--full-width order-button___RGjQK gl-vspace-bpall-medium");

    constructor(driver:WebDriver){
        super(driver);
    }

    async fillSearchbar() {
        await this.fillInputField(this.searchbar, "Essentials Fleece");
     }
 
     async ClickOnResulted() {
        await this.findElementAndClick(this.essentialsfleece_link);
     }

    async selectProduct() {
        await this.findElementAndClick(this.essentialitem_link);
    }

    async selectSize() {
        await this.findElementAndClick(this.size);
    }

    async clickOnAdd() {
        await this.findElementAndClick(this.addbutton);
    }

    async clickOnView() {
        await this.findElementAndClick(this.ViewBagBtt);
    }

    async ClickOnCheckout() {
        await this.findElementAndClick(this.checkoutBtt);
    }

    async fillInputs() {
        await this.fillInputField(this.firstnameInput, "Faris")
        await this.fillInputField(this.lastnameInput, "Allouch")
        await this.fillInputField(this.phoneInput, "(662) 388-5539")
    }

    async fillAdressInput() {
        await this.fillInputField(this.adressInput, "500 Daniels Ct")
        await this.findElementAndClick(this.adressConfirm);
    }

    async clickOnNext() {
        await this.findElementAndClick(this.nextbutton);
    }

    async clickOnNextPayment() {
        await this.findElementAndClick(this.nextbutton);
    }

    async clickOnCardPayment() {
        await this.findElementAndClick(this.cardpay);
    }

    async fillpaymentinputs() {
        await this.fillInputField(this.cardNumberInput, "1111 1111 1111 1111");
        await this.fillInputField(this.expirydate, "1126");
        await this.fillInputField(this.cardCvv, "9312");
        
    }
    
    async clickOnPlaceOrder() {
        await this.findElementAndClick(this.placeorder);
    }
    
}