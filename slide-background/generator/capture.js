#!/usr/bin/env node

const url = require('url');
const puppeteer = require('puppeteer');

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  page.setViewport({
    width: 3840,
    height: 2160
  });
  await page.goto(`http://localhost`);
  await timeout(2000);
  await page.screenshot({ path: `screenshot.png` });

  await browser.close();
})();
