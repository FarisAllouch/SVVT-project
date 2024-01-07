import { Builder, WebDriver } from "selenium-webdriver";
import { readFileSync } from "fs";
import * as path from "path";
import { createDriverEdge, quitDriver } from "../core/config/driveredge-setup";
import { EdgePage } from "../core/page-objects/various-browser";

const dataFilePath=path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver:WebDriver;
let edgePage:EdgePage;

beforeAll(async() => {
    driver=await createDriverEdge(testData.url.homePage);
    edgePage=new EdgePage(driver);
},10000)

test("Edge testing", async () => {
    await edgePage.CheckFeatures();
},30000)

afterAll(async () => {
    await quitDriver(driver);
},10000);