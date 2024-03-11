const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://uadreams.com');
  const pageTitle = await page.title();
  console.log('Page title is:', pageTitle);

  await expect(page).toHaveURL('https://www.uadreams.com/login/');
  await expect(page).toHaveTitle(
    'Ukrainian Dating Service and Single Ladies for Marriage at UADreams.com'
  );

  //chaeck main login block
  const mainblock = page.locator(
    '//div[@class="without-paddings site-main-wrap container transparent login"]'
  );
  await expect(mainblock).toHaveClass(
    'without-paddings site-main-wrap container transparent login'
  );
  await page.close();
});
