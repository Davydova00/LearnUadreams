//https://www.youtube.com/watch?v=vib8f9PC6JI&list=PLUDwpEzHYYLsw33jpra65LIvX1nKWpp7-&index=4

const { test, expect } = require('@playwright/test');
test('LocatingMultipleElements', async ({ page }) => {
  await page.goto('https://www.uadreams.com');
  // const links = await page.$$('a');

  // for (const link of links) {
  //   const linktext = await link.textContent();
  //   console.log(linktext);
  // }
  page.waitForSelector(
    '//ul[@class="desktop-module__menu-list___LG+Vb"]//li//a'
  );
  const products = await page.$$(
    '//ul[@class="desktop-module__menu-list___LG+Vb"]//li//a'
  );

  for (const product of products) {
    const prodName = await product.textContent();
    console.log(prodName);
  }
});
