const setup = () => {
    const woorden = document.getElementById("output");

    const woord = "onoorbaar";
    const trigrams = [];

    for (let i = 0; i <= woord.length - 3; i++) {
        trigrams.push(woord.substring(i, i + 3));
    }

    woorden.textContent = trigrams.join(" - ");
};

window.addEventListener("load", setup);