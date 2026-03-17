const start = () => {
    const tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let nieuweTekst = "";
    const element = document.getElementById("zin");

    for (let pos = 0; pos < tekst.length; pos++) {
        let stuk = tekst.substring(pos, pos + 2);

        let woordDe = stuk === "de" || stuk === "De";
        let begin = pos === 0 || tekst[pos - 1] === " ";
        let einde = pos + 2 === tekst.length || tekst[pos + 2] === " ";

        if (woordDe && begin && einde) {
            nieuweTekst += "het";
            pos++;
        } else {
            nieuweTekst += tekst[pos];
        }
    }

    console.log(nieuweTekst);
    element.textContent = nieuweTekst;
};

window.addEventListener("load", start);