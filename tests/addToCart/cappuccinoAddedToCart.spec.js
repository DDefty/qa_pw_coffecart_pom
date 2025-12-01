import { test, expect } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';

test('Cappuccino correctly added to the Cart', async ({ page }) => {
  // await page.goto('https://coffee-cart.app/');
  // await page.getByTestId('Cappuccino').click();
  // await page.getByLabel('Cart page').click();
  // await page.waitForURL('https://coffee-cart.app/cart');

  // const cartListLocator = page.getByRole('list').nth(1);
  // const cappuccinoItem = cartListLocator.getByRole('listitem').filter({
  //   hasText: 'Cappuccino',
  // });
  // const cappuccinoNameLocator = cappuccinoItem.locator('div').nth(0);
  // const cappuccinoUnitLocator = cappuccinoItem.locator('div').nth(1);
  // const cappuccinoTotalCostLocator = cappuccinoItem.locator('div').nth(3);

  // await expect(cappuccinoNameLocator).toContainText('Cappuccino');
  // await expect(cappuccinoUnitLocator).toContainText('$19.00 x 1');
  // await expect(cappuccinoTotalCostLocator).toContainText('$19.00');

  const menuPage = new MenuPage(page);
  const cartPage = new CartPage(page);

  await menuPage.open();
  await menuPage.clickCappuctino();
  await menuPage.openCartPage();
  await cartPage.cartPageIsOpen();

  await cartPage.assertCappucinoName('Cappuccino');
  await cartPage.assertCappucinoUnit('$19.00 x 1');
  await cartPage.assertCappucinoCost('$19.00');


});
