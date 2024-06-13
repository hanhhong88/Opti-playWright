import { faker } from '@faker-js/faker/locale/en';
import { test, expect } from '@playwright/test';

test('Register - existed email', async ({ page }) => {
  const day = page.locator("select[data-qa = 'days']");
  const month = page.locator("select[data-qa = 'months']");
  const year = page.locator("select[data-qa = 'years']");
  const country = page.locator("select#country");
  // const username = faker.internet.userName();
  // const password = faker.internet.password();
  // const email = faker.internet.exampleEmail();
  const username = "Hanh Nguyen";
  const password = "123aA@";
  const email = "hanh.nguyen@optimizely.com"
  const firstname = "hanh";
  const lastname = "nguyen"
  


  await page.goto('http://automationexercise.com/');

  // home page is visible
  await expect(page).toHaveTitle("Automation Exercise");
  // click to Sign in button
  await page.locator("//a[contains(text(), 'Signup')]").click();
  // Login form is visible
  await expect(page.locator("//h2[text() = 'New User Signup!']")).toBeVisible();
  // input name 
  await page.locator("input[name = name]").fill(username);
  // input email
  await page.locator("input[data-qa= signup-email]").fill(email);
  // click Sign up button
  await page.locator("button[data-qa= signup-button]").click();
  await expect(page.locator("//p[contains(text(), 'Email Address already exist!')]")).toBeVisible();


});


