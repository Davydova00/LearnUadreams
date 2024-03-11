// const { test, expect } = require('@playwright/test');


import { test, expect } from '@playwright/test';
import exp from 'constants';
test('Locator', async ({ page }) => {
  await page.goto('https://www.uadreams.com/login/');
  //click on login button - property
  // await page.locator('//button[@class="formAuth-module__btn___np9S0"]').click();
  await page.click('//button[@class="formAuth-module__btn___np9S0"]');

  //provide username
  await page.locator('//input[@name="login"]').fill('1466754');

  // await page.fill('#password_436553','123456');
  await page.locator('//input[@name="password"]').fill('123456');
  //input[@name='login']

  //click on login button
  await page.click('//button[@type="submit"]');
  const loginclient = await page.locator(
    '//ul[@class="desktop-module__menu-list___LG+Vb desktop-module__right-fragment___bz6XH"]'
  );
  await expect(loginclient).toBeVisible();
  await page.close();
});
