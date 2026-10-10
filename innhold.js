/*
 * ============================================================
 *  INNHOLD PÅ NETTSIDEN
 * ============================================================
 *  Dette er den ENESTE filen du trenger å endre for å oppdatere
 *  porteføljen. Bytt ut teksten mellom anførselstegnene ("...").
 *
 *  Slik legger du til noe nytt (prosjekt, jobb eller utdanning):
 *    1. Kopier en blokk i riktig liste (alt fra { til og med },).
 *    2. Lim den inn øverst i listen og endre teksten.
 *    3. Lagre filen. Ferdig!
 *
 *  Det første prosjektet i listen vises stort som "utvalgt prosjekt".
 *
 *  Bilder: legg bildefilen i mappen "bilder/" og skriv
 *  bilde: "bilder/filnavn.jpg". Uten bilde vises en farget flate.
 *
 *  Tomme felt ("") skjules automatisk på siden.
 * ============================================================
 */

const INNHOLD = {
  navn: "Dina Birkedal",
  nå: "Prosjektleder i Mediaplanet · Oslo",
  overskrift: "Jeg kobler innhold, data og salg.",
  intro:
    "Nyutdannet innen digital markedsføring og salgsledelse fra Høyskolen Kristiania. Jeg liker tempo, kundekontakt og å se at innsats gir resultater.",
  bilde: "bilder/dina.jpg",

  kontakt: {
    epost: "birkedald@gmail.com",
    telefon: "", // f.eks. "900 67 023" – la stå tom for å skjule nummeret
    linkedin: "https://www.linkedin.com/in/dinabirkedal",
    cv: "", // f.eks. "filer/cv.pdf" – la stå tom for å skjule knappen
  },

  // ---------- HVA JEG KAN BIDRA MED ----------
  // Tre styrker, med verktøyene du bruker innen hver av dem.
  fokus: [
    {
      tittel: "Digital markedsføring",
      tekst:
        "Innhold og kampanjer i sosiale medier, med data som grunnlag for hva som faktisk virker.",
      verktøy: ["Meta", "Instagram", "TikTok", "Google Ads", "Google Analytics", "Canva"],
    },
    {
      tittel: "B2B-salg",
      tekst:
        "Oppsøkende salg mot bestemte målgrupper, og oppfølging fra første samtale til signert avtale.",
      verktøy: ["Prospektering", "Salesforce", "LinkedIn", "Kundeoppfølging"],
    },
    {
      tittel: "Prosjektledelse",
      tekst:
        "Planlegger og gjennomfører temakampanjer med mange samarbeidspartnere og faste frister.",
      verktøy: ["Excel", "Microsoft Office", "Teams", "KI-verktøy"],
    },
  ],

  // ---------- PROSJEKTER ----------
  // Eksemplene under er forslag. Skriv om dem eller slett dem.
  prosjekter: [
    {
      tittel: "Temakampanje for Mediaplanet",
      kategori: "Jobb",
      år: "2026",
      kort: "Salg og gjennomføring av en temakampanje distribuert digitalt og i print.",
      beskrivelse:
        "Skriv om én konkret kampanje: hvilket tema, hvilke samarbeidspartnere du solgte inn, hvordan du fulgte dem opp og hvordan innholdet ble distribuert.",
      resultater: ["Antall partnere", "Rekkevidde", "Omsetning"],
      bilde: "",
      lenke: "",
    },
    {
      tittel: "Bacheloroppgave",
      kategori: "Studier",
      år: "2026",
      kort: "Bacheloroppgave i digital markedsføring og salgsledelse.",
      beskrivelse:
        "Skriv kort om problemstillingen, metoden og hva dere fant ut. Legg gjerne ved en lenke til oppgaven eller en presentasjon.",
      resultater: [],
      bilde: "",
      lenke: "",
    },
    {
      tittel: "Markedsplan for en merkevare",
      kategori: "Studier",
      år: "2025",
      kort: "Et fagprosjekt der du brukte digitale verktøy og data i praksis.",
      beskrivelse:
        "Beskriv et skoleprosjekt du er stolt av: oppgaven, hva du bidro med, hvilke verktøy du brukte og hva du lærte.",
      resultater: [],
      bilde: "",
      lenke: "",
    },
  ],

  // ---------- ERFARING (kun det som er relevant) ----------
  erfaring: [
    {
      periode: "2026 – nå",
      tittel: "Prosjektleder",
      sted: "Mediaplanet",
      tekst: "Salg og gjennomføring av temakampanjer digitalt og i print. Oppsøkende B2B-salg.",
    },
    {
      periode: "2024 – 2026",
      tittel: "Selger",
      sted: "Odden Klær",
      tekst: "Kundebehandling og mersalg i butikk.",
    },
  ],

  // ---------- UTDANNING ----------
  utdanning: [
    {
      periode: "2023 – 2026",
      tittel: "Bachelor, digital markedsføring og salgsledelse",
      sted: "Høyskolen Kristiania",
      tekst: "",
    },
    {
      periode: "2025",
      tittel: "Utveksling",
      sted: "The University of Queensland, Australia",
      tekst: "",
    },
  ],

  språk: "Norsk (morsmål) og engelsk (flytende)",

  // ---------- OM MEG ----------
  om: [
    "Utveksling i Australia og et år i Forsvaret har gjort meg selvstendig og god til å tilpasse meg nye situasjoner. I Kystvakten var jeg tillitsvalgt, med ansvar for kommunikasjonen mellom mannskap og ledelse.",
    "På fritiden holder jeg meg i aktivitet med pilates, yoga og styrketrening, og går gjerne tur. Reising og nye kulturer gjør meg nysgjerrig.",
  ],

  // Små fakta som vises med store tall
  fakta: [
    { tall: "1 år", tekst: "som basic medic og tillitsvalgt i Kystvakten" },
    { tall: "5 mnd", tekst: "utveksling i Brisbane, Australia" },
    { tall: "16 år", tekst: "med dans, fra jeg var 3 til 19" },
  ],
};
