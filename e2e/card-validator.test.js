import puppeteer from 'puppeteer';

describe('Card validator E2E', () => {

    let browser;
    let page;

    beforeEach(async () => {

        browser = await puppeteer.launch({
            headless: false,
            slowMo: 100,
        });

        page = await browser.newPage();

    });


    afterEach(async () => {

        await browser.close();

    });


    test('page is displayed', async () => {

        await page.goto('http://localhost:9000');

        await page.waitForSelector('body');

    });

});