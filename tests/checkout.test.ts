import { Builder, WebDriver } from "selenium-webdriver";
import { readFileSync } from "fs";
import * as path from "path";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { CheckoutPage } from "../core/page-objects/checkout-page";

const dataFilePath=path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver:WebDriver;
let checkoutPage:CheckoutPage;

beforeAll(async() => {
    driver=await createDriver(testData.url.homePage);
    checkoutPage=new CheckoutPage(driver);
},10000)

test("Checkout Flow", async () => {
    await checkoutPage.fillSearchbar();
    await checkoutPage.ClickOnResulted();
    await checkoutPage.selectProduct();
    await checkoutPage.selectSize();
    await checkoutPage.clickOnAdd();
    await checkoutPage.clickOnView();
    await checkoutPage.ClickOnCheckout();
    await checkoutPage.fillInputs();
    await checkoutPage.fillAdressInput();
    await checkoutPage.clickOnNext();
    await checkoutPage.clickOnNextPayment();
    await checkoutPage.clickOnCardPayment();
    await checkoutPage.fillpaymentinputs();
    await checkoutPage.clickOnPlaceOrder();
},30000)

afterAll(async () => {
    await quitDriver(driver);
},10000);