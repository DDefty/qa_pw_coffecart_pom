import { test, expect } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';

test('Espresso cost is added to Total on menu page', async ({ page }) => {
  // await page.goto('https://coffee-cart.app/');
  // await page.getByTestId('Espresso').click();
  // await expect(page.getByTestId('checkout')).toContainText('Total: $10.00');

  const menuPage = new MenuPage(page);

  await menuPage.open();
  await menuPage.clickEspresso();
  await menuPage.assertCheckout('Total: $10.00');
});
