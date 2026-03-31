let global = {
    aantalStukken: 6,
    stukPerGroep: 2,

    bord: null,
    geopendStukken: [],
    actief: false,

    tries: 0,
    tryDisplay: null,
};

window.onload = () => {
    global.bord = document.getElementById("spel");
    global.tryDisplay = document.getElementById("pogingen");
};

const bepaalDifficulty = (niveau) => {
    global.stukPerGroep = niveau;

    global.bord.innerHTML = "";
    global.geopendStukken = [];
    global.tries = 0;
    global.tryDisplay.textContent = 0;
    bordOpbouwen();
};

const bordOpbouwen = () => {
    let kaartStapel = [];

    for (let numer = 1; numer <= global.aantalStukken; numer++) {
        for (let teller = 0; teller < global.stukPerGroep; teller++) {
            kaartStapel.push(`kaart${numer}.png`);
        }
    }

    kaartStapel.sort(() => Math.random() - 0.5);
    rastergrid(kaartStapel.length);

    kaartStapel.forEach(bestand => {
        let kaart = document.createElement("img");
        kaart.src = "images/achterkant.png";
        kaart.dataset.voorkant = `images/${bestand}`;
        kaart.classList.add("kaart");
        kaart.onclick = () => stukAanklikken(kaart);
        global.bord.appendChild(kaart);
    });
};

const rastergrid = (hoeveelheid) => {
    let rijen = Math.ceil(Math.sqrt(hoeveelheid));
    global.bord.style.gridTemplateColumns = `repeat(${rijen}, 120px)`;
};

const stukAanklikken = (kaart) => {
    if (global.actief) return;
    if (kaart.classList.contains("omgedraaid")) return;
    if (kaart.classList.contains("verborgen")) return;

    kaart.src = kaart.dataset.voorkant;
    kaart.classList.add("omgedraaid");
    global.geopendStukken.push(kaart);

    if (global.geopendStukken.length === global.stukPerGroep) {
        global.tries++;
        global.tryDisplay.textContent = global.tries;
        controleerGelijk();
    }
};

const controleerGelijk = () => {
    global.actief = true;

    let eersteAfbeelding = global.geopendStukken[0].dataset.voorkant;
    let allemaalGelijk = global.geopendStukken.every(s => s.dataset.voorkant === eersteAfbeelding);

    if (allemaalGelijk) {
        global.geopendStukken.forEach(s => s.classList.add("juist"));

        setTimeout(() => {
            global.geopendStukken.forEach(s => s.classList.add("verborgen"));
            resetAktie();
            voltooiingCheck();
        }, 700);

    } else {
        global.geopendStukken.forEach(s => s.classList.add("fout"));

        setTimeout(() => {
            global.geopendStukken.forEach(s => {
                s.src = "images/achterkant.png";
                s.classList.remove("omgedraaid", "fout");
            });
            resetActie();
        }, 900);
    }
};

const resetActie = () => {
    global.geopendStukken = [];
    global.actief = false;
};

const voltooiingCheck = () => {
    let tegluren = [...document.querySelectorAll(".kaart:not(.verborgen)")];

    if (tegluren.length === 0) {
        setTimeout(() => {
            alert(`Je hebt het gehaald in ${global.tries} pogingen!`);
        }, 300);
    }
};