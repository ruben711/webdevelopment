let global = {
    OPSLAG_SCHUIFBALKEN: "labo21_colorpickerpro_schuifbalken",
    OPSLAG_FAVORIETEN: "labo21_colorpickerpro_favorieten"
};

const initialize = () =>{
    let btnSave = document.getElementById("btnSave");
    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

    btnSave.addEventListener("click", bewaarFavoriet);

    herstelFavorietenUitLokaleOpslag();
    herstelSchuifbalkenUitLokaleOpslag();
    update();
};

const bewaarFavoriet = () =>{
    if (favorietBestaatAl()) return;

    let swatchComponents = document.getElementById("swatchComponents");
    let favoriet = buildSwatchComponent();
    swatchComponents.appendChild(favoriet);

    bewaarFavorietenInLokaleOpslag();
};

const favorietBestaatAl = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    let swatchComponents = document.getElementById("swatchComponents");
    let favorieten = swatchComponents.getElementsByClassName("swatch");

    for (let i = 0; i < favorieten.length; i++) {
        let favoriet = favorieten[i];
        if (
            favoriet.getAttribute("data-red") === red &&
            favoriet.getAttribute("data-green") === green &&
            favoriet.getAttribute("data-blue") === blue
        ) {
            return true;
        }
    }
    return false;
};

const configureSwatch = (swatch) =>{
    let red = document.getElementById("sldRed").value;
    swatch.setAttribute("data-red", red);

    let green = document.getElementById("sldGreen").value;
    swatch.setAttribute("data-green", green);

    let blue = document.getElementById("sldBlue").value;
    swatch.setAttribute("data-blue", blue);

    swatch.style.background = "rgb(" + red + "," + green + "," + blue + ")";
};

const buildSwatchComponent = () =>{
    let swatch = document.createElement("div");
    let btnDelete = document.createElement("input");

    swatch.className = "swatch";
    configureSwatch(swatch);
    swatch.addEventListener("click", setColorPickerFromSwatch);

    btnDelete.setAttribute("type", "button");
    btnDelete.setAttribute("value", "X");
    btnDelete.addEventListener("click", deleteSwatch);

    swatch.appendChild(btnDelete);
    return swatch;
};

const setColorPickerFromSwatch = (event) =>{
    let swatch = event.target;

    let red = swatch.getAttribute("data-red");
    document.getElementById("sldRed").value = red;

    let green = swatch.getAttribute("data-green");
    document.getElementById("sldGreen").value = green;

    let blue = swatch.getAttribute("data-blue");
    document.getElementById("sldBlue").value = blue;

    update();
};

const deleteSwatch = (event) =>{
    let swatchComponents = document.getElementById("swatchComponents");
    let button = event.target;
    let swatch = button.parentNode;
    swatchComponents.removeChild(swatch);

    event.stopPropagation();

    bewaarFavorietenInLokaleOpslag();
};

const update = () =>{
    let red = document.getElementById("sldRed").value;
    document.getElementById("lblRed").innerHTML = red;

    let green = document.getElementById("sldGreen").value;
    document.getElementById("lblGreen").innerHTML = green;

    let blue = document.getElementById("sldBlue").value;
    document.getElementById("lblBlue").innerHTML = blue;

    let swatch = document.getElementById("swatch");
    swatch.style.background = "rgb(" + red + "," + green + "," + blue + ")";

    bewaarSchuifbalkenInLokaleOpslag();
};

const bewaarSchuifbalkenInLokaleOpslag = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    let schuifbalken = {
        red: red,
        green: green,
        blue: blue
    };

    localStorage.setItem(global.OPSLAG_SCHUIFBALKEN, JSON.stringify(schuifbalken));
};

const herstelSchuifbalkenUitLokaleOpslag = () => {
    let tekst = localStorage.getItem(global.OPSLAG_SCHUIFBALKEN);
    if (!tekst) return;

    let schuifbalken = JSON.parse(tekst);
    if (!schuifbalken) return;

    if (schuifbalken.red !== undefined) document.getElementById("sldRed").value = schuifbalken.red;
    if (schuifbalken.green !== undefined) document.getElementById("sldGreen").value = schuifbalken.green;
    if (schuifbalken.blue !== undefined) document.getElementById("sldBlue").value = schuifbalken.blue;
};

const bewaarFavorietenInLokaleOpslag = () => {
    let swatchComponents = document.getElementById("swatchComponents");
    let favorieten = swatchComponents.getElementsByClassName("swatch");

    let lijst = [];
    for (let i = 0; i < favorieten.length; i++) {
        let favoriet = favorieten[i];
        let red = favoriet.getAttribute("data-red");
        let green = favoriet.getAttribute("data-green");
        let blue = favoriet.getAttribute("data-blue");
        lijst.push({ red: red, green: green, blue: blue });
    }

    localStorage.setItem(global.OPSLAG_FAVORIETEN, JSON.stringify(lijst));
};

const herstelFavorietenUitLokaleOpslag = () => {
    let tekst = localStorage.getItem(global.OPSLAG_FAVORIETEN);
    if (!tekst) return;

    let lijst = JSON.parse(tekst);
    if (!Array.isArray(lijst)) return;

    let swatchComponents = document.getElementById("swatchComponents");

    for (let i = 0; i < lijst.length; i++) {
        let bestaatAl = false;
        let huidige = swatchComponents.getElementsByClassName("swatch");
        for (let j = 0; j < huidige.length; j++) {
            if (
                huidige[j].getAttribute("data-red") === String(lijst[i].red) &&
                huidige[j].getAttribute("data-green") === String(lijst[i].green) &&
                huidige[j].getAttribute("data-blue") === String(lijst[i].blue)
            ) {
                bestaatAl = true;
            }
        }
        if (!bestaatAl) {
            let swatch = document.createElement("div");
            let btnDelete = document.createElement("input");

            swatch.className = "swatch";
            swatch.setAttribute("data-red", lijst[i].red);
            swatch.setAttribute("data-green", lijst[i].green);
            swatch.setAttribute("data-blue", lijst[i].blue);
            swatch.style.background = "rgb(" + lijst[i].red + "," + lijst[i].green + "," + lijst[i].blue + ")";
            swatch.addEventListener("click", setColorPickerFromSwatch);

            btnDelete.setAttribute("type", "button");
            btnDelete.setAttribute("value", "X");
            btnDelete.addEventListener("click", deleteSwatch);

            swatch.appendChild(btnDelete);
            swatchComponents.appendChild(swatch);
        }
    }
};

window.addEventListener("load", initialize);
