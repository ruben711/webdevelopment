let personen = [];
let huidigeIndex = -1; // -1 = nieuwe persoon

const vulLijst = () => {
    const lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.innerHTML = "";

    for (let i = 0; i < personen.length; i++) {
        const option = document.createElement("option");
        option.id = i; // opdracht: id = index
        option.textContent = personen[i].familienaam + " " + personen[i].voornaam;
        lstPersonen.appendChild(option);
    }
};

const toonPersoonInFormulier = (index) => {
    const persoon = personen[index];
    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;

    // datum in formaat jjjj-mm-dd
    const d = persoon.geboorteDatum;
    const maand = String(d.getMonth() + 1).padStart(2, "0");
    const dag = String(d.getDate()).padStart(2, "0");
    document.getElementById("txtGeboorteDatum").value = d.getFullYear() + "-" + maand + "-" + dag;

    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
};

const maakFormulierLeeg = () => {
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
};

const heeftErrors = () => {
    return document.querySelectorAll("input.invalid").length > 0;
};

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
    if (heeftErrors()) {
        return;
    }

    const persoon = {
        voornaam: document.getElementById("txtVoornaam").value.trim(),
        familienaam: document.getElementById("txtFamilienaam").value.trim(),
        geboorteDatum: new Date(document.getElementById("txtGeboorteDatum").value.trim()),
        email: document.getElementById("txtEmail").value.trim(),
        aantalKinderen: parseInt(document.getElementById("txtAantalKinderen").value.trim(), 10)
    };

    if (huidigeIndex === -1) {
        personen.push(persoon);
        huidigeIndex = personen.length - 1;
    } else {
        personen[huidigeIndex] = persoon;
    }

    vulLijst();

    // juiste option selecteren
    const lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.selectedIndex = huidigeIndex;
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    huidigeIndex = -1;
    clearAllErrors();
    maakFormulierLeeg();

    document.getElementById("lstPersonen").selectedIndex = -1;
};

const klikInLijst = () => {
    const lstPersonen = document.getElementById("lstPersonen");
    if (lstPersonen.selectedIndex === -1) return;

    const option = lstPersonen.options[lstPersonen.selectedIndex];
    huidigeIndex = parseInt(option.id, 10);

    clearAllErrors();
    toonPersoonInFormulier(huidigeIndex);
};

// onze setup functie die de event listeners registreert
const setup = () => {
    personen = [
        {
            voornaam: "Jan",
            familienaam: "Janssens",
            geboorteDatum: new Date("2010-10-10"),
            email: "jan@example.com",
            aantalKinderen: 0
        },
        {
            voornaam: "Mieke",
            familienaam: "Mickelsen",
            geboorteDatum: new Date("1980-01-01"),
            email: "mieke@example.com",
            aantalKinderen: 1
        },
        {
            voornaam: "Piet",
            familienaam: "Pieters",
            geboorteDatum: new Date("1970-12-31"),
            email: "piet@example.com",
            aantalKinderen: 2
        }
    ];

    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
    lstPersonen.addEventListener("change", klikInLijst);

    vulLijst();
};

window.addEventListener("load", setup);