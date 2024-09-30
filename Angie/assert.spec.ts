import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://platzi.com/'),
  await expect(page.locator('#autocomplete-0-input')).toBeVisible();
  await page.locator('#autocomplete-0-input').fill('cypress');
  await page.locator('#searchIconBtn').click();
  await expect(page.locator('#bab3f3ca5cecfcb9c874b4444ed23e8b')).toBeVisible();
  await page.hover('#bab3f3ca5cecfcb9c874b4444ed23e8b');
  await page.locator('text="Enviar"'); // Selecciona el elemento que contiene el texto "Enviar"

});
