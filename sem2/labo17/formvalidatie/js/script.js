const init = () => {
    const knop = document.getElementById("btnValideer");
    knop.addEventListener("click", controleerForm);
};

const isNummer = (waarde) => {
    return !isNaN(waarde) && waarde.trim() !== "";
};

const geefFout = (veldId, melding) => {
    const veld = document.getElementById(veldId);
    veld.classList.add("fout");
    document.getElementById("fout-" + veldId).textContent = melding;
};

const resetFouten = () => {
    const inputs = document.querySelectorAll("input");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("fout");
        document.getElementById("fout-" + inputs[i].id).textContent = "";
    }
};

const checkVoornaam = () => {
    const tekst = document.getElementById("voornaam").value.trim();

    if (tekst.length > 30) {
        geefFout("voornaam", "max. 30 karakters");
        return false;
    }
    return true;
};

const checkFamilienaam = () => {
    const tekst = document.getElementById("familienaam").value.trim();

    if (tekst === "") {
        geefFout("familienaam", "verplicht veld");
        return false;
    }

    if (tekst.length > 50) {
        geefFout("familienaam", "max. 50 karakters");
        return false;
    }

    return true;
};

const checkGeboortedatum = () => {
    const datum = document.getElementById("geboortedatum").value.trim();

    if (datum === "") {
        geefFout("geboortedatum", "verplicht veld");
        return false;
    }

    const correctFormaat =
        datum.length === 10 &&
        datum[4] === "-" &&
        datum[7] === "-" &&
        isNummer(datum.substring(0, 4)) &&
        isNummer(datum.substring(5, 7)) &&
        isNummer(datum.substring(8, 10));

    if (!correctFormaat) {
        geefFout("geboortedatum", "formaat is niet jjjj-mm-dd");
        return false;
    }

    return true;
};

const checkEmail = () => {
    const email = document.getElementById("email").value.trim();

    if (email === "") {
        geefFout("email", "verplicht veld");
        return false;
    }

    let atCount = 0;
    let atIndex = -1;

    for (let i = 0; i < email.length; i++) {
        if (email[i] === "@") {
            atCount++;
            atIndex = i;
        }
    }

    if (atCount !== 1 || atIndex === 0 || atIndex === email.length - 1) {
        geefFout("email", "geen geldig email adres");
        return false;
    }

    return true;
};

const checkKinderen = () => {
    const aantal = document.getElementById("aantalKinderen").value.trim();

    if (!isNummer(aantal) || Number(aantal) < 0) {
        geefFout("aantalKinderen", "is geen positief getal");
        return false;
    }

    if (Number(aantal) >= 99) {
        geefFout("aantalKinderen", "is te vruchtbaar");
        return false;
    }

    return true;
};

const controleerForm = () => {
    resetFouten();

    const geldig =
        checkVoornaam() &
        checkFamilienaam() &
        checkGeboortedatum() &
        checkEmail() &
        checkKinderen();

    if (geldig) {
        alert("proficiat!");
    }
};

window.addEventListener("load", init);