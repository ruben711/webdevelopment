const global = {
    huidigeKleur: "rgb(128, 128, 128)"
};

const setup = () => {
    const roodSlider = document.getElementsByClassName("rood_slider")[0];
    const groenSlider = document.getElementsByClassName("groen_slider")[0];
    const blauwSlider = document.getElementsByClassName("blauw_slider")[0];

    const roodValue = document.getElementById("rood_value");
    const groenValue = document.getElementById("groen_value");
    const blauwValue = document.getElementById("blauw_value");

    const colorBox = document.getElementById("color-box");

    const updateColor = () => {
        const r = roodSlider.value;
        const g = groenSlider.value;
        const b = blauwSlider.value;

        roodValue.textContent = r;
        groenValue.textContent = g;
        blauwValue.textContent = b;

        colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        global.huidigeKleur = `rgb(${r}, ${g}, ${b})`;
    };

    const opslaanKnop = document.createElement("button");
    opslaanKnop.textContent = "Save";
    document.querySelector(".container").insertAdjacentElement("afterend", opslaanKnop);

    const kleurVlakkenLijst = document.createElement("div");
    document.body.appendChild(kleurVlakkenLijst);

    opslaanKnop.addEventListener("click", () => {
        const r = roodSlider.value;
        const g = groenSlider.value;
        const b = blauwSlider.value;

        const kleurVlak = document.createElement("div");
        kleurVlak.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        kleurVlak.style.width = "100px";
        kleurVlak.style.height = "60px";
        kleurVlak.style.display = "inline-block";
        kleurVlak.style.position = "relative";
        kleurVlak.style.cursor = "pointer";

        kleurVlak.addEventListener("click", () => {
            roodSlider.value = r;
            groenSlider.value = g;
            blauwSlider.value = b;
            updateColor();
        });

        const verwijderKnop = document.createElement("button");
        verwijderKnop.textContent = "X";
        verwijderKnop.style.color = "red";
        verwijderKnop.style.position = "absolute";
        verwijderKnop.style.top = "0";
        verwijderKnop.style.right = "0";
        verwijderKnop.addEventListener("click", (e) => {
            e.stopPropagation();
            kleurVlak.remove();
        });

        kleurVlak.appendChild(verwijderKnop);
        kleurVlakkenLijst.appendChild(kleurVlak);
    });

    roodSlider.addEventListener("input", updateColor);
    groenSlider.addEventListener("input", updateColor);
    blauwSlider.addEventListener("input", updateColor);

    updateColor();
};

window.addEventListener("load", setup);