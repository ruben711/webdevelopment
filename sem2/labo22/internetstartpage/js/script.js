const OPSLAG_SLEUTEL = "lab22InternetStartpageHistory";

const voorvoegselInfo = {
    g: { title: "Google" },
    y: { title: "Youtube" },
    x: { title: "X" },
    i: { title: "Instagram" },
};

const titelNaarKaartKlasse = {
    Google: "card-google",
    Youtube: "card-youtube",
    X: "card-x",
    Instagram: "card-instagram",
};

const laadGeschiedenis = () => {
    try {
        const ruweWaarde = localStorage.getItem(OPSLAG_SLEUTEL);
        if (!ruweWaarde) {
            return [];
        }
        const geparset = JSON.parse(ruweWaarde);
        return Array.isArray(geparset) ? geparset : [];
    } catch {
        return [];
    }
};

const bewaarGeschiedenis = (geschiedenisItems) => {
    localStorage.setItem(OPSLAG_SLEUTEL, JSON.stringify(geschiedenisItems));
};

const bouwUrl = (voorvoegsel, zoektekst) => {
    const tekst = zoektekst.trim();
    if (voorvoegsel === "g") {
        return "https://www.google.com/search?q=" + encodeURIComponent(tekst);
    }
    if (voorvoegsel === "y") {
        return "https://www.youtube.com/results?search_query=" + encodeURIComponent(tekst);
    }
    if (voorvoegsel === "x") {
        const hashtag = tekst.replace(/\s+/g, "");
        return "https://x.com/hashtag/" + encodeURIComponent(hashtag);
    }
    if (voorvoegsel === "i") {
        const tag = tekst.replace(/\s+/g, "");
        return "https://www.instagram.com/explore/tags/" + encodeURIComponent(tag) + "/";
    }
    return "";
};

const analyseerCommando = (invoer) => {
    const opgeschoond = invoer.trim();
    const overeenkomst = opgeschoond.match(/^\/([giyxGiyX])\s+(.+)$/);
    if (!overeenkomst) {
        return null;
    }
    const voorvoegsel = overeenkomst[1].toLowerCase();
    const zoektekst = overeenkomst[2].trim();
    if (zoektekst.length === 0) {
        return null;
    }
    if (!voorvoegselInfo[voorvoegsel]) {
        return null;
    }
    return { voorvoegsel, zoektekst };
};

const maakGeschiedenisKaart = (geschiedenisItem) => {
    const kaartKlasse =
        titelNaarKaartKlasse[geschiedenisItem.title] || "card-google";

    const kolom = document.createElement("div");
    kolom.className = "col-md-6 col-lg-3 mb-3";

    const kaart = document.createElement("div");
    kaart.className = "card " + kaartKlasse + " h-100";

    const kaartKop = document.createElement("div");
    kaartKop.className = "card-header";
    kaartKop.textContent = geschiedenisItem.title;

    const kaartBody = document.createElement("div");
    kaartBody.className = "card-body d-flex flex-column";

    const tekstParagraaf = document.createElement("p");
    tekstParagraaf.className = "card-text";
    tekstParagraaf.textContent = geschiedenisItem.text;

    const gaLink = document.createElement("a");
    gaLink.href = geschiedenisItem.url;
    gaLink.className = "btn btn-outline-secondary mt-auto";
    gaLink.target = "_blank";
    gaLink.rel = "noopener noreferrer";
    gaLink.textContent = "Zoeken";

    kaartBody.appendChild(tekstParagraaf);
    kaartBody.appendChild(gaLink);

    kaart.appendChild(kaartKop);
    kaart.appendChild(kaartBody);

    kolom.appendChild(kaart);
    return kolom;
};

const toonGeschiedenis = (geschiedenisItems) => {
    const geschiedenisRij = document.getElementById("historyRow");
    geschiedenisRij.replaceChildren();

    geschiedenisItems.forEach((geschiedenisItem) => {
        const kolom = maakGeschiedenisKaart(geschiedenisItem);
        geschiedenisRij.appendChild(kolom);
    });
};

const verwerkGaKnop = () => {
    const invoerveld = document.getElementById("zoekopdracht");
    const ingetypt = invoerveld.value;
    const commando = analyseerCommando(ingetypt);

    if (!commando) {
        window.alert(
            "Ongeldig commando. Gebruik /g, /y, /x of /i"
        );
        return;
    }

    const site = voorvoegselInfo[commando.voorvoegsel];
    const url = bouwUrl(commando.voorvoegsel, commando.zoektekst);

    window.open(url, "_blank");

    const nieuwGeschiedenisItem = {
        title: site.title,
        text: commando.zoektekst,
        url: url,
    };

    const bijgewerkteLijst = laadGeschiedenis();
    bijgewerkteLijst.push(nieuwGeschiedenisItem);
    bewaarGeschiedenis(bijgewerkteLijst);
    toonGeschiedenis(bijgewerkteLijst);

    invoerveld.value = "";
};

const initialize = () => {
    document.getElementById("goBtn").addEventListener("click", verwerkGaKnop);
    toonGeschiedenis(laadGeschiedenis());
};

window.addEventListener("load", initialize);
