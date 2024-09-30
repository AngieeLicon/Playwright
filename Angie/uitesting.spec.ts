import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/products');
  await page.getByLabel('Consent', { exact: true }).click();
  await page.getByRole('link', { name: ' Test Cases' }).click();
  await page.getByRole('link', { name: 'Test Case 1: Register User' }).click();
  await page.getByRole('link', { name: 'Test Case 1: Register User' }).click();
  await page.getByRole('link', { name: 'Test Case 2: Login User with' }).click();
  await page.getByRole('link', { name: ' Home' }).click();
  await page.locator('div:nth-child(7) > .product-image-wrapper > .single-products > .product-overlay').click();
  await page.locator('div:nth-child(7) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
  await page.getByRole('link', { name: 'View Cart' }).click();
  await page.getByText('Proceed To Checkout').click();
  await page.getByRole('button', { name: 'Continue On Cart' }).click();
});