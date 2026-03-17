const init = () => {
    let lijstGemeenten = [];
    let invoerGemeente;

    while (true) {
        invoerGemeente = prompt("Voer een gemeente in (typ 'stop' om te stoppen):");

        if (invoerGemeente === null || invoerGemeente.toLowerCase() === "stop") {
            break;
        }

        let naam = invoerGemeente.trim();
        if (naam !== "") {
            lijstGemeenten.push(naam);
        }
    }

    lijstGemeenten.sort();

    const selectElement = document.getElementById("gemeentes");

    for (let i = 0; i < lijstGemeenten.length; i++) {
        const option = document.createElement("option");
        option.textContent = lijstGemeenten[i];
        selectElement.appendChild(option);
    }
};

window.addEventListener("load", init);