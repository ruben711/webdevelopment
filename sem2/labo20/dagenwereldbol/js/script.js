const setup = () => {
    // Vul hier je eigen geboortedatum in (maand is 0-11 bij deze constructor!)
    // Voorbeeld: 21 april 2003 => new Date(2003, 3, 21)
    const geboorteDatum = new Date(2003, 3, 21);
    const vandaag = new Date();

    const verschilInMs = vandaag - geboorteDatum;
    const verschilInDagen = Math.floor(verschilInMs / (1000 * 60 * 60 * 24));

    console.log("Aantal dagen tussen geboorte en vandaag:", verschilInDagen);
};

window.addEventListener("load", setup);
