import { expect } from '@playwright/test';

export class CartPage {
  constructor(page) {
    this.page = page;
    this.emptyMessage = page.getByText('No coffee, go add some.');
    this.cartListLocator = page.getByRole('list').nth(1);

    this.cappuccinoItem = this.cartListLocator.getByRole('listitem').filter({ hasText: 'Cappuccino', });
    this.cappuccinoNameLocator = this.cappuccinoItem.locator('div').nth(0);
    this.cappuccinoUnitLocator = this.cappuccinoItem.locator('div').nth(1);
    this.cappuccinoTotalCostLocator = this.cappuccinoItem.locator('div').nth(3);

    this.espressoItem = this.cartListLocator.getByRole('listitem').filter({ hasText: 'Espresso' })
    this.espressoNameLocator = this.espressoItem.locator('div').nth(0);
    this.espressoUnitLocator = this.espressoItem.locator('div').nth(1);
    this.espressoTotalCostLocator = this.espressoItem.locator('div').nth(3);

    this.mochaDiscountedItem = this.cartListLocator.getByRole('listitem').filter({ hasText: '(Discounted) Mocha' });
    this.mochaDiscountedTotalCost = this.mochaDiscountedItem.locator('div').nth(3);

    this.americanoItem = this.cartListLocator.getByRole('listitem').filter({ hasText: 'Americano' });
    this.americanoTotalCostLocator = this.americanoItem.locator('div').nth(3);

    this.cappuccinoRemove = page.getByLabel('Remove all Cappuccino');
    this.espressoRemove = page.getByLabel('Remove all Espresso');

    this.cappucinoAdd = page.getByRole('button', { name: 'Add one Cappuccino' });
    this.espressoAdd = page.getByRole('button', { name: 'Add one Espresso' });

    this.totalCartCost = page.getByTestId('checkout');

  }

  async open() {
    await this.page.goto('https://coffee-cart.app/cart');
  }

  async assertPageMessage() {
    await expect(this.emptyMessage).toBeVisible()
  }

  async cartPageIsOpen() {
    await this.page.waitForURL('https://coffee-cart.app/cart');
  }

  async assertCappucinoName(name) {
    await expect(this.cappuccinoNameLocator).toContainText(name);
  }

  async assertCappucinoUnit(unit) {
    await expect(this.cappuccinoUnitLocator).toContainText(unit);
  }

  async assertCappucinoCost(cost) {
    await expect(this.cappuccinoTotalCostLocator).toContainText(cost)
  }

  async assertEspressoName(name) {
    await expect(this.espressoNameLocator).toContainText(name);
  }

  async assertEspressoUnit(unit) {
    await expect(this.espressoUnitLocator).toContainText(unit);
  }

  async assertEspressoCost(cost) {
    await expect(this.espressoTotalCostLocator).toContainText(cost)
  }

  async assertMochaCost(cost) {
    await expect(this.mochaDiscountedTotalCost).toContainText(cost)
  }

  async assertAmericanoCost(cost) {
    await expect(this.americanoTotalCostLocator).toContainText(cost);
  }

  async assertEspressoVisible() {
    await expect(this.espressoItem).toBeVisible()
  }

  async assertMochaHidden() {
    await expect(this.mochaDiscountedItem).toBeHidden();
  }

  async assertCappucinoVisible() {
    await expect(this.cappuccinoItem).toBeVisible();
  }

  async assertAmericanoVisible() {
    await expect(this.americanoItem).toBeVisible();
  }

  async assertCappuccinoHidden() {
    await expect(this.cappuccinoItem).toBeHidden();
  }

  async removeCappucino() {
    await this.cappuccinoRemove.click();
  }

  async removeEspresso() {
    await this.espressoRemove.click();
  }

  async assertEspressoHidden() {
    await expect(this.espressoItem).toBeHidden();
  }

  async addCappuccino() {
    await this.cappucinoAdd.click();
  }

  async addEspresso() {
    await this.espressoAdd.click();
  }

  async assertTotalCost(totalCost) {
    await expect(this.totalCartCost).toContainText(totalCost)
  }
}
