import { test, expect } from '@playwright/test';

test('Log out', async ({ page }) => {
  const email = "hanh.nguyen@optimizely.com";
  const username = "Hanh Nguyen"
  const password = "123aA@"

  await page.goto('http://automationexercise.com/');

  // home page is visible
  await expect(page).toHaveTitle("Automation Exercise");
  // click to Sign in button
  await page.locator("//a[contains(text(), 'Signup')]").click();
  // Login form is visible
  await expect(page.locator("//h2[text() = 'Login to your account']")).toBeVisible();
  // input pw 
  await page.locator("input[data-qa = 'login-password']").fill(password);
  // input email
  await page.locator("input[data-qa = 'login-email']").fill(email);
  // click Log in button
  await page.locator("button[data-qa = 'login-button']").click();
  // Enter account inf is visible


  const text1 = await page.locator("//i[contains(@class, 'fa fa-user')]//parent::a").textContent();
  const text2: string = " Logged in as " + username;
  expect(text1).toEqual(text2);

  await page.locator("//a[contains(text(), 'Logout')]").click();

  await expect(page).toHaveTitle("Automation Exercise - Signup / Login");




});


