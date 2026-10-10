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
  nå: "Bachelor i digital markedsføring og salgsledelse · Oslo",
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
        "Har planlagt og gjennomført temakampanjer med mange samarbeidspartnere og faste frister.",
      verktøy: ["Excel", "Microsoft Office", "Teams", "KI-verktøy"],
    },
  ],

  // ---------- PROSJEKTER ----------
  // Bacheloroppgave og markedsplan er forslag. Skriv om dem eller slett dem.
  prosjekter: [
    {
      tittel: "Fremtidens industri",
      kategori: "Jobb",
      år: "2026",
      kort: "Min første kampanje i Mediaplanet: industri som er både konkurransedyktig og bærekraftig.",
      beskrivelse:
        "Som Sales Project Manager i Mediaplanet Oslo hadde jeg ansvaret for kampanjen «Fremtidens industri» fra august til lanseringen i slutten av september 2026. Det var min første kampanje i Mediaplanet. Målet var å vise at industrien kan være konkurransedyktig og bærekraftig samtidig, og løfte frem virksomheter som lykkes med effektive tiltak og strategier.",
      // Mer innhold i detaljvinduet. Hver del har en tittel og enten tekst eller punkter.
      deler: [
        {
          tittel: "Bakgrunn",
          tekst:
            "Kravene til bærekraftig praksis skjerpes fra både interessenter og lovverk, og bedrifter som ikke omstiller seg nå, risikerer å tape konkurransekraft. Målgruppen var ledere og beslutningstakere i privat og offentlig sektor.",
        },
        {
          tittel: "Hva jeg gjorde",
          punkter: [
            "Definerte fem forretningsområder og bygde prospektlister for hvert av dem, til sammen over hundre selskaper.",
            "Drev hele salgsløpet selv, fra kalde telefoner og førstegangsmail til infomail, tilbud og oppfølging, med all dialog logget i Salesforce.",
            "Pitchet og fikk med redaksjonelle samarbeidspartnere, blant annet UN Global Compact Norge på lederplass, Brønnøysundregistrene om bærekraftsrapportering og Betong Norge om lavkarbonbetong.",
            "Fikk på plass distribusjon på nye konferanser, blant annet Betongindustridagene, Industridagene i Innlandet og KI Dagene.",
            "Solgte sponsede artikler og annonser i tre pakkenivåer (bronse, sølv og gull), og skreddersydde løsninger når standardpakkene ikke passet: reprint av tidligere artikler, kun print eller kun digitalt.",
            "Brukte plassering som salgsargument, for eksempel annonser ved siden av relevante redaksjonelle artikler, og koblet produsenter, distributører og forhandlere i samme verdikjede.",
            "Tilpasset vinklingen til hvert selskap ut fra hva de faktisk jobber med, som lavkarbonbetong, datasentre, bærekraftsrapportering og utslippsfrie anleggsplasser.",
            "Fulgte opp alle nei ved å spørre om årsaken og komme tilbake med et justert tilbud.",
            "Landet vinkling og intervjukandidater sammen med kundene.",
          ],
        },
        {
          tittel: "Forretningsområder",
          punkter: [
            "Prosessindustri og råvarer",
            "Robotikk, automatisering og AI",
            "Sement og byggematerialer",
            "Sirkulær økonomi og gjenvinning",
            "Rådgivning innen grønn omstilling",
          ],
        },
        {
          tittel: "Distribusjon",
          tekst:
            "Kampanjen kom ut i print og digitalt på næringslivnorge.no, med god synlighet på LinkedIn og garanterte visninger i redaktørstyrte medier som E24, Finansavisen og DN. Printutgaven ble delt ut på bransjekonferanser: REN-konferansene (Nettverksuken 26 og temadager), Outlook North, CO2-konferansen og Betongdagene (Tekna), Betongindustridagene 2027, Industridagene i Innlandet, KI Dagene 2026, Tungbilkonferansen, Fagsamling Hav, Eltransportseminaret og Havvindkonferansen.",
        },
        {
          tittel: "Redaksjonelle samarbeidspartnere",
          tekst:
            "UN Global Compact Norge (lederartikkelen), Grønn Byggallianse, Miljøstiftelsen ZERO, Brønnøysundregistrene, Norwegian Offshore Wind og Betong Norge.",
        },
        {
          tittel: "Kunder i kampanjen",
          tekst:
            "Wibe Group (forsiden), Bravida, ZEM, Kymar Motion, WTEX, WDF Isolasjon, BoilerGreen, Bürkert, Aider, ControlPartner, Isoenergi og A-2 Norge.",
        },
      ],
      resultater: [], // Fyll inn, f.eks. "12 solgte plasser" – tom liste skjules på siden
      bilde: "bilder/fremtidens-industri.jpg",
      lenke: "filer/fremtidens-industri.pdf",
      lenketekst: "Se temaavisen (PDF)",
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
      periode: "2026",
      tittel: "Prosjektleder",
      sted: "Mediaplanet",
      tekst: "Solgte og gjennomførte temakampanjer digitalt og i print. Oppsøkende B2B-salg.",
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
