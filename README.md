# Portef-lje
Personlig portefølje for Dina Birkedal. En enkel nettside som samler arbeidet mitt innen digital markedsføring, salg og prosjektledelse.

## Slik oppdaterer du siden

Alt innhold ligger i **`innhold.js`**. Du trenger ikke røre de andre filene.

- **Nytt prosjekt, ny jobb eller utdanning:** kopier en blokk i riktig liste i `innhold.js` (`prosjekter`, `erfaring` eller `utdanning`), lim den inn øverst og endre teksten.
- **CV til nedlasting:** legg PDF-en i en mappe `filer/` og skriv `cv: "filer/cv.pdf"` under `kontakt`. Lag gjerne en versjon uten adresse og fødselsdato, siden nettsiden er offentlig.
- **Bilder:** legg bildet i mappen `bilder/` og skriv `bilde: "bilder/filnavn.jpg"` på prosjektet.
- **Kontaktinfo, CV og LinkedIn:** fyll inn under `kontakt` i `innhold.js`. Tomme felt skjules automatisk.
- **Farger:** endre fargene øverst i `stil.css`.

## Se siden

Åpne `index.html` i nettleseren. Siden trenger ingen installasjon.

## Publisere gratis med GitHub Pages

1. Gå til repoet på GitHub → **Settings** → **Pages**.
2. Under *Source* velger du grenen (f.eks. `main`) og mappen `/ (root)`.
3. Etter et par minutter ligger siden på `https://<brukernavn>.github.io/Portef-lje/`.

## Filer

| Fil | Hva den gjør |
| --- | --- |
| `innhold.js` | All tekst, prosjekter og kontaktinfo |
| `index.html` | Oppsettet av siden |
| `stil.css` | Utseende og farger |
| `skript.js` | Bygger siden ut fra innholdet |
| `bilder/` | Profilbilde og prosjektbilder |
