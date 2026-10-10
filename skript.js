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
  if (href.startsWith("http") || href.endsWith(".pdf")) {
    a.target = "_blank";
    a.rel = "noopener";
  }
  return a;
}

// Fast farge per kategori, brukt når prosjektet mangler bilde
const kategorier = [...new Set(INNHOLD.prosjekter.map((p) => p.kategori))];
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
}

function lagFokus() {
  INNHOLD.fokus.forEach((f) => {
    const blokk = lag("div", "fokusområde");
    const verktøy = lag("ul", "verktøy");
    f.verktøy.forEach((v) => verktøy.append(lag("li", "", v)));
    blokk.append(lag("h3", "", f.tittel), lag("p", "", f.tekst), verktøy);
    $("#fokusliste").append(blokk);
  });
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

function lagKort(p, klasse) {
  const kort = lag("button", klasse);
  kort.type = "button";
  const tekst = lag("div", "kort-tekst");
  tekst.append(lag("p", "meta", `${p.kategori} · ${p.år}`), lag("h3", "", p.tittel), lag("p", "", p.kort));
  if (klasse.includes("stort") && p.resultater && p.resultater.length) {
    const r = lag("ul", "verktøy");
    p.resultater.forEach((x) => r.append(lag("li", "", x)));
    tekst.append(r);
  }
  tekst.append(lag("span", "les-mer", "Les mer →"));
  kort.append(lagBilde(p), tekst);
  kort.addEventListener("click", () => åpneDetaljer(p));
  return kort;
}

function lagProsjekter() {
  const [første, ...resten] = INNHOLD.prosjekter;
  if (!første) {
    $("#prosjekter").hidden = true;
    $('nav a[href="#prosjekter"]').hidden = true;
    return;
  }
  $("#utvalgt").append(lagKort(første, "kort stort"));
  resten.forEach((p) => $("#prosjektliste").append(lagKort(p, "kort")));
}

function åpneDetaljer(p) {
  const innhold = $("#detaljer-innhold");
  innhold.replaceChildren(
    lagBilde(p),
    lag("p", "meta", `${p.kategori} · ${p.år}`),
    lag("h3", "", p.tittel),
    lag("p", "", p.beskrivelse)
  );
  (p.deler || []).forEach((del) => {
    innhold.append(lag("h4", "", del.tittel));
    if (del.tekst) innhold.append(lag("p", "", del.tekst));
    if (del.punkter) {
      const liste = lag("ul", "punktliste");
      del.punkter.forEach((punkt) => liste.append(lag("li", "", punkt)));
      innhold.append(liste);
    }
  });
  if (p.resultater && p.resultater.length) {
    const liste = lag("ul", "resultater");
    p.resultater.forEach((r) => liste.append(lag("li", "", r)));
    innhold.append(lag("h4", "", "Resultater"), liste);
  }
  if (p.lenke) innhold.append(lenke(p.lenketekst || "Se prosjektet", p.lenke, "knapp"));
  $("#detaljer").showModal();
}

function lagListe(liste, mål) {
  liste.forEach((punkt) => {
    const li = lag("li");
    const topp = lag("div", "kortliste-topp");
    topp.append(lag("strong", "", punkt.tittel), lag("span", "periode", punkt.periode));
    li.append(topp, lag("p", "sted", punkt.sted));
    if (punkt.tekst) li.append(lag("p", "", punkt.tekst));
    $(mål).append(li);
  });
}

function lagDokumenter() {
  const dokumenter = INNHOLD.dokumenter || [];
  if (!dokumenter.length) {
    $("#dokumentasjon").hidden = true;
    return;
  }
  dokumenter.forEach((d) => $("#dokumentliste").append(lenke(d.tittel, d.fil, "knapp sekundær")));
}

function lagOm() {
  INNHOLD.om.forEach((avsnitt) => $("#om-tekst").append(lag("p", "", avsnitt)));
  INNHOLD.fakta.forEach((f) => {
    const li = lag("li");
    li.append(lag("span", "tall", f.tall), lag("span", "", f.tekst));
    $("#faktaliste").append(li);
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
  helt.append(lenke("Se prosjektene", "#prosjekter", "knapp"));
  if (k.cv) helt.append(lenke("Last ned CV", k.cv, "knapp sekundær"));
  else if (k.linkedin) helt.append(lenke("LinkedIn", k.linkedin, "knapp sekundær"));
}

const dialog = $("#detaljer");
dialog.querySelector(".lukk").addEventListener("click", () => dialog.close());
// Lukk ved klikk utenfor boksen
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.close();
});

fyllTekstfelt();
lagFokus();
lagProsjekter();
lagListe(INNHOLD.erfaring, "#erfaringsliste");
lagListe(INNHOLD.utdanning, "#utdanningsliste");
lagDokumenter();
lagOm();
lagKontakt();
