import { test, expect } from '@playwright/test';

test('login with john/demo and open a CHECKING account', async ({ page }) => {
  await page.goto('/parabank/index.htm');

  await page.fill('input[name="username"]', 'john');
  await page.fill('input[name="password"]', 'demo');
  await page.click('input[type="submit"][value="Log In"]');

  await expect(page).toHaveURL(/overview\.htm/);
  await expect(page.getByRole('link', { name: 'Open New Account' })).toBeVisible();

  await page.getByRole('link', { name: 'Open New Account' }).click();
  await expect(page).toHaveURL(/openaccount\.htm/);

  await expect(page.locator('select#type')).toBeVisible();
  await expect(page.locator('select#fromAccountId')).toBeVisible();

  await page.selectOption('#type', '0');
  await page.selectOption('#fromAccountId', '12345');
  await page.getByRole('button', { name: 'Open New Account' }).click();

  await expect(page.locator('h1', { hasText: 'Account Opened!' })).toBeVisible({ timeout: 10000 });
  await expect(page.locator('text=Congratulations, your account is now open.')).toBeVisible({ timeout: 10000 });

  const newAccountLocator = page.locator('p:has-text("Your new account number:") a');
  await expect(newAccountLocator).toBeVisible({ timeout: 10000 });
  const newAccountId = (await newAccountLocator.innerText()).trim();
  console.log('Created CHECKING account ID:', newAccountId);

  await expect(page.locator(`text=${newAccountId}`)).toBeVisible();
});
