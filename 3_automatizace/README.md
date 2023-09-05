# Automatizace

## Zadání
Zautomatizujte následující formulář http://goo.gl/forms/xMzsvlQ4UL

Test implementujte v libovolném frameworku. V implementaci využijte PageObject pattern. Společně s testem zkuste odpovědět na otázku: "Test mi funguje lokálně, někdo jiný si ho stáhne a jemu fungovat nebude, proč by to mohlo být?"

## Zpracování

Výsledný test je v souboru [tests/test.spec.ts](tests/test.spec.ts)

Pro zjednodušení jsem v konfiguraci nechala pouze projekty pro firefox a webkit - při zadávání datumu chromium používá label Datum, zatímco ff a wk mají 'Den v měsíci', 'Měsíc' a 'Rok'

Dále jsem měla problém s výběrem možnosti z roletky, který se mi nakonec nepodařilo vyřešit. Zkoušela jsem různé lokátory, ale vždy test timeoutuje proto, že roletka na obrazovce poskakuje a proto se nedaří vybrat možnost.