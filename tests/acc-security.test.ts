import { Builder, WebDriver } from "selenium-webdriver";
import { readFileSync } from "fs";
import * as path from "path";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { PaymentSecurityPage } from "../core/page-objects/payment-security-page";

const dataFilePath=path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver:WebDriver;
let paymentSecurityPage:PaymentSecurityPage;

beforeAll(async() => {
    driver=await createDriver(testData.url.homePage);
    paymentSecurityPage=new PaymentSecurityPage(driver);
},10000)

test("Checkout Flow", async () => {
    await paymentSecurityPage.fillSearchbar();
    await paymentSecurityPage.ClickOnResulted();
    await paymentSecurityPage.selectProduct();
    await paymentSecurityPage.selectSize();
    await paymentSecurityPage.clickOnAdd();
    await paymentSecurityPage.clickOnView();
    await paymentSecurityPage.ClickOnCheckout();
    await paymentSecurityPage.fillInputs();
    await paymentSecurityPage.fillAdressInput();
    await paymentSecurityPage.clickOnNext();
    await paymentSecurityPage.clickOnNextPayment();
    await paymentSecurityPage.clickOnCardPayment();
    await paymentSecurityPage.fillpaymentinputs();
    await paymentSecurityPage.clickOnPlaceOrder();
},30000)

afterAll(async () => {
    await quitDriver(driver);
},10000);