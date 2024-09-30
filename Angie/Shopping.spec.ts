import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/products');
  await page.getByLabel('Consent', { exact: true }).click();
  await page.locator('div:nth-child(10) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.locator('div:nth-child(10) > .product-image-wrapper > .choose > .nav > li > a').click();
});
  
  /* Abre el navegador la tienda virtual */

  /* Desliza hasta ve los productos*/

  /*Haz clic en "Ver mas detalles"*/

  /* Elige el tamano del producto */

  /*Haz click en Anadir al carrito*/

/*  Haz clic en boton de "continue shopping"*/

/*Verifica que el modal ya no es visible*/
