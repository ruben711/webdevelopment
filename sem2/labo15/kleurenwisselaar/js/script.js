const setup = () => {

let buttons = document.getElementsByClassName("knop")

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", swapper);
    }
}
const swapper = (event) => {
    let button = event.currentTarget;

    if (button.style.backgroundColor === "blue") {
        button.style.backgroundColor = "white";
    }
    else {
        button.style.backgroundColor = "blue";
    }
}
window.addEventListener("load", setup);