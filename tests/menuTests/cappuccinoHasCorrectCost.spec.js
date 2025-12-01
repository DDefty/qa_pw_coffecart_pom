import { test, expect } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';

test('Cappuccino cup has correct cost', async ({ page }) => {
  const menuPage = new MenuPage(page)

  // const cappucionCup = page.getByTestId('Cappuccino');
  // const parent = page.getByRole('listitem').filter({ has: cappucionCup });

  // await expect(parent).toContainText('$19.00');
  await menuPage.open();
  await menuPage.assertCappucinoCost('$19.00')
});
