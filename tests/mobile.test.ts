import { Builder, WebDriver } from "selenium-webdriver";
import { readFileSync } from "fs";
import * as path from "path";
import { mobileDriver, quitDriver } from "../core/config/driver-mobile";
import { MobilePage } from "../core/page-objects/mobile-page";

const dataFilePath=path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver:WebDriver;
let mobilePage:MobilePage;

beforeAll(async() => {
    driver=await mobileDriver(testData.url.homePage);
    mobilePage=new MobilePage(driver);
},10000)

test("Edge testing", async () => {
    await mobilePage.CheckFeatures();
},30000)

afterAll(async () => {
    await quitDriver(driver);
},10000);