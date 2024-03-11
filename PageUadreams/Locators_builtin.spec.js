/*---------------
page.getByAltText() - to locate an element, usually image, by its text alternative.
page.getByPlaceholder() - to locate an input by placeholder.
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.

page.getByLabel() to locate a form control by associated label's text.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

const { test, expect } = require('@playwright/test');
test('Built-inLocators', async ({ page }) => {
  await page.goto('https://www.uadreams.com/');
  const girl = await page.getByAltText('girl');
  await page.waitForTimeout(3000);
  await expect(girl).toBeVisible();
//page.getByPlaceholder()

  await page.getByPlaceholder('Enter Username or E-mail').fill('123456');

  //await page.getByRole()
  await page.getByRole('button', {type: 'submit'}).click();
  //page.getByText()
  await expect(await page.getByText('Best ukranian ladies')).toBeVisible()

  const name = await page.locator('//').textContent();
  await expect(await page.getByText(name)).toBeVisible();
});
