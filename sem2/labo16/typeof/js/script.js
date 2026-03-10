const setup = () => {

    const values = [ 34, 0.12, true, new Date(), (message) => console.log(message) ];

    const string = document.getElementsByTagName("p");

    for (let i = 0; i < string.length; i++) {
        string[i].innerHTML += "<strong>    ==> typeof: " + typeof values[i] + "</strong>";
    }
};
window.addEventListener("load", setup);