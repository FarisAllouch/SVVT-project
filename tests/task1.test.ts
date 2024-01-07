import { HomePage } from "../core/page-objects/home-page";
import { Builder, WebDriver } from "selenium-webdriver";
import { readFileSync } from "fs";
import * as path from "path";
import { createDriver, quitDriver } from "../core/config/driver-setup";

const dataFilePath=path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver:WebDriver;
let homePage:HomePage;

beforeAll(async() => {
    driver=await createDriver(testData.url.homePage);
    homePage=new HomePage(driver);
},10000)

test("homepage constistency", async () => {
    await homePage.checkAllElements();
    await homePage.checkIfMatchMen();
    await homePage.checkIfMatch();
    await homePage.CheckFeatures();
},30000)

afterAll(async () => {
    await quitDriver(driver);
},10000);