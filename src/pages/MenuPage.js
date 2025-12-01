import { expect } from '@playwright/test';

export class MenuPage {
  constructor(page) {
    this.page = page;
    this.cappucinoCup = page.getByTestId('Cappuccino');
    this.espressoCup = page.getByTestId('Espresso');
    this.americanoCup = page.getByTestId('Americano');
    this.cartPage = page.getByLabel('Cart page');
    this.checkout = page.getByTestId('checkout');
    this.cappuctinoParent = page.getByRole('listitem').filter({ has: this.cappucinoCup });
    this.espressoParent = page.getByRole('listitem').filter({ has: this.espressoCup });
    this.luckyMocha = page.getByText("It's your lucky day! Get an extra cup of Mocha for $4.");
    this.addLuckyMocha = page.getByRole('button', { name: 'Yes, of course!' });
    this.notAddLuckyMocha = page.getByRole('button', { name: "Nah, I'll skip." })
  }

  async open() {
    await this.page.goto('https://coffee-cart.app');
  }

  async clickCappuctino() {
    await this.cappucinoCup.click();
  }

  async clickEspresso() {
    await this.espressoCup.click();
  }

  async clickAmericano() {
    await this.americanoCup.click()
  }

  async assertCheckout(value) {
    await expect(this.checkout).toContainText(value)
  }

  async assertCappucinoCost(value) {
    await expect(this.cappuctinoParent).toContainText(value);
  }

  async assertEspressoCost(value) {
    await expect(this.espressoParent).toContainText(value)
  }

  async openCartPage() {
    await this.cartPage.click();
  }

  async assertLuckyMochaVisible() {
    await expect(this.luckyMocha).toBeVisible();
  }

  async addLuckyMochaToCart() {
    await this.addLuckyMocha.click();
  }

  async notAddLuckyMochaToCart() {
    await this.notAddLuckyMocha.click();
  }
}
