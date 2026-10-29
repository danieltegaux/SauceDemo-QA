
import { test, expect, type Page } from '@playwright/test';

// Reusable helper for logging in as the standard user
async function loginAsStandardUser(page: Page) {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
}

test('standard user can log in and reach inventory', async ({ page }) => {
  await loginAsStandardUser(page);

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');
});

test('standard user can add backpack to cart', async ({ page }) => {
  await loginAsStandardUser(page);

  await expect(page).toHaveURL(/inventory\.html/);

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');

  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page).toHaveURL(/cart\.html/);
  await expect(page.locator('[data-test="title"]')).toHaveText('Your Cart');

  const cartProductNames = page.locator(
    '[data-test="cart-list"] [data-test="inventory-item-name"]'
  );
  await expect(cartProductNames).toHaveCount(1);
  await expect(cartProductNames).toHaveText('Sauce Labs Backpack');

  const cartProductPrices = page.locator(
    '[data-test="cart-list"] [data-test="inventory-item-price"]'
  );
  await expect(cartProductPrices).toHaveText('$29.99');


});

test('invalid credentials show an error and prevent login', async ({ page }) => {
  // 1. Open the login page
  await page.goto('https://www.saucedemo.com/');

  // 2. Enter invalid credentials
  await page.locator('[data-test="username"]').fill('invalid_user');
  await page.locator('[data-test="password"]').fill('wrong_password');
  await page.locator('[data-test="login-button"]').click();

  // 3. Verify that the application displays an error
  await expect(page.locator('[data-test="error"]'))
    .toContainText('Username and password do not match any user in this service');

  // 4. Verify that the user did not reach the inventory page
  await expect(page).not.toHaveURL(/inventory\.html/);
});

test('standard user can complete checkout with backpack', async ({ page }) => {
  // 1. Log in
  await loginAsStandardUser(page);
  await expect(page).toHaveURL(/inventory\.html/);

  // 2. Add the backpack and open the cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();

  // 3. Verify the selected product
  await expect(
    page.locator('[data-test="cart-list"] [data-test="inventory-item-name"]')
  ).toHaveText('Sauce Labs Backpack');

  // 4. Begin checkout and enter fictional test data
  await page.locator('[data-test="checkout"]').click();
  await expect(page).toHaveURL(/checkout-step-one\.html/);

  await page.locator('[data-test="firstName"]').fill('Alex');
  await page.locator('[data-test="lastName"]').fill('Tester');
  await page.locator('[data-test="postalCode"]').fill('12345');
  await page.locator('[data-test="continue"]').click();

  // 5. Verify the checkout summary
  await expect(page).toHaveURL(/checkout-step-two\.html/);
  await expect(page.locator('[data-test="subtotal-label"]'))
    .toHaveText('Item total: $29.99');
  await expect(page.locator('[data-test="tax-label"]'))
    .toHaveText('Tax: $2.40');
  await expect(page.locator('[data-test="total-label"]'))
    .toHaveText('Total: $32.39');

  // 6. Finish checkout and verify confirmation
  await page.locator('[data-test="finish"]').click();

  await expect(page).toHaveURL(/checkout-complete\.html/);
  await expect(page.locator('[data-test="complete-header"]'))
    .toHaveText('Thank you for your order!');
  await expect(page.locator('[data-test="complete-text"]'))
    .toContainText('Your order has been dispatched');
});
