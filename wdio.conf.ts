export const config: WebdriverIO.Config = {
    runner: 'local',
    specs: ['./test/specs/**/*.ts'],
    maxInstances: 1,
    logLevel: 'info',
    framework: 'mocha',
    reporters: ['spec'],

    hostname: '127.0.0.1',
    port: 4723,
    path: '/',

    capabilities: [
        {
            platformName: 'Android',
            'appium:automationName': 'UiAutomator2',
            'appium:deviceName': 'Android Emulator',
            'appium:appPackage': 'com.example.qatakehome',
            'appium:appActivity': 'com.example.qatakehome.MainActivity'
        }
    ],

    services: ['appium'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    }
};