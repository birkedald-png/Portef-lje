/*
 * ============================================================
 *  INNHOLD PÅ NETTSIDEN
 * ============================================================
 *  Dette er den ENESTE filen du trenger å endre for å oppdatere
 *  porteføljen. Bytt ut teksten mellom anførselstegnene ("...").
 *
 *  Slik legger du til et nytt prosjekt:
 *    1. Kopier en av blokkene i "prosjekter"-listen under
 *       (alt fra { til og med },).
 *    2. Lim den inn øverst i listen og endre teksten.
 *    3. Lagre filen. Ferdig!
 *
 *  Bilder: legg bildefilen i mappen "bilder/" og skriv
 *  bilde: "bilder/filnavn.jpg". Uten bilde vises en farget flate.
 * ============================================================
 */

const INNHOLD = {
  navn: "Dina Birkedal",
  tittel: "Digital markedsføring · Salg · Prosjektledelse",
  intro:
    "Jeg hjelper bedrifter med å nå ut til riktige kunder, øke salget og få prosjekter i mål. Her finner du et utvalg av arbeidet mitt.",

  om: [
    "Jeg har erfaring fra digital markedsføring, salg og prosjektledelse, og liker best oppgaver der kreativitet møter tall og resultater.",
    "Jeg trives med å planlegge kampanjer, bygge kunderelasjoner og koordinere team slik at alle trekker i samme retning.",
  ],

  ferdigheter: [
    "Sosiale medier",
    "Google Ads",
    "Meta Ads",
    "SEO",
    "Innholdsproduksjon",
    "Nyhetsbrev",
    "Google Analytics",
    "B2B-salg",
    "Kundeoppfølging",
    "CRM",
    "Prosjektplanlegging",
    "Budsjettstyring",
  ],

  kontakt: {
    epost: "birkedald@gmail.com",
    telefon: "", // f.eks. "+47 123 45 678" – la stå tom for å skjule
    linkedin: "", // f.eks. "https://www.linkedin.com/in/ditt-navn"
    cv: "", // f.eks. "filer/cv.pdf" – la stå tom for å skjule knappen
  },

  // Kategoriene brukes som filterknapper. Hvert prosjekt må ha en av disse.
  kategorier: ["Markedsføring", "Salg", "Prosjektledelse"],

  prosjekter: [
    {
      tittel: "Kampanje i sosiale medier",
      kategori: "Markedsføring",
      år: "2025",
      kort: "Planla og gjennomførte en kampanje på Instagram og Facebook.",
      beskrivelse:
        "Beskriv her hva oppgaven gikk ut på, hva du gjorde og hvilke verktøy du brukte. Skriv gjerne noen setninger om hva du lærte.",
      resultater: ["+40 % rekkevidde", "+25 % følgere", "3,2 % klikkrate"],
      bilde: "",
      lenke: "",
    },
    {
      tittel: "Nyhetsbrev og e-postmarkedsføring",
      kategori: "Markedsføring",
      år: "2024",
      kort: "Bygde opp en ny nyhetsbrevstrategi med segmentering.",
      beskrivelse:
        "Beskriv prosjektet her: målgruppe, mål, hvordan du jobbet og hva som ble resultatet.",
      resultater: ["38 % åpningsrate", "Dobbelt så mange klikk"],
      bilde: "",
      lenke: "",
    },
    {
      tittel: "Salgsprosess for nye kunder",
      kategori: "Salg",
      år: "2024",
      kort: "Utviklet en strukturert prosess fra første kontakt til signert avtale.",
      beskrivelse:
        "Beskriv salgsarbeidet her: hvilke kunder, hvilken prosess, og hvordan du fulgte opp.",
      resultater: ["15 nye kunder", "Kortere salgssyklus"],
      bilde: "",
      lenke: "",
    },
    {
      tittel: "Lansering av nytt produkt",
      kategori: "Prosjektledelse",
      år: "2023",
      kort: "Ledet et tverrfaglig team gjennom en produktlansering.",
      beskrivelse:
        "Beskriv rollen din, teamet, tidsplanen og hvordan dere løste utfordringer underveis.",
      resultater: ["Levert i tide", "Innenfor budsjett", "6 personer i teamet"],
      bilde: "",
      lenke: "",
    },
  ],
};
