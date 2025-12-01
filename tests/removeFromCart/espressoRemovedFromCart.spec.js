import { test, expect } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';

test('Espresso removed from Cart after clicking Remove', async ({ page }) => {
  // await page.goto('https://coffee-cart.app/');
  // await page.getByTestId('Espresso').click();
  // await page.getByLabel('Cart page').click();
  // await page.waitForURL('https://coffee-cart.app/cart');
  // await page.getByLabel('Remove all Espresso').click();
  // await expect(page.getByText('No coffee, go add some.')).toBeVisible();

  const menuPage = new MenuPage(page);
  const cartPage = new CartPage(page);

  await menuPage.open();
  await menuPage.clickEspresso();
  await menuPage.openCartPage();
  await cartPage.cartPageIsOpen();

  await cartPage.removeEspresso();
  await cartPage.assertPageMessage();
});
