
const setup = () => {
    document.getElementById("btnValideer").addEventListener("click", valideerForm);
};

const isGetal = (tekst) => !isNaN(tekst) && tekst.trim() !== "";

const toonFout = (id, bericht) => {
    document.getElementById(id).classList.add("fout");
    document.getElementById("fout-" + id).textContent = bericht;
};

const resetValidatie = () => {
    const velden = document.getElementsByTagName("input");
    for (let i = 0; i < velden.length; i++) {
        velden[i].classList.remove("fout");
        document.getElementById("fout-" + velden[i].id).textContent = "";
    }
};

const valideerVoornaam = () => {
    const waarde = document.getElementById("voornaam").value.trim();
    if (waarde.length > 30) {
        toonFout("voornaam", "max. 30 karakters");
        return false;
    }
    return true;
};

const valideerFamilienaam = () => {
    const waarde = document.getElementById("familienaam").value.trim();
    if (waarde === "") {
        toonFout("familienaam", "verplicht veld");
        return false;
    }
    if (waarde.length > 50) {
        toonFout("familienaam", "max. 50 karakters");
        return false;
    }
    return true;
};

const valideerGeboortedatum = () => {
    const waarde = document.getElementById("geboortedatum").value.trim();
    if (waarde === "") {
        toonFout("geboortedatum", "verplicht veld");
        return false;
    }
    if (waarde.length !== 10 || waarde[4] !== "-" || waarde[7] !== "-" || !isGetal(waarde.substring(0, 4)) || !isGetal(waarde.substring(5, 7)) || !isGetal(waarde.substring(8, 10))) {
        toonFout("geboortedatum", "formaat is niet jjjj-mm-dd");
        return false;
    }
    return true;
};

const valideerEmail = () => {
    const waarde = document.getElementById("email").value.trim();
    if (waarde === "") {
        toonFout("email", "verplicht veld");
        return false;
    }
    let aantalAt = 0;
    let positieAt = -1;
    for (let i = 0; i < waarde.length; i++) {
        if (waarde[i] === "@") {
            aantalAt++; positieAt = i;
        }
    }
    if (aantalAt !== 1 || positieAt === 0 || positieAt === waarde.length - 1) {
        toonFout("email", "geen geldig email adres");
        return false;
    }
    return true;
};

const valideerAantalKinderen = () => {
    const waarde = document.getElementById("aantalKinderen").value.trim();
    if (!isGetal(waarde) || Number(waarde) < 0) {
        toonFout("aantalKinderen", "is geen positief getal");
        return false;
    }
    if (Number(waarde) >= 99) {
        toonFout("aantalKinderen", "is te vruchtbaar");
        return false;
    }
    return true;
};

const valideerForm = () => {
    resetValidatie();
    const ok = valideerVoornaam() & valideerFamilienaam() & valideerGeboortedatum() & valideerEmail() & valideerAantalKinderen();
    if (ok) alert("proficiat!");
};



window.addEventListener("load", setup);