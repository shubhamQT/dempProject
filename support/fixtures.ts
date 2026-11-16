import { test as base, expect } from "@playwright/test";
import { CartPage } from "../pageobjects/CartPage";
import { LoginPage } from "../pageobjects/LoginPage";
import { ProductsPage } from "../pageobjects/ProductsPage";

type AppFixtures = {
  cartPage: CartPage;
  loginPage: LoginPage;
  productsPage: ProductsPage;
};

export const test = base.extend<AppFixtures>({
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
});

export { expect };
