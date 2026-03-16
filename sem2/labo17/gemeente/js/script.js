const setup = () => {
    const gemeenten = [];

    while (true) {
        const invoer = prompt("Geef een gemeente in (of 'stop' om te stoppen):");

        if (invoer === null || invoer.toLowerCase() === "stop") break;

        if (invoer.trim() !== "") {
            gemeenten.push(invoer.trim());
        }
    }

    gemeenten.sort();

    const keuzelijst = document.getElementById("gemeentes");

    for (let i = 0; i < gemeenten.length; i++) {
        const optie = document.createElement("option");
        optie.textContent = gemeenten[i];
        keuzelijst.appendChild(optie);
    }
};

window.addEventListener("load", setup);