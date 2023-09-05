# Testování webové stránky

## Zadání

Otestujte webové stránky etnetera.cz

Využijte libovolné nástroje (nesmí být testována zátěž). Vytvořte report z testování. Do reportu zároveň uveďte postup testování a přístup (např. co byste ještě udělali, kdyby byl prostor/prostředky).

## Zpracování

Níže jsem uvedla okruhy, které by na webu měly být testovány a otázky, na které by takový test měl odpovědět. U tučně zvýrazněných otázek jsem také uvedla postřehy z vlastního testování.

#### Funkční testování
 - Splňuje web zadávací požadavky?
 - Jsou všechny odkazy funkční?
 - Jsou formuláře funkční, poradí si neplatnými vstupy, dojde po odeslání k
   očekávané akci?
 - Splňuje web doporučené specifikace / standardy webových stránek?
#### Responsivita a kompatibilita
 - Jak se web zobrazuje v různých webových prohlížečích?
 - Jak se web zobrazuje na různých operačních systémech?
 - **Je web přizpůsoben i zobrazení na mobilním telefonu?**
 Při zobrazení na mobilu se překrývá klikací plocha emailu a telefonního čísla v kontaktech na hlavní stránce
 - **Jak se web zobrazuje na displejích s různými úhlopříčkami?**
 Např. při šířce 1000px dochází k přetečení textu u boxíku Kyberbezpečnost na hlavní stránce
 ![enter image description here](kyberbezpecnost.png)
#### Výkonnostní / zátěžové testování
 - Splňuje web zátěžové požadavky?
 - Jak se web zachová při zpoždění sítě?
 - Poradí si web s výpadky v infrastruktuře nebo s DDoS útokem?
 - Dojde při nárůstu zátěže k prodloužení odezvy webu?
 - **Jak rychle se web načítá / jak rychle jsou načteny klíčové prvky stránky?**
 První vykreslení webu a vykreslení celého viewpointu dosahuje hodnot 1,6s resp. 2,4s (na mobilu dokonce 3.8s vs 5.6s) což může vést k frustraci uživatele a opuštění stránky. Celkové načtení webu trvalo 51s
 - **Jsou použitý kód a vložené obrázky optimalizovány?**
 U obrázků jsou použity formáty .png nebo .jpg - vhodnější by bylo použít WebP
 - **Dochází k efektivnímu cachování statických zdrojů?**
 Videa hostovaná na webflow.com nemají vůbec nastaveno TTL pro cachování a tvoří cca 84% celkové síťové zátěže při načítání webu!
 - Jsou CSS a JS soubory vhodně minifikovány a sloučeny?
#### Bezpečnostní testování
 - Je web zabezpečen proti nejběžnějším útokům typu XSS nebo CSRF?
 - Jsou správně nastaveny bezpečnostní hlavičky?
 - Jsou externí služby / knihovny využívané webem pravidelně aktualizovány a dostatečně zabezpečeny?
#### Testování použitelnosti / uživatelské přívětivosti
 - Je navigace / hledání na webu jednoduché?
 - Je design přívětivý?
 - Je použitý jazyk srozumitelný?
 - **Je web přizpůsoben i uživatelům se zrakovým postižením?**
 Tlačítko ODESLAT v poptávkovém formuláři nemá alt-text pro uživatele s čtečkou obrazovky.
 Některé odkazy (např. ikonky sociálních sítí, nebo loga společností v oceněních) nemají alt-text pro uživatele s čtečkou obrazovky.
 Barvy pozadí a popředí nemají dostatečný kontrastní poměr. Text s nízkým kontrastem je pro mnoho uživatelů obtížně čitelný nebo zcela nečitelný.
 Element <html> nemá atribut [lang] - čtečka obrazovky nemusí správně oznamovat text stránky.

## Použité nástroje

 - [PageSpeed Insights](https://pagespeed.web.dev/)
 - [Lighthouse](https://github.com/GoogleChrome/lighthouse)
 - [Chrome UX Report](https://developer.chrome.com/docs/crux/)
- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)
- [A11Y Project](https://www.a11yproject.com/checklist/)
- [UsableNet AQA](https://usablenet.com/automated-accessibility-testing-tool)