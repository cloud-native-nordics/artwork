#!/usr/bin/env node

const url = require('url');
const puppeteer = require('puppeteer');

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport({
    width: 3840,
    height: 2160
  });
  await page.goto(`${url.pathToFileURL('background/index.html')}`);
  await timeout(1000);
  await page.screenshot({ path: `${process.env.LOCATION}.png` });

  await browser.close();
})();
