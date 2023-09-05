import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    const otazka1Moznost1 = page.getByLabel('Otázka 1').getByText('Možnost 1');
    const otazka2 = page.getByLabel('Otázka 2 *');
    const otazka3Moznost1 = page.getByLabel('Otázka 3 *').getByText('Možnost 1');
    const otazka3Moznost2 = page.getByLabel('Otázka 3 *').getByText('Možnost 2');
    const den = page.getByLabel('Den v měsíci');
    const mesic = page.getByLabel('Měsíc', { exact: true });
    const rok = page.getByLabel('Rok');
    const hodina = page.getByLabel('Hodina');
    const minuta = page.getByLabel('Minuta');
    const dropdown = page.getByRole('option', { name: 'Vyberte' });
    const otazka4Moznost1 = page.getByLabel('Otázka 4 ').getByText('Možnost 1');
    const odeslat = page.getByRole('button', { name: 'Odeslat' });

    await page.goto('http://goo.gl/forms/xMzsvlQ4UL');
    await otazka1Moznost1.click();
    await otazka2.click();
    await otazka2.fill('Odpověď');
    await otazka3Moznost1.click();
    await otazka3Moznost2.click();
    await den.fill('05');
    await mesic.click();
    await mesic.fill('09');
    await rok.click();
    await rok.fill('2023');
    await hodina.click();
    await hodina.fill('00');
    await minuta.click();
    await minuta.fill('00');
    await dropdown.click();
    await otazka4Moznost1.click();
    //await odeslat.click();
});