const setup = () => {
    let tekst = document.getElementById("gegeven").textContent.toLowerCase();
    let zoekwoord = "an";

    let tellerIndexOf = 0;
    let positie = tekst.indexOf(zoekwoord);

    while (positie != -1) {
        tellerIndexOf = tellerIndexOf + 1;
        positie = tekst.indexOf(zoekwoord, positie + 1);
    }

    console.log("indexOf: an komt " + tellerIndexOf + " keer voor");
    document.getElementById("indexOf").innerHTML = "<strong>indexOf:</strong> an komt <strong>" + tellerIndexOf + "</strong> keer voor";

    let tellerLastIndexOf = 0;
    let positieLaatst = tekst.lastIndexOf(zoekwoord);

    while (positieLaatst != -1) {
        tellerLastIndexOf = tellerLastIndexOf + 1;
        positieLaatst = tekst.lastIndexOf(zoekwoord, positieLaatst - 1);
    }

    console.log("lastIndexOf: an komt " + tellerLastIndexOf + " keer voor");
    document.getElementById("lastIndexOf").innerHTML = "<strong>lastIndexOf:</strong> an komt <strong>" + tellerLastIndexOf + "</strong> keer voor";
}

window.addEventListener("load", setup);