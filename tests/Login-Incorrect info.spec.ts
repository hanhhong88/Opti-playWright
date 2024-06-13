import { test, expect } from '@playwright/test';

test('Login-Incorrect Info', async ({ page }) => {
  const email = "hanh1.nguyen@optimizely.com";
  const username = "Hanh Nguyen1"
  const password = "1234aA@"

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
  await expect(page.locator("//p[text() = 'Your email or password is incorrect!']")).toBeVisible();
});


