import { Builder, WebDriver } from "selenium-webdriver";
import { readFileSync } from "fs";
import * as path from "path";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { SearchPage } from "../core/page-objects/search-page";


const dataFilePath=path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver:WebDriver;
let searchPage:SearchPage;

beforeAll(async() => {
    driver=await createDriver(testData.url.homePage);
    searchPage=new SearchPage(driver);
},10000)

test("Product Search Realibility", async () => {
    await searchPage.fillSearchbar();
    await searchPage.ClickOnResulted();
    await searchPage.ClickOnFilter();
    await searchPage.ClickOnMan();
    await searchPage.ClickOnSort();
    await searchPage.ClickOnLowSort();
    await searchPage.CheckSearchResult();
    await searchPage.CheckFilterResult();
},30000)

afterAll(async () => {
    await quitDriver(driver);
},10000);