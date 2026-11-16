import type { Locator, Page } from '@playwright/test';
import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectPageTitle,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class ProductsPage {
  readonly page: Page;

  private static readonly L = {
    title: { strategy: 'css', value: '.title', actionKind: 'generic' as const },
    productsList: { strategy: 'css', value: '.inventory_list', actionKind: 'generic' as const },
    inventoryItem: { strategy: 'css', value: '.inventory_item', actionKind: 'generic' as const },
    sortDropdown: { strategy: 'testId', value: 'product_sort_container', actionKind: 'combobox' as const },
    addBackpack: { strategy: 'testId', value: 'add-to-cart-sauce-labs-backpack', actionKind: 'button' as const },
    addBikeLight: { strategy: 'testId', value: 'add-to-cart-sauce-labs-bike-light', actionKind: 'button' as const },
    cartBadge: { strategy: 'css', value: '.shopping_cart_badge', actionKind: 'generic' as const },
    cartLink: { strategy: 'testId', value: 'shopping-cart-link', actionKind: 'link' as const },
    burgerMenuButton: { strategy: 'testId', value: 'react-burger-menu-btn', actionKind: 'button' as const },
    logoutLink: { strategy: 'css', value: '#logout_sidebar_link', actionKind: 'link' as const }
  } as const;

  constructor(page: Page) {
    this.page = page;
  }

  async expectTitleVisible() {
    await expectVisible(webLocator(this.page, ProductsPage.L.title));
  }

  async expectTitleContainsText(text: string) {
    await expectContainsText(webLocator(this.page, ProductsPage.L.title), text);
  }

  async expectProductsListVisible() {
    await expectVisible(webLocator(this.page, ProductsPage.L.productsList));
  }

  async expectInventoryItemCount(count: number) {
    await expectCount(webLocator(this.page, ProductsPage.L.inventoryItem), count);
  }

  async expectSortDropdownVisible() {
    await expectVisible(webLocator(this.page, ProductsPage.L.sortDropdown));
  }

  async clickAddBackpack() {
    await clickWhenVisible(webLocator(this.page, ProductsPage.L.addBackpack));
  }

  async clickAddBikeLight() {
    await clickWhenVisible(webLocator(this.page, ProductsPage.L.addBikeLight));
  }

  async expectCartBadgeContainsText(text: string) {
    await expectContainsText(webLocator(this.page, ProductsPage.L.cartBadge), text);
  }

  async clickCartLink() {
    await clickWhenVisible(webLocator(this.page, ProductsPage.L.cartLink));
  }

  async clickBurgerMenu() {
    await clickWhenVisible(webLocator(this.page, ProductsPage.L.burgerMenuButton));
  }

  async expectLogoutLinkVisible() {
    await expectVisible(webLocator(this.page, ProductsPage.L.logoutLink));
  }

  async clickLogoutLink() {
    await clickWhenVisible(webLocator(this.page, ProductsPage.L.logoutLink));
  }

  async clickTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductsPage.L.title));
  }

  async doubleClickTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductsPage.L.title));
  }

  async longPressTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductsPage.L.title));
  }

  async expectTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductsPage.L.title), timeoutMs);
  }

  async expectTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductsPage.L.title), expected, timeoutMs);
  }

  async expectTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductsPage.L.title), value, timeoutMs);
  }

  async expectTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductsPage.L.title), timeoutMs);
  }

  async expectTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductsPage.L.title), timeoutMs);
  }

  async expectTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductsPage.L.title), timeoutMs);
  }

  async expectTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductsPage.L.title), timeoutMs);
  }

  async expectTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductsPage.L.title), timeoutMs);
  }

  async expectTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductsPage.L.title), count, timeoutMs);
  }

  async scrollTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductsPage.L.title));
  }

  async clickProductsList(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductsPage.L.productsList));
  }

  async doubleClickProductsList(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductsPage.L.productsList));
  }

  async longPressProductsList(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductsPage.L.productsList));
  }

  async expectProductsListHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductsPage.L.productsList), timeoutMs);
  }

  async expectProductsListText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductsPage.L.productsList), expected, timeoutMs);
  }

  async expectProductsListContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductsPage.L.productsList), substring, timeoutMs);
  }

  async expectProductsListValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductsPage.L.productsList), value, timeoutMs);
  }

  async expectProductsListEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductsPage.L.productsList), timeoutMs);
  }

  async expectProductsListDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductsPage.L.productsList), timeoutMs);
  }

  async expectProductsListChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductsPage.L.productsList), timeoutMs);
  }

  async expectProductsListUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductsPage.L.productsList), timeoutMs);
  }

  async expectProductsListFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductsPage.L.productsList), timeoutMs);
  }

  async expectProductsListCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductsPage.L.productsList), count, timeoutMs);
  }

  async scrollProductsListIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductsPage.L.productsList));
  }

  async clickInventoryItem(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductsPage.L.inventoryItem));
  }

  async doubleClickInventoryItem(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductsPage.L.inventoryItem));
  }

  async longPressInventoryItem(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductsPage.L.inventoryItem));
  }

  async expectInventoryItemVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductsPage.L.inventoryItem), timeoutMs);
  }

  async expectInventoryItemHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductsPage.L.inventoryItem), timeoutMs);
  }

  async expectInventoryItemText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductsPage.L.inventoryItem), expected, timeoutMs);
  }

  async expectInventoryItemContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductsPage.L.inventoryItem), substring, timeoutMs);
  }

  async expectInventoryItemValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductsPage.L.inventoryItem), value, timeoutMs);
  }

  async expectInventoryItemEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductsPage.L.inventoryItem), timeoutMs);
  }

  async expectInventoryItemDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductsPage.L.inventoryItem), timeoutMs);
  }

  async expectInventoryItemChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductsPage.L.inventoryItem), timeoutMs);
  }

  async expectInventoryItemUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductsPage.L.inventoryItem), timeoutMs);
  }

  async expectInventoryItemFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductsPage.L.inventoryItem), timeoutMs);
  }

  async scrollInventoryItemIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductsPage.L.inventoryItem));
  }

  async selectSortDropdown(value: string): Promise<void> {
    await selectOptionWhenVisible(webLocator(this.page, ProductsPage.L.sortDropdown), value);
  }

  async expectSortDropdownHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductsPage.L.sortDropdown), timeoutMs);
  }

  async expectSortDropdownText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductsPage.L.sortDropdown), expected, timeoutMs);
  }

  async expectSortDropdownContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductsPage.L.sortDropdown), substring, timeoutMs);
  }

  async expectSortDropdownValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductsPage.L.sortDropdown), value, timeoutMs);
  }

  async expectSortDropdownEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductsPage.L.sortDropdown), timeoutMs);
  }

  async expectSortDropdownDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductsPage.L.sortDropdown), timeoutMs);
  }

  async expectSortDropdownChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductsPage.L.sortDropdown), timeoutMs);
  }

  async expectSortDropdownUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductsPage.L.sortDropdown), timeoutMs);
  }

  async expectSortDropdownFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductsPage.L.sortDropdown), timeoutMs);
  }

  async expectSortDropdownCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductsPage.L.sortDropdown), count, timeoutMs);
  }

  async scrollSortDropdownIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductsPage.L.sortDropdown));
  }

  async doubleClickAddBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductsPage.L.addBackpack));
  }

  async longPressAddBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductsPage.L.addBackpack));
  }

  async expectAddBackpackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductsPage.L.addBackpack), timeoutMs);
  }

  async expectAddBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductsPage.L.addBackpack), timeoutMs);
  }

  async expectAddBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductsPage.L.addBackpack), expected, timeoutMs);
  }

  async expectAddBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductsPage.L.addBackpack), substring, timeoutMs);
  }

  async expectAddBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductsPage.L.addBackpack), value, timeoutMs);
  }

  async expectAddBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductsPage.L.addBackpack), timeoutMs);
  }

  async expectAddBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductsPage.L.addBackpack), timeoutMs);
  }

  async expectAddBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductsPage.L.addBackpack), timeoutMs);
  }

  async expectAddBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductsPage.L.addBackpack), timeoutMs);
  }

  async expectAddBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductsPage.L.addBackpack), timeoutMs);
  }

  async expectAddBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductsPage.L.addBackpack), count, timeoutMs);
  }

  async scrollAddBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductsPage.L.addBackpack));
  }

  async doubleClickAddBikeLight(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductsPage.L.addBikeLight));
  }

  async longPressAddBikeLight(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductsPage.L.addBikeLight));
  }

  async expectAddBikeLightVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductsPage.L.addBikeLight), timeoutMs);
  }

  async expectAddBikeLightHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductsPage.L.addBikeLight), timeoutMs);
  }

  async expectAddBikeLightText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductsPage.L.addBikeLight), expected, timeoutMs);
  }

  async expectAddBikeLightContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductsPage.L.addBikeLight), substring, timeoutMs);
  }

  async expectAddBikeLightValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductsPage.L.addBikeLight), value, timeoutMs);
  }

  async expectAddBikeLightEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductsPage.L.addBikeLight), timeoutMs);
  }

  async expectAddBikeLightDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductsPage.L.addBikeLight), timeoutMs);
  }

  async expectAddBikeLightChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductsPage.L.addBikeLight), timeoutMs);
  }

  async expectAddBikeLightUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductsPage.L.addBikeLight), timeoutMs);
  }

  async expectAddBikeLightFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductsPage.L.addBikeLight), timeoutMs);
  }

  async expectAddBikeLightCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductsPage.L.addBikeLight), count, timeoutMs);
  }

  async scrollAddBikeLightIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductsPage.L.addBikeLight));
  }

  async clickCartBadge(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductsPage.L.cartBadge));
  }

  async doubleClickCartBadge(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductsPage.L.cartBadge));
  }

  async longPressCartBadge(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductsPage.L.cartBadge));
  }

  async expectCartBadgeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductsPage.L.cartBadge), timeoutMs);
  }

  async expectCartBadgeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductsPage.L.cartBadge), timeoutMs);
  }

  async expectCartBadgeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductsPage.L.cartBadge), expected, timeoutMs);
  }

  async expectCartBadgeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductsPage.L.cartBadge), value, timeoutMs);
  }

  async expectCartBadgeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductsPage.L.cartBadge), timeoutMs);
  }

  async expectCartBadgeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductsPage.L.cartBadge), timeoutMs);
  }

  async expectCartBadgeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductsPage.L.cartBadge), timeoutMs);
  }

  async expectCartBadgeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductsPage.L.cartBadge), timeoutMs);
  }

  async expectCartBadgeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductsPage.L.cartBadge), timeoutMs);
  }

  async expectCartBadgeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductsPage.L.cartBadge), count, timeoutMs);
  }

  async scrollCartBadgeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductsPage.L.cartBadge));
  }

  async doubleClickCartLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductsPage.L.cartLink));
  }

  async longPressCartLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductsPage.L.cartLink));
  }

  async expectCartLinkVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductsPage.L.cartLink), timeoutMs);
  }

  async expectCartLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductsPage.L.cartLink), timeoutMs);
  }

  async expectCartLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductsPage.L.cartLink), expected, timeoutMs);
  }

  async expectCartLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductsPage.L.cartLink), substring, timeoutMs);
  }

  async expectCartLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductsPage.L.cartLink), value, timeoutMs);
  }

  async expectCartLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductsPage.L.cartLink), timeoutMs);
  }

  async expectCartLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductsPage.L.cartLink), timeoutMs);
  }

  async expectCartLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductsPage.L.cartLink), timeoutMs);
  }

  async expectCartLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductsPage.L.cartLink), timeoutMs);
  }

  async expectCartLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductsPage.L.cartLink), timeoutMs);
  }

  async expectCartLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductsPage.L.cartLink), count, timeoutMs);
  }

  async scrollCartLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductsPage.L.cartLink));
  }

  async clickBurgerMenuButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProductsPage.L.burgerMenuButton));
  }

  async doubleClickBurgerMenuButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductsPage.L.burgerMenuButton));
  }

  async longPressBurgerMenuButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductsPage.L.burgerMenuButton));
  }

  async expectBurgerMenuButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProductsPage.L.burgerMenuButton), timeoutMs);
  }

  async expectBurgerMenuButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductsPage.L.burgerMenuButton), timeoutMs);
  }

  async expectBurgerMenuButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductsPage.L.burgerMenuButton), expected, timeoutMs);
  }

  async expectBurgerMenuButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductsPage.L.burgerMenuButton), substring, timeoutMs);
  }

  async expectBurgerMenuButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductsPage.L.burgerMenuButton), value, timeoutMs);
  }

  async expectBurgerMenuButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductsPage.L.burgerMenuButton), timeoutMs);
  }

  async expectBurgerMenuButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductsPage.L.burgerMenuButton), timeoutMs);
  }

  async expectBurgerMenuButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductsPage.L.burgerMenuButton), timeoutMs);
  }

  async expectBurgerMenuButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductsPage.L.burgerMenuButton), timeoutMs);
  }

  async expectBurgerMenuButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductsPage.L.burgerMenuButton), timeoutMs);
  }

  async expectBurgerMenuButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductsPage.L.burgerMenuButton), count, timeoutMs);
  }

  async scrollBurgerMenuButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductsPage.L.burgerMenuButton));
  }

  async doubleClickLogoutLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProductsPage.L.logoutLink));
  }

  async longPressLogoutLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProductsPage.L.logoutLink));
  }

  async expectLogoutLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProductsPage.L.logoutLink), timeoutMs);
  }

  async expectLogoutLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProductsPage.L.logoutLink), expected, timeoutMs);
  }

  async expectLogoutLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProductsPage.L.logoutLink), substring, timeoutMs);
  }

  async expectLogoutLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProductsPage.L.logoutLink), value, timeoutMs);
  }

  async expectLogoutLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProductsPage.L.logoutLink), timeoutMs);
  }

  async expectLogoutLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProductsPage.L.logoutLink), timeoutMs);
  }

  async expectLogoutLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProductsPage.L.logoutLink), timeoutMs);
  }

  async expectLogoutLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProductsPage.L.logoutLink), timeoutMs);
  }

  async expectLogoutLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProductsPage.L.logoutLink), timeoutMs);
  }

  async expectLogoutLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProductsPage.L.logoutLink), count, timeoutMs);
  }

  async scrollLogoutLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProductsPage.L.logoutLink));
  }

}
