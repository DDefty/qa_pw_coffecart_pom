import { test, expect } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';

test('Espresso correctly added to the Cart', async ({ page }) => {
  // await page.goto('https://coffee-cart.app/');
  // await page.getByTestId('Espresso').click();
  // await page.getByLabel('Cart page').click();
  // await page.waitForURL('https://coffee-cart.app/cart');

  // const cartListLocator = page.getByRole('list').nth(1);
  // const espressoItem = cartListLocator.getByRole('listitem').filter({
  //   hasText: 'Espresso',
  // });
  // const espressoNameLocator = espressoItem.locator('div').nth(0);
  // const espressoUnitLocator = espressoItem.locator('div').nth(1);
  // const espressoTotalCostLocator = espressoItem.locator('div').nth(3);

  // await expect(espressoNameLocator).toContainText('Espresso');
  // await expect(espressoUnitLocator).toContainText('$10.00 x 1');
  // await expect(espressoTotalCostLocator).toContainText('$10.00');

  const menuPage = new MenuPage(page);
  const cartPage = new CartPage(page);

  await menuPage.open();
  await menuPage.clickEspresso();
  await menuPage.openCartPage();
  await cartPage.cartPageIsOpen();

  await cartPage.assertEspressoName('Espresso');
  await cartPage.assertEspressoUnit('$10.00 x 1');
  await cartPage.assertEspressoCost('$10.00');
});
