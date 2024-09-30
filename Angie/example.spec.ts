import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://platzi.com/');
  await page.getByLabel('Search Icon Btn').click();
  await page.locator('#autocomplete-0-input').click();
  await page.locator('#autocomplete-0-input').fill('inteligencia artifical');
 
});

