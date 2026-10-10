/*
 * ============================================================
 *  INNHOLD PÅ NETTSIDEN
 * ============================================================
 *  Dette er den ENESTE filen du trenger å endre for å oppdatere
 *  porteføljen. Bytt ut teksten mellom anførselstegnene ("...").
 *
 *  Slik legger du til noe nytt (jobb, utdanning eller prosjekt):
 *    1. Kopier en blokk i riktig liste (alt fra { til og med },).
 *    2. Lim den inn øverst i listen og endre teksten.
 *    3. Lagre filen. Ferdig!
 *
 *  Bilder: legg bildefilen i mappen "bilder/" og skriv
 *  bilde: "bilder/filnavn.jpg". Uten bilde vises en farget flate.
 *
 *  Tomme felt ("") skjules automatisk på siden.
 * ============================================================
 */

const INNHOLD = {
  navn: "Dina Birkedal",
  rolle: "Digital markedsføring og salg",
  sted: "Oslo",
  bilde: "bilder/dina.jpg",
  intro:
    "Jeg har bachelor i digital markedsføring og salgsledelse fra Høyskolen Kristiania, og jobber i dag som prosjektleder i Mediaplanet. Jeg er engasjert i hvordan innhold, data og strategi styrker merkevarer, og liker tempo og å se at innsats gir resultater.",

  kontakt: {
    epost: "birkedald@gmail.com",
    telefon: "", // f.eks. "900 67 023" – la stå tom for å skjule nummeret
    linkedin: "https://www.linkedin.com/in/dinabirkedal",
    cv: "", // f.eks. "filer/cv.pdf" – la stå tom for å skjule knappen
  },

  // ---------- PROSJEKTER ----------
  // Her viser du frem konkret arbeid: skoleprosjekter, kampanjer, oppgaver.
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
      kort: "Bacheloroppgave i digital markedsføring og salgsledelse ved Høyskolen Kristiania.",
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
        "Beskriv et skoleprosjekt du er stolt av: oppgaven, hva du bidro med, hvilke verktøy du brukte (f.eks. Google Analytics, Meta, Canva) og hva du lærte.",
      resultater: [],
      bilde: "",
      lenke: "",
    },
  ],

  // ---------- ARBEIDSERFARING ----------
  erfaring: [
    {
      periode: "Aug 2026 – nå",
      tittel: "Prosjektleder",
      sted: "Mediaplanet AS",
      tekst:
        "Ansvar for salg og gjennomføring av temakampanjer, med skreddersydd distribusjon digitalt og i print. Jobber med oppsøkende B2B-salg mot spesifikke målgrupper, og følger kunder og samarbeidspartnere fra første samtale til ferdig innhold.",
    },
    {
      periode: "Jul 2024 – aug 2026",
      tittel: "Selger",
      sted: "Odden Klær AS",
      tekst:
        "Ansvar for kundebehandling, mersalg og varepåfylling i butikk. Bidro til gode kundeopplevelser og en ryddig og inspirerende butikk.",
    },
    {
      periode: "Feb 2024 – jul 2026",
      tittel: "Butikkmedarbeider",
      sted: "Kiwi Sorgenfrigata",
      tekst:
        "Varepåfylling, kundeservice og kassearbeid. Videreutviklet evnen til å jobbe effektivt under tidspress og bidro til et positivt arbeidsmiljø.",
    },
    {
      periode: "Jul 2022 – jul 2023",
      tittel: "Vernepliktig, basic medic",
      sted: "Kystvakten Bergen",
      tekst:
        "Førstegangstjeneste med ansvar for helse og sikkerhet om bord. Tillitsvalgt på fartøyet, med ansvar for kommunikasjon mellom mannskap og ledelse.",
    },
    {
      periode: "Mai 2018 – mai 2024",
      tittel: "Salgsmedarbeider",
      sted: "Bergshaven bakeri og konditori AS",
      tekst:
        "Salg av bakevarer, kundeservice og enkelt baristaarbeid. Lærte viktigheten av nøyaktighet, tempo og god service i travle perioder.",
    },
  ],

  // ---------- UTDANNING ----------
  utdanning: [
    {
      periode: "2023 – 2026",
      tittel: "Bachelor i digital markedsføring og salgsledelse",
      sted: "Høyskolen Kristiania",
      tekst:
        "Markedsføring, kommunikasjon og salgsledelse med vekt på praktisk bruk av digitale verktøy, digital strategi, forbrukeratferd og bruk av data.",
    },
    {
      periode: "Feb – jun 2025",
      tittel: "Utveksling",
      sted: "The University of Queensland, Australia",
      tekst:
        "Internasjonalt studiemiljø og tverrkulturelt samarbeid i Brisbane.",
    },
    {
      periode: "2021 – 2022",
      tittel: "Sport & Outdoor",
      sted: "Norhordland Folkehøgskole",
      tekst: "Planlegging, samarbeid og felles prosjekter gjennom turer og trening.",
    },
  ],

  // ---------- KOMPETANSE ----------
  kompetanse: [
    {
      tittel: "Fagområder",
      punkter: [
        "Digital markedsføring",
        "B2B-salg",
        "Prospektering",
        "Kundeoppfølging",
        "Prosjektledelse",
        "Innhold og merkevare",
      ],
    },
    {
      tittel: "Verktøy",
      punkter: [
        "Instagram, TikTok og Meta",
        "LinkedIn",
        "Google Analytics",
        "Google Ads",
        "Salesforce",
        "Canva",
        "Excel",
        "Microsoft Office",
        "Teams og Zoom",
        "KI-verktøy",
      ],
    },
    {
      tittel: "Språk",
      punkter: ["Norsk (morsmål)", "Engelsk (flytende)"],
    },
  ],

  // ---------- OM MEG ----------
  om: [
    "Utveksling i Australia og et år i Forsvaret har gjort meg selvstendig og god til å tilpasse meg nye situasjoner.",
    "Dans var en stor del av livet mitt fra jeg var 3 til 19 år. I dag holder jeg meg i aktivitet med pilates, yoga og styrketrening, og er glad i å gå tur i naturen. Reising og nye kulturer gjør meg nysgjerrig.",
  ],
};
