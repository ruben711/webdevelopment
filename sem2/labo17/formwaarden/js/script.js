const setup = () => {
    document.getElementById("button").addEventListener("click", (event) => {
        event.preventDefault();

        const roker = document.getElementById("isRoker").checked;

        const taal = document.getElementsByName("moedertaal");
        let moedertaal = "";
        for (let i = 0; i < taal.length; i++) {
            if (taal[i].checked) moedertaal = taal[i].value;
        }

        const land = document.getElementById("land").value;

        const opties = document.getElementById("bestelling").options;
        const bestelling = [];
        for (let i = 0; i < opties.length; i++) {
            if (opties[i].selected) bestelling.push(opties[i].value);
        }

        const resultaat = document.getElementById("resultaat");
        resultaat.innerHTML =
            "Is roker: " + roker +
            "<br>Moedertaal: " + moedertaal +
            "<br>Buurland: " + land +
            "<br>Bestelling: " + bestelling.join(", ");

        console.log("Is roker: " + roker);
        console.log("Moedertaal: " + moedertaal);
        console.log("Favoriete buurland: " + land);
        console.log("Bestelling: " + bestelling.join(", "));
    });
};

window.addEventListener("load", setup);