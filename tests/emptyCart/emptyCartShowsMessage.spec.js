import { test, expect } from '@playwright/test';
import { CartPage } from '../../src/pages/CartPage';

test('Empty cart shows correct message', async ({ page }) => {
  const cartPage = new CartPage(page);

  await cartPage.open();
  await cartPage.assertPageMessage();

  // await page.goto('https://coffee-cart.app/cart');
  // await expect(page.getByText('No coffee, go add some.')).toBeVisible();
});
