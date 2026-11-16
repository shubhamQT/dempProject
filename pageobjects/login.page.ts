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

export class LoginPage {
  readonly page: Page;

  private static readonly L = {
    username: { strategy: 'testId', value: 'username', actionKind: 'textbox' as const },
    password: { strategy: 'testId', value: 'password', actionKind: 'textbox' as const },
    loginButton: { strategy: 'testId', value: 'login-button', actionKind: 'button' as const },
    loginLogo: { strategy: 'css', value: '.login_logo', actionKind: 'generic' as const }
  } as const;

  constructor(page: Page) {
    this.page = page;
  }

  async fillUsername(value: string) {
    await fillWhenVisible(webLocator(this.page, LoginPage.L.username), value);
  }

  async expectUsernameVisible() {
    await expectVisible(webLocator(this.page, LoginPage.L.username));
  }

  async fillPassword(value: string) {
    await fillWhenVisible(webLocator(this.page, LoginPage.L.password), value);
  }

  async expectPasswordVisible() {
    await expectVisible(webLocator(this.page, LoginPage.L.password));
  }

  async clickLoginButton() {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.loginButton));
  }

  async expectLoginButtonVisible() {
    await expectVisible(webLocator(this.page, LoginPage.L.loginButton));
  }

  async expectLoginLogoContainsText(text: string) {
    await expectContainsText(webLocator(this.page, LoginPage.L.loginLogo), text);
  }

  async performLogin(username: string, password: string): Promise<void> {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLoginButton();
  }


  async clearUsername(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LoginPage.L.username));
  }

  async typeTextUsername(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LoginPage.L.username), value);
  }

  async expectUsernameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.username), expected, timeoutMs);
  }

  async expectUsernameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.username), substring, timeoutMs);
  }

  async expectUsernameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.username), value, timeoutMs);
  }

  async expectUsernameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.username), count, timeoutMs);
  }

  async scrollUsernameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.username));
  }

  async clearPassword(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LoginPage.L.password));
  }

  async typeTextPassword(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LoginPage.L.password), value);
  }

  async expectPasswordHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.password), expected, timeoutMs);
  }

  async expectPasswordContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.password), substring, timeoutMs);
  }

  async expectPasswordValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.password), value, timeoutMs);
  }

  async expectPasswordEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.password), count, timeoutMs);
  }

  async scrollPasswordIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.password));
  }

  async doubleClickLoginButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.loginButton));
  }

  async longPressLoginButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.loginButton));
  }

  async expectLoginButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.loginButton), timeoutMs);
  }

  async expectLoginButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.loginButton), expected, timeoutMs);
  }

  async expectLoginButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.loginButton), substring, timeoutMs);
  }

  async expectLoginButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.loginButton), value, timeoutMs);
  }

  async expectLoginButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.loginButton), timeoutMs);
  }

  async expectLoginButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.loginButton), timeoutMs);
  }

  async expectLoginButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.loginButton), timeoutMs);
  }

  async expectLoginButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.loginButton), timeoutMs);
  }

  async expectLoginButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.loginButton), timeoutMs);
  }

  async expectLoginButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.loginButton), count, timeoutMs);
  }

  async scrollLoginButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.loginButton));
  }

  async clickLoginLogo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.loginLogo));
  }

  async doubleClickLoginLogo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.loginLogo));
  }

  async longPressLoginLogo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.loginLogo));
  }

  async expectLoginLogoVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.loginLogo), timeoutMs);
  }

  async expectLoginLogoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.loginLogo), timeoutMs);
  }

  async expectLoginLogoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.loginLogo), expected, timeoutMs);
  }

  async expectLoginLogoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.loginLogo), value, timeoutMs);
  }

  async expectLoginLogoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.loginLogo), timeoutMs);
  }

  async expectLoginLogoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.loginLogo), timeoutMs);
  }

  async expectLoginLogoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.loginLogo), timeoutMs);
  }

  async expectLoginLogoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.loginLogo), timeoutMs);
  }

  async expectLoginLogoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.loginLogo), timeoutMs);
  }

  async expectLoginLogoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.loginLogo), count, timeoutMs);
  }

  async scrollLoginLogoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.loginLogo));
  }

}
