const setup = () => {
    const zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let resultaat = "";
    let output = document.getElementById("zin");


    for (let i = 0; i < zin.length; i++) {
        if (zin.substring(i, i + 2) === "de" ||  zin.substring(i, i + 2) === "De" && (i === 0 || zin[i-1] === " ") && (i + 2 === zin.length || zin[i+2] === " ")) {
            resultaat += "het";
            i++;
        } else {
            resultaat += zin[i];
        }
    }

    console.log(resultaat);
    output.textContent = resultaat;
};

window.addEventListener("load", setup);