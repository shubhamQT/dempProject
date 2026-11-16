import { test, expect } from '@support/fixtures';
import env from '@support/env';
import testData from '@testdata/test-data.json';

test.use({ testIdAttribute: 'data-test' });

test.describe('Saucedemo Main Functionalities', () => {
});

  test('Critical path: login → add item → cart → logout', { tag: ["@smoke","@e2e","@regression","@P0","@case-59cd5f10-1929-4a0d-bb6d-2fac54654708","@req-d64c7581-d0e0-4d7d-9ee2-d71d325431b7"] }, async ({ page, loginPage, productsPage, inventoryPage, cartPage }) => {
  await test.step('Navigate to URL — Navigate to Saucedemo login page', async () => {
    await page.goto('https://www.saucedemo.com/');
  });
  await test.step('Wait until visible — Username input visible — ([data-test="username"])', async () => {
    await loginPage.expectUsernameVisible();
  });
  await test.step('Fill — Enter valid username — ([data-test="username"])', async () => {
    await loginPage.fillUsername('standard_user');
  });
  await test.step('Fill — Enter valid password — ([data-test="password"])', async () => {
    await loginPage.fillPassword('secret_sauce');
  });
  await test.step('Click — Click Login — ([data-test="login-button"])', async () => {
    await loginPage.clickLogin();
  });
  await test.step('Wait until visible — Products page title visible — (.title)', async () => {
    await productsPage.expectTitleVisible();
  });
  await test.step('Assert contains text — Verify Products title text — (.title)', async () => {
    await productsPage.expectTitleContainsText('Products');
  });
  await test.step('Click — Add \'Sauce Labs Backpack\' to cart — ([data-test="add-to-cart-sauce-labs-backpack"])', async () => {
    await inventoryPage.clickAddToCartSauceLabsBackpackSauceLabsBackpack();
  });
  await test.step('Assert contains text — Cart badge shows 1 — (.shopping_cart_badge)', async () => {
    await productsPage.expectCartBadgeContainsText(1);
  });
  await test.step('Click — Open cart — ([data-test="shopping-cart-link"])', async () => {
    await cartPage.clickShoppingCart();
  });
  await test.step('Wait until visible — Cart page title visible — (.title)', async () => {
    await productsPage.expectTitleVisible();
  });
  await test.step('Assert contains text — Verify Cart title text — (.title)', async () => {
    await productsPage.expectTitleContainsText('Your Cart');
  });
  await test.step('Assert contains text — Verify cart item name — (.cart_item .inventory_item_name)', async () => {
    await cartPage.expectCartItemNameContainsText('Sauce Labs Backpack');
  });
  await test.step('Click — Open side menu — ([data-test="react-burger-menu-btn"])', async () => {
    await productsPage.clickBurgerMenuButton();
  });
  await test.step('Wait until visible — Logout link visible — (#logout_sidebar_link)', async () => {
    await productsPage.expectLogoutLinkVisible();
  });
  await test.step('Click — Click Logout — (#logout_sidebar_link)', async () => {
    await productsPage.clickLogoutLink();
  });
  await test.step('Wait until visible — Login button visible — ([data-test="login-button"])', async () => {
    await loginPage.expectLoginVisible();
  });
  await test.step('Assert contains text — Verify login page logo text — (.login_logo)', async () => {
    await loginPage.expectLoginLogoContainsText('Swag Labs');
  });
});

  test('Login page loads with required UI elements', { tag: ["@functional","@regression","@P1","@case-baaeb449-733b-4989-8d9e-70396c664480","@req-d64c7581-d0e0-4d7d-9ee2-d71d325431b7"] }, async ({ page, loginPage }) => {
  await test.step('Navigate to URL — Navigate to Saucedemo login page', async () => {
    await page.goto('https://www.saucedemo.com/');
  });
  await test.step('Wait until visible — Username input visible — ([data-test="username"])', async () => {
    await loginPage.expectUsernameVisible();
  });
  await test.step('Assert visible — Password input visible — ([data-test="password"])', async () => {
    await loginPage.expectPasswordVisible();
  });
  await test.step('Assert visible — Login button visible — ([data-test="login-button"])', async () => {
    await loginPage.expectLoginVisible();
  });
  await test.step('Assert contains text — Verify login logo text — (.login_logo)', async () => {
    await loginPage.expectLoginLogoContainsText('Swag Labs');
  });
});

  test('Successful login shows Products page with product grid', { tag: ["@functional","@regression","@P1","@case-570f51b0-7fc4-471d-b3ae-ec979adec09c","@req-d64c7581-d0e0-4d7d-9ee2-d71d325431b7"] }, async ({ page, loginPage, productsPage }) => {
  await test.step('Navigate to URL — Navigate to Saucedemo login page', async () => {
    await page.goto('https://www.saucedemo.com/');
  });
  await test.step('Wait until visible — Username input visible — ([data-test="username"])', async () => {
    await loginPage.expectUsernameVisible();
  });
  await test.step('Fill — Enter valid username — ([data-test="username"])', async () => {
    await loginPage.fillUsername('standard_user');
  });
  await test.step('Fill — Enter valid password — ([data-test="password"])', async () => {
    await loginPage.fillPassword('secret_sauce');
  });
  await test.step('Click — Click Login — ([data-test="login-button"])', async () => {
    await loginPage.clickLogin();
  });
  await test.step('Wait until visible — Products list visible — (.inventory_list)', async () => {
    await productsPage.expectProductsListVisible();
  });
  await test.step('Assert element count — Verify 6 products are listed — (.inventory_item)', async () => {
    await productsPage.expectInventoryItemCount();
  });
  await test.step('Assert visible — Verify sort dropdown visible — ([data-test="product_sort_container"])', async () => {
    await productsPage.expectSortDropdownVisible();
  });
  await test.step('Assert contains text — Verify Products page title — (.title)', async () => {
    await productsPage.expectTitleContainsText('Products');
  });
});

  test('Add a product from Products page updates cart badge to 1', { tag: ["@functional","@regression","@P1","@case-4174557e-2962-4c2a-80f5-76932f2ef655","@req-d64c7581-d0e0-4d7d-9ee2-d71d325431b7"] }, async ({ page, loginPage, productsPage, inventoryPage }) => {
  await test.step('Navigate to URL — Navigate to Saucedemo login page', async () => {
    await page.goto('https://www.saucedemo.com/');
  });
  await test.step('Wait until visible — Username input visible — ([data-test="username"])', async () => {
    await loginPage.expectUsernameVisible();
  });
  await test.step('Fill — Enter valid username — ([data-test="username"])', async () => {
    await loginPage.fillUsername('standard_user');
  });
  await test.step('Fill — Enter valid password — ([data-test="password"])', async () => {
    await loginPage.fillPassword('secret_sauce');
  });
  await test.step('Click — Click Login — ([data-test="login-button"])', async () => {
    await loginPage.clickLogin();
  });
  await test.step('Wait until visible — Products page title visible — (.title)', async () => {
    await productsPage.expectTitleVisible();
  });
  await test.step('Click — Add \'Sauce Labs Bike Light\' to cart — ([data-test="add-to-cart-sauce-labs-bike-light"])', async () => {
    await inventoryPage.clickAddToCartSauceLabsBikeLightSauceLabsBackpack();
  });
  await test.step('Assert contains text — Cart badge shows 1 — (.shopping_cart_badge)', async () => {
    await productsPage.expectCartBadgeContainsText(1);
  });
});
