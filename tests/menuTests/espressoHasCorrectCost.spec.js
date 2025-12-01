import { test, expect } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';

test('Espresso cup has correct cost', async ({ page }) => {
  const menuPage = new MenuPage(page);

  await menuPage.open();

  await menuPage.assertEspressoCost('$10.00')

  // await page.goto('https://coffee-cart.app/');

  // const espressoCup = page.getByTestId('Espresso');
  // const parent = page.getByRole('listitem').filter({ has: espressoCup });

  // await expect(parent).toContainText('$10.00');
});
