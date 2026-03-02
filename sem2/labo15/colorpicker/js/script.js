const setup = () => {

let slider1 = document.getElementsByClassName("slider1");
let slider2 = document.getElementsByClassName("slider2");
let slider3 = document.getElementsByClassName("slider3");

slider1[0].addEventListener("change", update1);
slider1[0].addEventListener("input", update1);
slider2[0].addEventListener("change", update2);
slider2[0].addEventListener("input", update2);
slider3[0].addEventListener("change", update3);
slider3[0].addEventListener("input", update3);

slider1[0].addEventListener("change",rgb);
slider1[0].addEventListener("input",rgb);
slider2[0].addEventListener("change",rgb);
slider2[0].addEventListener("input",rgb);
slider3[0].addEventListener("change",rgb);
slider3[0].addEventListener("input",rgb);
}
const update1 = () => {
    let sliders = document.getElementsByClassName("slider1");
    let value=sliders[0].value;
    let kleur = document.getElementById("kleur1");
    kleur.innerHTML = value
}
const update2 = () => {
    let sliders = document.getElementsByClassName("slider2");
    let value=sliders[0].value;
    let kleur = document.getElementById("kleur2");
    kleur.innerHTML = value;
}
const update3 = () => {
    let sliders = document.getElementsByClassName("slider3");
    let value=sliders[0].value;
    let kleur = document.getElementById("kleur3")
    kleur.innerHTML = value;
}
const rgb = () => {
    let kleur = document.getElementsByClassName("kleur");
    let slider1 = document.getElementsByClassName("slider1");
    let r = slider1[0].value;
    let slider2 = document.getElementsByClassName("slider2");
    let g = slider2[0].value;
    let slider3 = document.getElementsByClassName("slider3");
    let b = slider3[0].value;
    kleur[0].style.backgroundColor = 'rgb('+r+','+g+','+b+')';
}
window.addEventListener("load", setup);