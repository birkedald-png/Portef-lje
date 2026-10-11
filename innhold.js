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
  nå: "Portefølje · Digital markedsføring og salg", // den lille linjen over overskriften
  overskrift: "Dina Birkedal", // den store overskriften øverst
  intro:
    "Nyutdannet innen digital markedsføring og salgsledelse fra Høyskolen Kristiania. Jeg liker tempo, kundekontakt og å se at innsats gir resultater.",
  bilde: "bilder/dina.jpg",

  kontakt: {
    epost: "birkedald@gmail.com",
    telefon: "900 67 023", // la stå tom ("") for å skjule nummeret
    sted: "Oslo",
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
  prosjekter: [
    {
      tittel: "Fremtidens industri",
      kategori: "Jobb",
      år: "2026",
      kort: "Min første kampanje i Mediaplanet: industri som er både konkurransedyktig og bærekraftig.",
      beskrivelse:
        "Som Sales Project Manager i Mediaplanet Oslo ledet jeg kampanjen «Fremtidens industri» sammen med en kollega, fra august til lanseringen i slutten av september 2026. Det var min første kampanje i Mediaplanet. Målet var å vise at industrien kan være konkurransedyktig og bærekraftig samtidig, og løfte frem virksomheter som lykkes med effektive tiltak og strategier.",
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
            "Valgte nøye ut fem forretningsområder for kampanjen og bygde prospektlister for hvert av dem, til sammen over hundre selskaper.",
            "Drev salgsløpet mot mine kunder fra start til slutt, fra kalde telefoner og førstegangsmail til infomail, tilbud og oppfølging, med all dialog logget i Salesforce.",
            "Pitchet og fikk med redaksjonelle samarbeidspartnere, blant annet UN Global Compact Norge på lederplass, Brønnøysundregistrene om bærekraftsrapportering og Betong Norge om lavkarbonbetong.",
            "Valgte nøye ut konferansene kampanjen skulle deles ut på, og fikk på plass distribusjon på nye konferanser, blant annet Betongindustridagene, Industridagene i Innlandet og KI Dagene.",
            "Tilpasset vinklingen til hvert selskap ut fra hva de faktisk jobber med, som lavkarbonbetong, datasentre, bærekraftsrapportering og utslippsfrie anleggsplasser.",
            "Fulgte opp alle nei ved å spørre om årsaken og komme tilbake med et justert tilbud.",
            "Landet vinkling og intervjukandidater sammen med kundene.",
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
      tittel: "Oslo Taxi: relevant for yngre",
      kategori: "Case",
      år: "2026",
      kort: "Markedscase: hvordan Oslo Taxi kan nå yngre målgrupper uten å miste posisjonen som trygg og profesjonell.",
      beskrivelse:
        "En markedscase der jeg analyserte merkevaren til Oslo Taxi og utviklet innhold som kan gjøre selskapet mer relevant for yngre målgrupper. Casen går fra analyse av merkevaren til innholdsidéer, et konkret innholdsforslag og hvordan det kan måles.",
      deler: [
        {
          tittel: "Utgangspunktet",
          tekst:
            "Oslo Taxi har en sterk posisjon med høy tillit og tilfredshet, men taper andeler blant yngre målgrupper og i app-drevne kjøp. Menneskelig og relasjonelt innhold fungerer best, og trygghet er en viktig driver. Selskapet oppfattes som trygt og profesjonelt, men mindre relevant for yngre. Spørsmålet var hvordan Oslo Taxi kan bli mer relevant for unge, uten å miste posisjonen som trygg og profesjonell.",
        },
        {
          tittel: "Min analyse av merkevaren",
          punkter: [
            "Styrker: sertifiserte sjåfører med to ukers internt kurs, streng rekruttering, lokalkunnskap, muligheten til å bestille på gata, over 100 år i Oslo siden 1921, og Taxifix-appen med fordeler som OBOS-rabatt, SAS EuroBonus og Vy-integrasjon.",
            "Svakheter i sosiale medier: 1 508 følgere på Instagram og 2 165 på TikTok, lite autentisk menneskelig innhold, og kommunikasjon til folk i stedet for med dem. Nettsiden er transaksjonsbasert og mangler tydelige CTA-er.",
            "Mot Bolt og Uber: de vinner på pris, men er ansiktsløse apper. Oslo Taxi har strengere sjåførutvalg og er tryggere, men kommuniserer det ikke godt nok, og Taxifix markedsføres for svakt.",
            "Konklusjonen min: posisjonen er sterk, men stemmen er svak, og den digitale tilstedeværelsen gjenspeiler ikke det sterke produktet.",
          ],
        },
        {
          tittel: "Tre innholdsidéer",
          punkter: [
            "«Din sjåfør»: korte videoer der ekte sjåfører forteller hvem de er og hva de har opplevd, rett i kamera fra bilen. For 18–30 år. Ingen app kan gjenskape ekte mennesker, og serien gjør den nøye rekrutteringen synlig.",
            "«Oslo-guiden»: sjåfører deler sine beste Oslo-tips, fra skjulte restauranter til beste kebab klokka to om natta. For 18–35 år, både lokale og turister. Gjør over 100 år med lokalkunnskap om til levende innhold.",
            "«Taxi POV»: Oslo sett fra sjåførsetet, klippet sammen fra én vakt uten kommentarer. For 16–25 år. POV-formatet skaper gjenkjennelse og gjør trygghet og profesjonalitet menneskelig.",
          ],
        },
        {
          tittel: "Konkret innhold: «Din sjåfør»",
          tekst:
            "Jeg gjorde «Din sjåfør» konkret som en serie på 4–6 episoder over seks uker på TikTok og Instagram Reels, 45–60 sekunder hver. Episode 1 åpner med hooken «20 år bak rattet – han vet alt». En ekte sjåfør presenterer seg rett i kamera, deler et lokalt tips og avslutter med «Oslo er tusen historier. Jeg har hørt dem alle.» Tonen er varm og autentisk, ikke reklame, og CTA-en er å booke neste tur i Taxifix-appen.",
        },
        {
          tittel: "Effekt og læring",
          tekst:
            "Jeg skilte mellom kommersielle mål og merkekjennskap, siden serien først og fremst bygger kjennskap, men har en kommersiell CTA. Jeg foreslo å måle appnedlastninger i Taxifix (mål: +20 % over seks uker), bestillinger fra 18–30 år, konvertering fra sosiale medier via UTM-lenker, rekkevidde (mål: 5 000+ visninger per video), engasjement, hvor mange som ser hele videoen og sentiment i kommentarene. Treffer det ikke, justerer jeg hook, lyd og publiseringstidspunkt, flytter CTA-en eller tester kortere videoer og en idé med mer konkret nytteverdi.",
        },
      ],
      resultater: [],
      bilde: "bilder/oslo-taxi.jpg",
      lenke: "filer/oslo-taxi-case.pdf",
      lenketekst: "Se hele løsningen (PDF)",
    },
    {
      tittel: "Mellom underholdning og engasjement",
      kategori: "Studier",
      år: "2026",
      kort: "Bacheloroppgave om hvordan unge (18–21 år) opplever politisk kommunikasjon på TikTok og Instagram.",
      beskrivelse:
        "Bacheloroppgaven min i digital markedsføring og salgsledelse ved Høyskolen Kristiania, skrevet sammen med to medstudenter og levert i mai 2026. Vi undersøkte hvordan unge i stemmerettsalder opplever politisk kommunikasjon på TikTok og Instagram, og om virkemidler fra markedsføring skaper ekte engasjement eller mer overfladisk tilslutning.",
      deler: [
        {
          tittel: "Bakgrunn",
          tekst:
            "Utgangspunktet var #stemFrP-trenden på TikTok rundt stortingsvalget i 2025, der unge skrev «StemFrP» i kommentarfeltet, også under videoer som ikke handlet om politikk. Samtidig tar partiene i bruk stadig mer fra digital markedsføring, som korte videoer, trender og målrettede annonser. Vi lurte på om det gir reelt engasjement, eller bare synlighet.",
        },
        {
          tittel: "Problemstilling",
          tekst:
            "«Hvordan opplever unge i stemmerettsalder (18–21 år) politisk kommunikasjon på TikTok og Instagram, og på hvilke måter kan markedsføringsdrevne virkemidler bidra til substansielt politisk engasjement eller mer overfladisk tilslutning?»",
        },
        {
          tittel: "Metode",
          punkter: [
            "Kvalitativt, utforskende design med semistrukturerte intervjuer av ti unge mellom 18 og 21 år.",
            "Et pilotintervju førte til at vi kortet ned intervjuguiden fra syv til fem deler og fra 40 til 30 minutter.",
            "Tematisk koding av intervjuene i tre trinn, med KI som støtte til å finne mønstre. Alle kategorier og tolkninger var våre egne.",
            "Teori om plattformlogikk, personalisering, mediert autentisitet og politainment.",
          ],
        },
        {
          tittel: "Hva vi fant",
          punkter: [
            "Politikk når unge på plattformenes premisser. De oppsøker det sjelden, men møter det i feeden mellom alt annet innhold.",
            "Humor, korte videoer og personlige uttrykk gjør politikk mer synlig, men gjør også oppmerksomheten kortvarig.",
            "For noen blir underholdende innhold en inngang til videre refleksjon, diskusjon eller informasjonssøk. Tyngdepunktet ligger likevel nærmere overfladisk tilslutning, og for mange stopper engasjementet ved private samtaler med venner.",
            "Unge vurderer innholdet gjennom et «autentisitetsfilter». Skillet går ikke mellom underholdning og alvor, men mellom det som oppleves ekte og det som oppleves strategisk påtatt.",
          ],
        },
        {
          tittel: "Hva jeg tar med meg",
          tekst:
            "Synlighet alene er ikke nok, og unge målgrupper merker raskt når innhold er påtatt. Det gjelder like mye for merkevarer som for politikere. Jeg lærte også å gå fra et stort datamateriale til tydelige funn, og å jobbe strukturert i en gruppe gjennom et helt studieår.",
        },
      ],
      resultater: [],
      bilde: "bilder/bacheloroppgave.jpg",
      lenke: "filer/bacheloroppgave.pdf",
      lenketekst: "Les hele oppgaven her (PDF)",
    },
    {
      tittel: "Digital strategi for Oslo Nye Teater",
      kategori: "Studier",
      år: "2024",
      kort: "Semesteroppgave i digital markedsføring: hvordan Oslo Nye Teater kan nå studenter og unge voksne.",
      beskrivelse:
        "Individuell semesteroppgave i emnet Digital markedsføring (DIG1100) ved Høyskolen Kristiania, våren 2024. Jeg utviklet en digital markedsstrategi for Oslo Nye Teater med mål om å nå et yngre publikum, fra analyse og målgruppe til nettside, Google og sosiale medier.",
      deler: [
        {
          tittel: "Strategi og målgruppe",
          punkter: [
            "Situasjonsanalyse med SWOT, PESTEL og Porters fem krefter.",
            "Inbound marketing og innholdsmarkedsføring som overordnet strategi, slik at målgruppen finner og velger teateret selv.",
            "Målgruppe: studenter og unge voksne mellom 20 og 25 år, med persona og kundereise basert på AIDA-modellen.",
            "SMART-mål om å selge 50 billetter i måneden til studenter og unge voksne, med salg til under 30 år som KPI.",
          ],
        },
        {
          tittel: "Nettside",
          tekst:
            "Jeg vurderte nettsiden ut fra brukervennlighet, lastehastighet, CTA, kundekommunikasjon og betaling. PageSpeed Insights ga 93 poeng på datamaskin, men bare 69 på mobil, og jeg pekte på hva som forsinket innlastingen. Jeg foreslo også én tydelig billettknapp per skjermbilde i en farge som skiller seg ut, og satte opp en måleplan i Google Analytics.",
        },
        {
          tittel: "Google",
          tekst:
            "Søkeordsanalyse i Google Ads og en kombinasjonsstrategi med både betalte annonser og bloggartikler for organisk synlighet. Jeg prioriterte søkeord som «teaterkjellern» og «Centralteateret», som passer målgruppen, skrev ingresser til to blogginnlegg og laget fire annonser i Google Ads.",
        },
        {
          tittel: "Sosiale medier: karaokefilter på Snapchat",
          tekst:
            "Jeg valgte Snapchat, der teateret ikke var til stede, fordi kanalen treffer 18–29 år. Konseptet er et AR-filter der brukeren synger med på sanger fra musikalen «Evita», får poeng og utfordrer vennene sine. Målet var 1 000 nye besøkende på nettsiden via Snapchat innen utgangen av 2024, målt i Google Analytics. Illustrasjonen av filteret tegnet jeg selv i Procreate.",
        },
        {
          tittel: "KI i markedsføring",
          tekst:
            "Oppgaven hadde også en del om kunstig intelligens, der jeg drøftet om KI kan ta over jobben til en digital markedsfører, med ølfestivalen What's Brewing som eksempel.",
        },
      ],
      resultater: ["Karakter: A"],
      bilde: "bilder/oslo-nye-teater.jpg",
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

  // Dokumenter som vises under Utdanning. Fødselsnummer o.l. er skjult i filene.
  dokumenter: [
    { tittel: "CV (PDF)", fil: "filer/cv.pdf" },
    { tittel: "Vitnemål (PDF)", fil: "filer/vitnemal.pdf" },
    { tittel: "Diploma Supplement (PDF)", fil: "filer/diploma-supplement.pdf" },
  ],

  // ---------- OM MEG ----------
  om: [
    "På jobb er jeg strukturert og løsningsorientert, og jeg trives best når det er tempo og tydelige mål. Jeg har jobbet med kunder siden jeg var 15, i bakeri, dagligvare og klesbutikk, og vet hvor mye god service og oppfølging betyr. I Mediaplanet fulgte jeg opp hvert nei ved å spørre hvorfor, og kom tilbake med et bedre tilbud.",
    "Jeg jobber godt både alene og i team. Utveksling i Australia og et år i Forsvaret har gjort meg selvstendig og god til å tilpasse meg nye situasjoner. I Kystvakten var jeg tillitsvalgt, med ansvar for kommunikasjonen mellom mannskap og ledelse, og lærte å samarbeide under press.",
    "Jeg ser etter en rolle der innhold, data og strategi møtes, og der jeg får se at innsatsen gir resultater.",
    "På fritiden holder jeg meg i aktivitet med pilates, yoga og styrketrening, og går gjerne tur. Reising og nye kulturer gjør meg nysgjerrig.",
  ],

  // Små fakta som vises med store tall
  fakta: [
    { tall: "8 år", tekst: "med kundekontakt og salg, fra bakeridisken til B2B" },
    { tall: "1 år", tekst: "som basic medic og tillitsvalgt i Kystvakten" },
    { tall: "5 mnd", tekst: "utveksling i Brisbane, Australia" },
    { tall: "16 år", tekst: "med dans, fra jeg var 3 til 19" },
  ],
};
