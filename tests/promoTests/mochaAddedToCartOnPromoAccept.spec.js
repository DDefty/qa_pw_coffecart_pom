import { test, expect } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';

test('Discounted Mocha added to the Cart after promo accepting', async ({
  page,
}) => {
  // await page.goto('https://coffee-cart.app/');
  // await page.getByTestId('Cappuccino').click();
  // await page.getByTestId('Espresso').click();
  // await page.getByTestId('Americano').click();
  // await expect(
  //   page.getByText("It's your lucky day! Get an extra cup of Mocha for $4."),
  // ).toBeVisible();
  // await page.getByRole('button', { name: 'Yes, of course!' }).click();
  // await page.getByLabel('Cart page').click();
  // await page.waitForURL('https://coffee-cart.app/cart');

  // const cartLocator = page.getByRole('list').nth(1);
  // // Espresso
  // const espressoItem = cartLocator
  //   .getByRole('listitem')
  //   .filter({ hasText: 'Espresso' });
  // const espressoTotalCost = espressoItem.locator('div').nth(3);

  // await expect(espressoTotalCost).toContainText('$10.00');

  // // (Discounted) Mocha
  // const mochaDiscountedItem = cartLocator
  //   .getByRole('listitem')
  //   .filter({ hasText: '(Discounted) Mocha' });
  // const mochaDiscountedTotalCost = mochaDiscountedItem.locator('div').nth(3);

  // await expect(mochaDiscountedTotalCost).toContainText('$4.00');

  // // Cappuccino
  // const cappuccinoItem = cartLocator
  //   .getByRole('listitem')
  //   .filter({ hasText: 'Cappuccino' });
  // const cappuccinoTotalCost = cappuccinoItem.locator('div').nth(3);

  // await expect(cappuccinoTotalCost).toContainText('$19.00');

  // // Americano
  // const americanoItem = cartLocator
  //   .getByRole('listitem')
  //   .filter({ hasText: 'Americano' });
  // const americanoTotalCost = americanoItem.locator('div').nth(3);

  // await expect(americanoTotalCost).toContainText('$7.00');

  const menuPage = new MenuPage(page);
  const cartPage = new CartPage(page);

  await menuPage.open();
  await menuPage.clickCappuctino();
  await menuPage.clickEspresso();
  await menuPage.clickAmericano();
  await menuPage.assertLuckyMochaVisible();
  await menuPage.addLuckyMochaToCart();
  await menuPage.openCartPage();
  await cartPage.cartPageIsOpen();

  await cartPage.assertEspressoCost('$10.00');
  await cartPage.assertMochaCost('$4.00');
  await cartPage.assertCappucinoCost('$19.00');
  await cartPage.assertAmericanoCost('$7.00')

});
