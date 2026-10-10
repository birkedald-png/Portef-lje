// Bygger nettsiden ut fra innhold.js. Du trenger normalt ikke endre denne filen.

const $ = (sel) => document.querySelector(sel);

function lag(tag, klasse, tekst) {
  const el = document.createElement(tag);
  if (klasse) el.className = klasse;
  if (tekst) el.textContent = tekst;
  return el;
}

function lenke(tekst, href, klasse) {
  const a = lag("a", klasse, tekst);
  a.href = href;
  if (href.startsWith("http")) {
    a.target = "_blank";
    a.rel = "noopener";
  }
  return a;
}

// Kategoriene hentes fra prosjektene, i den rekkefølgen de først dukker opp
const kategorier = [...new Set(INNHOLD.prosjekter.map((p) => p.kategori))];

// Fast farge per kategori, brukt når prosjektet mangler bilde
function farge(kategori) {
  return `var(--kategori-${Math.max(0, kategorier.indexOf(kategori)) % 4})`;
}

function fyllTekstfelt() {
  document.title = `${INNHOLD.navn} – Portefølje`;
  document.querySelectorAll("[data-felt]").forEach((el) => {
    el.textContent = INNHOLD[el.dataset.felt];
  });
  $("#år").textContent = new Date().getFullYear();

  const portrett = $("#portrett");
  if (INNHOLD.bilde) {
    portrett.src = INNHOLD.bilde;
    portrett.alt = `Portrett av ${INNHOLD.navn}`;
  } else {
    portrett.hidden = true;
  }

  INNHOLD.om.forEach((avsnitt) => $("#om-tekst").append(lag("p", "", avsnitt)));
}

function lagBilde(p) {
  const bilde = lag("div", "kort-bilde");
  if (p.bilde) {
    const img = document.createElement("img");
    img.src = p.bilde;
    img.alt = p.tittel;
    img.loading = "lazy";
    bilde.append(img);
  } else {
    bilde.style.background = farge(p.kategori);
    bilde.append(lag("span", "", p.tittel.charAt(0)));
  }
  return bilde;
}

function visProsjekter(filter) {
  const liste = $("#prosjektliste");
  liste.replaceChildren();
  INNHOLD.prosjekter
    .filter((p) => filter === "Alle" || p.kategori === filter)
    .forEach((p) => {
      const kort = lag("button", "kort");
      kort.type = "button";
      const tekst = lag("div", "kort-tekst");
      tekst.append(
        lag("p", "meta", `${p.kategori} · ${p.år}`),
        lag("h3", "", p.tittel),
        lag("p", "", p.kort)
      );
      kort.append(lagBilde(p), tekst);
      kort.addEventListener("click", () => åpneDetaljer(p));
      liste.append(kort);
    });
}

function lagProsjekter() {
  if (!INNHOLD.prosjekter.length) {
    $("#prosjekter").hidden = true;
    $('nav a[href="#prosjekter"]').hidden = true;
    return;
  }
  // Filterknapper vises bare når det finnes mer enn én kategori
  if (kategorier.length > 1) {
    const filter = $(".filter");
    ["Alle", ...kategorier].forEach((kat, i) => {
      const knapp = lag("button", "", kat);
      knapp.type = "button";
      knapp.setAttribute("aria-pressed", i === 0);
      knapp.addEventListener("click", () => {
        filter.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", b === knapp));
        visProsjekter(kat);
      });
      filter.append(knapp);
    });
  }
  visProsjekter("Alle");
}

function åpneDetaljer(p) {
  const innhold = $("#detaljer-innhold");
  innhold.replaceChildren(
    lagBilde(p),
    lag("p", "meta", `${p.kategori} · ${p.år}`),
    lag("h3", "", p.tittel),
    lag("p", "", p.beskrivelse)
  );
  if (p.resultater && p.resultater.length) {
    const liste = lag("ul", "resultater");
    p.resultater.forEach((r) => liste.append(lag("li", "", r)));
    innhold.append(lag("h4", "", "Resultater"), liste);
  }
  if (p.lenke) innhold.append(lenke("Se prosjektet", p.lenke, "knapp"));
  $("#detaljer").showModal();
}

function lagTidslinje(liste, mål) {
  liste.forEach((punkt) => {
    const li = lag("li");
    const tekst = lag("div", "tidslinje-tekst");
    tekst.append(lag("h3", "", punkt.tittel), lag("p", "sted", punkt.sted));
    if (punkt.tekst) tekst.append(lag("p", "", punkt.tekst));
    li.append(lag("p", "periode", punkt.periode), tekst);
    $(mål).append(li);
  });
}

function lagKompetanse() {
  INNHOLD.kompetanse.forEach((gruppe) => {
    const blokk = lag("div", "kompetansegruppe");
    const ul = lag("ul", "brikker");
    gruppe.punkter.forEach((p) => ul.append(lag("li", "", p)));
    blokk.append(lag("h3", "", gruppe.tittel), ul);
    $("#kompetanseliste").append(blokk);
  });
}

function lagKontakt() {
  const k = INNHOLD.kontakt;
  const lenker = [
    k.epost && [k.epost, `mailto:${k.epost}`],
    k.telefon && [k.telefon, `tel:${k.telefon.replace(/\s/g, "")}`],
    k.linkedin && ["LinkedIn", k.linkedin],
    k.cv && ["Last ned CV", k.cv],
  ].filter(Boolean);

  lenker.forEach(([tekst, href], i) => {
    $("#kontaktlenker").append(lenke(tekst, href, i === 0 ? "knapp" : "knapp sekundær"));
  });

  // Knapper i toppen: CV hvis den finnes, ellers LinkedIn
  const helt = $("#helt-knapper");
  if (k.cv) helt.append(lenke("Last ned CV", k.cv, "knapp"));
  else if (k.linkedin) helt.append(lenke("Se LinkedIn", k.linkedin, "knapp"));
  helt.append(lenke("Ta kontakt", "#kontakt", "knapp sekundær"));
}

const dialog = $("#detaljer");
dialog.querySelector(".lukk").addEventListener("click", () => dialog.close());
// Lukk ved klikk utenfor boksen
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.close();
});

fyllTekstfelt();
lagProsjekter();
lagTidslinje(INNHOLD.erfaring, "#erfaringsliste");
lagTidslinje(INNHOLD.utdanning, "#utdanningsliste");
lagKompetanse();
lagKontakt();
