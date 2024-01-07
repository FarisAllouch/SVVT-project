import { Builder, WebDriver } from "selenium-webdriver";
import * as edge from "selenium-webdriver/edge";

let driver;

export async function createDriverEdge(url : string) { 
    const edgeOptions = new edge.Options();
    driver = await new Builder().forBrowser("MicrosoftEdge").setEdgeOptions(edgeOptions).build();
    await driver.get(url);
    await driver.manage().window().maximize();
    await driver.manage().setTimeouts({ implicit: 15000 });
    return driver;
}

export async function quitDriver(driver: WebDriver) {
    await driver.quit();
}
