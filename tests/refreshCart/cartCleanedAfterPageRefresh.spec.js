import { test, expect } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';

test('Cart cleaned after page refresh', async ({ page }) => {
  // await page.goto('https://coffee-cart.app/');
  // await page.getByTestId('Cappuccino').click();
  // await page.getByTestId('Espresso').click();
  // await page.getByLabel('Cart page').click();
  // await page.waitForURL('https://coffee-cart.app/cart');

  // const cartLocator = page.getByRole('list').nth(1);
  // const cappuccinoItem = cartLocator.getByRole('listitem').filter({
  //   hasText: 'Cappuccino',
  // });

  // await expect(cappuccinoItem).toBeVisible();
  // await page.reload();
  // await expect(cappuccinoItem).toBeHidden();
  // await expect(page.getByText('No coffee, go add some.')).toBeVisible();

  const menuPage = new MenuPage(page);
  const cartPage = new CartPage(page);

  await menuPage.open();
  await menuPage.clickCappuctino();
  await menuPage.clickEspresso();
  await menuPage.openCartPage();
  await cartPage.cartPageIsOpen();

  await cartPage.assertCappucinoVisible();
  await page.reload();
  await cartPage.assertCappuccinoHidden();
  await cartPage.assertPageMessage();
});
