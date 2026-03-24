const setup = () => {
    document.querySelector("button").addEventListener("click", toevoegenP);

}

const toevoegenP = () => {
    const p = document.createElement("p");
    p.textContent = "Toegevoegde paragraaf";
    document.querySelector("#myDIV").appendChild(p);
}

window.addEventListener('load', setup)
