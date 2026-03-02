const setup = () => {

let knop = document.getElementById("button");

knop.addEventListener("click", bereken);

}
const bereken = () => {
    let subtotaal = document.getElementsByClassName("subtotaal");
    let btw = document.getElementsByClassName("btw");
    let prijs = document.getElementsByClassName("prijs");
    let invoer = document.getElementsByClassName("invoer");
    let totaal = document.getElementsByClassName("totaal");

    let stotaal = 0;
    for (let i = 0; i < subtotaal.length; i++) {
        let p = parseFloat(prijs[i].innerHTML);
        let inv = parseFloat(invoer[i].value);
        let b = parseFloat(btw[i].innerHTML);

        let sub = p * inv * (1 + b / 100);
        sub = parseFloat(sub.toFixed(2));

        subtotaal[i].innerHTML = sub + " eur";
        stotaal += sub;
    }
    totaal[0].innerHTML = stotaal.toFixed(2) + " eur";

}

window.addEventListener("load", setup);