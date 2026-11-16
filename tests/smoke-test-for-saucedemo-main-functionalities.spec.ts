import { test, expect } from '@support/fixtures';
import env from '@support/env';
import testData from '@testdata/test-data.json';

test.use({ testIdAttribute: 'data-test' });

test.describe('Saucedemo Main Functionalities', () => {
});

  test('Critical path: login → add item → cart → logout', { tag: ["@smoke","@e2e","@regression","@P0","@case-59cd5f10-1929-4a0d-bb6d-2fac54654708"] }, async ({ page, loginPage, productsPage, cartPage }) => {
    await test.step('Open — Navigate to Saucedemo login page', async () => {
      await page.goto('https://www.saucedemo.com/');
    });

    await test.step('Assert visible — Username input visible', async () => {
      await loginPage.expectUsernameVisible();
    });

    await test.step('Fill — Enter valid username', async () => {
      await loginPage.fillUsername(env.username);
    });

    await test.step('Fill — Enter valid password', async () => {
      await loginPage.fillPassword(env.password);
    });

    await test.step('Click — Click Login', async () => {
      await loginPage.clickLoginButton();
    });

    await test.step('Assert visible — Products page title visible', async () => {
      await productsPage.expectTitleVisible();
    });

    await test.step('Assert contains — Verify Products title text', async () => {
      await productsPage.expectTitleContainsText('Products');
    });

    await test.step('Click — Add \'Sauce Labs Backpack\' to cart', async () => {
      await productsPage.clickAddBackpack();
    });

    await test.step('Assert contains — Cart badge shows 1', async () => {
      await productsPage.expectCartBadgeContainsText('1');
    });

    await test.step('Click — Open cart', async () => {
      await productsPage.clickCartLink();
    });

    await test.step('Assert visible — Cart page title visible', async () => {
      await cartPage.expectTitleVisible();
    });

    await test.step('Assert contains — Verify Cart title text', async () => {
      await cartPage.expectTitleContainsText('Your Cart');
    });

    await test.step('Assert contains — Verify cart item name', async () => {
      await cartPage.expectCartItemNameContainsText('Sauce Labs Backpack');
    });

    await test.step('Click — Open side menu', async () => {
      await productsPage.clickBurgerMenu();
    });

    await test.step('Assert visible — Logout link visible', async () => {
      await productsPage.expectLogoutLinkVisible();
    });

    await test.step('Click — Click Logout', async () => {
      await productsPage.clickLogoutLink();
    });

    await test.step('Assert visible — Login button visible', async () => {
      await loginPage.expectLoginButtonVisible();
    });

    await test.step('Assert contains — Verify login page logo text', async () => {
      await loginPage.expectLoginLogoContainsText('Swag Labs');
    });
  });


  test('Login page loads with required UI elements', { tag: ["@functional","@regression","@P1","@case-baaeb449-733b-4989-8d9e-70396c664480"] }, async ({ page, loginPage }) => {
    await test.step('Open — Navigate to Saucedemo login page', async () => {
      await page.goto('https://www.saucedemo.com/');
    });

    await test.step('Assert visible — Username input visible', async () => {
      await loginPage.expectUsernameVisible();
    });

    await test.step('Assert visible — Password input visible', async () => {
      await loginPage.expectPasswordVisible();
    });

    await test.step('Assert visible — Login button visible', async () => {
      await loginPage.expectLoginButtonVisible();
    });

    await test.step('Assert contains — Verify login logo text', async () => {
      await loginPage.expectLoginLogoContainsText('Swag Labs');
    });
  });


  test('Successful login shows Products page with product grid', { tag: ["@functional","@regression","@P1","@case-570f51b0-7fc4-471d-b3ae-ec979adec09c"] }, async ({ page, loginPage, productsPage }) => {
    await test.step('Open — Navigate to Saucedemo login page', async () => {
      await page.goto('https://www.saucedemo.com/');
    });

    await test.step('Assert visible — Username input visible', async () => {
      await loginPage.expectUsernameVisible();
    });

    await test.step('Fill — Enter valid username', async () => {
      await loginPage.fillUsername(env.username);
    });

    await test.step('Fill — Enter valid password', async () => {
      await loginPage.fillPassword(env.password);
    });

    await test.step('Click — Click Login', async () => {
      await loginPage.clickLoginButton();
    });

    await test.step('Assert visible — Products list visible', async () => {
      await productsPage.expectProductsListVisible();
    });

    await test.step('Assert count — Verify 6 products are listed', async () => {
      await productsPage.expectInventoryItemCount(6);
    });

    await test.step('Assert visible — Verify sort dropdown visible', async () => {
      await productsPage.expectSortDropdownVisible();
    });

    await test.step('Assert contains — Verify Products page title', async () => {
      await productsPage.expectTitleContainsText('Products');
    });
  });


  test('Add a product from Products page updates cart badge to 1', { tag: ["@functional","@regression","@P1","@case-4174557e-2962-4c2a-80f5-76932f2ef655"] }, async ({ page, loginPage, productsPage }) => {
    await test.step('Open — Navigate to Saucedemo login page', async () => {
      await page.goto('https://www.saucedemo.com/');
    });

    await test.step('Assert visible — Username input visible', async () => {
      await loginPage.expectUsernameVisible();
    });

    await test.step('Fill — Enter valid username', async () => {
      await loginPage.fillUsername(env.username);
    });

    await test.step('Fill — Enter valid password', async () => {
      await loginPage.fillPassword(env.password);
    });

    await test.step('Click — Click Login', async () => {
      await loginPage.clickLoginButton();
    });

    await test.step('Assert visible — Products page title visible', async () => {
      await productsPage.expectTitleVisible();
    });

    await test.step('Click — Add \'Sauce Labs Bike Light\' to cart', async () => {
      await productsPage.clickAddBikeLight();
    });

    await test.step('Assert contains — Cart badge shows 1', async () => {
      await productsPage.expectCartBadgeContainsText('1');
    });
  });
