import { Builder, WebDriver } from "selenium-webdriver";
import { readFileSync } from "fs";
import * as path from "path";
import { createDriver, quitDriver } from "../core/config/driver-setup";

const dataFilePath=path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver:WebDriver;

beforeAll(async() => {
    driver=await createDriver(testData.url.testPage);
},10000)

test("Checkout Flow", async () => {
  
},30000)


afterAll(async () => {
    await quitDriver(driver);
},10000);