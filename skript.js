// Bygger nettsiden ut fra innhold.js. Du trenger normalt ikke endre denne filen.

const $ = (sel) => document.querySelector(sel);

function lag(tag, klasse, tekst) {
  const el = document.createElement(tag);
  if (klasse) el.className = klasse;
  if (tekst) el.textContent = tekst;
  return el;
}

// Fast farge per kategori, brukt når prosjektet mangler bilde
function farge(kategori) {
  const i = INNHOLD.kategorier.indexOf(kategori);
  return `var(--kategori-${(i < 0 ? 0 : i) % 4})`;
}

function fyllTekstfelt() {
  document.title = `${INNHOLD.navn} – Portefølje`;
  document.querySelectorAll("[data-felt]").forEach((el) => {
    el.textContent = INNHOLD[el.dataset.felt];
  });
  $("#år").textContent = new Date().getFullYear();

  INNHOLD.om.forEach((avsnitt) => $("#om-tekst").append(lag("p", "", avsnitt)));
  INNHOLD.ferdigheter.forEach((f) => $("#ferdigheter").append(lag("li", "", f)));
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
  const rutenett = $("#prosjekter");
  rutenett.replaceChildren();
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
      rutenett.append(kort);
    });
}

function lagFilter() {
  const filter = $(".filter");
  ["Alle", ...INNHOLD.kategorier].forEach((kat, i) => {
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
  if (p.lenke) {
    const a = lag("a", "knapp", "Se prosjektet");
    a.href = p.lenke;
    a.target = "_blank";
    a.rel = "noopener";
    innhold.append(a);
  }
  $("#detaljer").showModal();
}

function lagKontakt() {
  const k = INNHOLD.kontakt;
  const lenker = [
    k.epost && ["Send e-post", `mailto:${k.epost}`],
    k.telefon && [k.telefon, `tel:${k.telefon.replace(/\s/g, "")}`],
    k.linkedin && ["LinkedIn", k.linkedin],
    k.cv && ["Last ned CV", k.cv],
  ].filter(Boolean);

  lenker.forEach(([tekst, href], i) => {
    const a = lag("a", i === 0 ? "knapp" : "knapp sekundær", tekst);
    a.href = href;
    if (href.startsWith("http")) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    $("#kontaktlenker").append(a);
  });
}

const dialog = $("#detaljer");
dialog.querySelector(".lukk").addEventListener("click", () => dialog.close());
// Lukk ved klikk utenfor boksen
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.close();
});

fyllTekstfelt();
lagFilter();
visProsjekter("Alle");
lagKontakt();
