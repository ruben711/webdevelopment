const setup = () => {
    const Pelement = document.querySelectorAll(".TeVeranderen");
    Pelement[0].innerText = "Goed gedaan!"
}

window.addEventListener("load", setup);