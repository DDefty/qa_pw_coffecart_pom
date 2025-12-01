import { test, expect } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';

test('Cart updated correctly after clicking plus for drinks', async ({
  page,
}) => {
  // await page.goto('https://coffee-cart.app/');
  // await page.getByTestId('Cappuccino').click();
  // await page.getByTestId('Espresso').click();
  // await page.getByLabel('Cart page').click();
  // await page.waitForURL('https://coffee-cart.app/cart');

  // const cartLocator = page.getByRole('list').nth(1);
  // const espressoItem = cartLocator
  //   .getByRole('listitem')
  //   .filter({ hasText: 'Espresso' });
  // const espressoTotalCost = espressoItem.locator('div').nth(3);
  // const cappuccinoItem = cartLocator
  //   .getByRole('listitem')
  //   .filter({ hasText: 'Cappuccino' });
  // const cappuccinoTotalCost = cappuccinoItem.locator('div').nth(3);

  // await expect(espressoTotalCost).toContainText('$10.00');
  // await page.getByRole('button', { name: 'Add one Espresso' }).click();
  // await expect(espressoTotalCost).toContainText('$20.00');
  // await expect(cappuccinoTotalCost).toContainText('$19.00');
  // await page.getByRole('button', { name: 'Add one Cappuccino' }).click();
  // await expect(cappuccinoTotalCost).toContainText('$38.00');
  // await expect(espressoTotalCost).toContainText('$20.00');
  // await expect(page.getByTestId('checkout')).toContainText('$58.00');

  const menuPage = new MenuPage(page);
  const cartPage = new CartPage(page);

  await menuPage.open();
  await menuPage.clickCappuctino();
  await menuPage.clickEspresso();
  await menuPage.openCartPage();
  await cartPage.cartPageIsOpen();

  await cartPage.assertEspressoCost('$10.00');
  await cartPage.addEspresso();
  await cartPage.assertEspressoCost('$20.00');
  await cartPage.assertCappucinoCost('$19.00');
  await cartPage.addCappuccino();
  await cartPage.assertCappucinoCost('$38.00');
  await cartPage.assertEspressoCost('$20.00');
  await cartPage.assertTotalCost('$58.00');

});
