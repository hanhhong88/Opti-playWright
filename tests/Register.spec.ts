// import { faker } from '@faker-js/faker/locale/en';
import { test, expect } from '@playwright/test';

test('Register', async ({ page }) => {
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
  // Enter account inf is visible
  await expect(page.locator("//b[text() = 'Enter Account Information']")).toBeVisible();

  await page.locator("input[value = Mrs]").check();
  
  await page.locator("input[id= password]").fill(password);

  await day.selectOption({ label: "6"});

  await month.selectOption({ label: "January"});
  
  await year.selectOption({ label: "1990"});

  await page.locator("input#newsletter").check();

  await page.locator("//label[text() = 'Receive special offers from our partners!']").check();

  await page.locator("input#first_name").fill(firstname);

  await page.locator("input#last_name").fill(lastname);

  await page.locator("input#company").fill("Opti");

  await page.locator("input#address1").fill("165 Thai Ha, Ha Noi, Viet Nam");

  await page.locator("input#address2").fill("123 Bangladesh, India");

  await country.selectOption({ label: "Canada"});

  await page.locator("input#state").fill("Nova");

  await page.locator("input#city").fill("Victoria");

  await page.locator("input#zipcode").fill("115500");

  await page.locator("input#mobile_number").fill("12345565");
  
  await page.locator("//button[text() = 'Create Account']").click();

  await expect(page.locator("//b[text() = 'Account Created!']")).toBeVisible();

  await page.locator("a[data-qa = continue-button]").click();

  const text1 = await page.locator("//i[contains(@class, 'fa fa-user')]//parent::a").textContent();
  const text2: string = " Logged in as " + username;
  expect(text1).toEqual(text2);


  // await page.locator("//a[contains(text(),'Delete Account')]").click();

  // await expect(page.locator("//b[text() = 'Account Deleted!']/parent::h2")).toBeVisible();

  // await page.locator("//a[text() = 'Continue']").click();

  // await page.locator("//a[contains(text(), 'Logout')]").click();

  // await expect(page).toHaveTitle("Automation Exercise - Signup / Login");

});


