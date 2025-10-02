import { remote } from "webdriverio"

const capabilities = {
    platformName: "Android",
    "appium:options": {
        "automationName": "UiAutomator2",
        "deviceName": "Android",
        "appPackage": "com.android.settings",
        "appActivity": ".Settings"
    }
};

const wdOpts = {
    hostname: process.env.APPIUM_HOST || "localhost",
    port: parseInt(process.env.APPIUM_PORT || "4723", 10),
    logLevel: "info" as const,
    capabilities,
};

async function runTest() {
    const driver = await remote(wdOpts);

    try {
        const batteryItem = driver.$('//*[@text="Apps"]');
        await batteryItem.click();
    } finally {
        await driver.pause(1000);
        await driver.deleteSession();
    }
}

runTest().catch(console.error)