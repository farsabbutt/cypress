import { test, expect } from 'playwright-test-coverage';

test('test', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByText('Get started by editing src/').click();
    await page.getByText('Get started by editing src/app/page.tsxBy').click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'By Vercel Logo' }).click();
    const page1 = await page1Promise;
    await page.getByText('Get started by editing src/app/page.tsxBy Docs ->Find in-depth information').click();
});