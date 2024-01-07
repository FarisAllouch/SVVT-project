import { Builder, WebDriver } from "selenium-webdriver";
import { readFileSync } from "fs";
import * as path from "path";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { AccountPage } from "../core/page-objects/account-page";


const dataFilePath=path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver:WebDriver;
let accountPage:AccountPage;

beforeAll(async() => {
    driver=await createDriver(testData.url.homePage);
    accountPage=new AccountPage(driver);
},10000)

test("Checkout Flow", async () => {
    await accountPage.clickOnUserButton();
    await accountPage.fillemailinput();
    await accountPage.clickOnContinue();
    await accountPage.fillpassinput();
    await accountPage.signIn();
},30000)

afterAll(async () => {
    await quitDriver(driver);
},10000);