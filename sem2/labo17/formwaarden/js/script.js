const init = () => {
    const knop = document.getElementById("button");

    knop.addEventListener("click", (e) => {
        e.preventDefault();

        const isRoker = document.getElementById("isRoker").checked;

        const talen = document.getElementsByName("moedertaal");
        let gekozenTaal = "";

        for (let i = 0; i < talen.length; i++) {
            if (talen[i].checked) {
                gekozenTaal = talen[i].value;
                break;
            }
        }

        const buurland = document.getElementById("land").value;

        const select = document.getElementById("bestelling");
        const gekozenBestelling = [];

        for (let i = 0; i < select.options.length; i++) {
            if (select.options[i].selected) {
                gekozenBestelling.push(select.options[i].value);
            }
        }

        const output = document.getElementById("resultaat");
        output.innerHTML =
            "Is roker: " + isRoker +
            "<br>Moedertaal: " + gekozenTaal +
            "<br>Buurland: " + buurland +
            "<br>Bestelling: " + gekozenBestelling.join(", ");

        console.log("Is roker:", isRoker);
        console.log("Moedertaal:", gekozenTaal);
        console.log("Favoriete buurland:", buurland);
        console.log("Bestelling:", gekozenBestelling.join(", "));
    });
};

window.addEventListener("load", init);