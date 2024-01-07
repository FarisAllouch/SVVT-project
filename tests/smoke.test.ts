import { Builder, WebDriver } from "selenium-webdriver";
import { readFileSync } from "fs";
import * as path from "path";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { Smoke } from "../core/page-objects/smoke";

const dataFilePath=path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver:WebDriver;
let smoke:Smoke;

beforeAll(async() => {
    driver=await createDriver(testData.url.homePage);
    smoke=new Smoke(driver);
},10000)

test("Smoke test", async () => {
   await smoke.fillSearchbar();
   await smoke.ClickOnResulted();
   await smoke.selectProduct();
   await smoke.selectSize();
   await smoke.clickOnAdd();
   await smoke.clickOnView();
   await smoke.ClickOnCheckout();
   await smoke.fillInputs();
   await smoke.fillAdressInput();
   await smoke.clickOnNext();
   await smoke.clickOnNextPayment();
   await smoke.clickOnCardPayment();
   await smoke.fillpaymentinputs();
   await smoke.clickOnPlaceOrder();
},30000)

afterAll(async () => {
    await quitDriver(driver);
},10000);