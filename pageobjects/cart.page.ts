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

export class CartPage {
  readonly page: Page;

  private static readonly L = {
    title: { strategy: 'css', value: '.title', actionKind: 'generic' as const },
    cartItemName: { strategy: 'css', value: '.cart_item .inventory_item_name', actionKind: 'generic' as const }
  } as const;

  constructor(page: Page) {
    this.page = page;
  }

  async expectTitleVisible() {
    await expectVisible(webLocator(this.page, CartPage.L.title));
  }

  async expectTitleContainsText(text: string) {
    await expectContainsText(webLocator(this.page, CartPage.L.title), text);
  }

  async expectCartItemNameContainsText(text: string) {
    await expectContainsText(webLocator(this.page, CartPage.L.cartItemName), text);
  }

  async clickTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.title));
  }

  async doubleClickTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.title));
  }

  async longPressTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.title));
  }

  async expectTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.title), timeoutMs);
  }

  async expectTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.title), expected, timeoutMs);
  }

  async expectTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.title), value, timeoutMs);
  }

  async expectTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.title), timeoutMs);
  }

  async expectTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.title), timeoutMs);
  }

  async expectTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.title), timeoutMs);
  }

  async expectTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.title), timeoutMs);
  }

  async expectTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.title), timeoutMs);
  }

  async expectTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.title), count, timeoutMs);
  }

  async scrollTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.title));
  }

  async clickCartItemName(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.cartItemName));
  }

  async doubleClickCartItemName(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.cartItemName));
  }

  async longPressCartItemName(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.cartItemName));
  }

  async expectCartItemNameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.cartItemName), timeoutMs);
  }

  async expectCartItemNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.cartItemName), timeoutMs);
  }

  async expectCartItemNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.cartItemName), expected, timeoutMs);
  }

  async expectCartItemNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.cartItemName), value, timeoutMs);
  }

  async expectCartItemNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.cartItemName), timeoutMs);
  }

  async expectCartItemNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.cartItemName), timeoutMs);
  }

  async expectCartItemNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.cartItemName), timeoutMs);
  }

  async expectCartItemNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.cartItemName), timeoutMs);
  }

  async expectCartItemNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.cartItemName), timeoutMs);
  }

  async expectCartItemNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.cartItemName), count, timeoutMs);
  }

  async scrollCartItemNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.cartItemName));
  }

}
