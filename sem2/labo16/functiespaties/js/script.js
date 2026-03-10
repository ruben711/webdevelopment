const setup = () => {
    document.getElementById("button").addEventListener("click", print)
}

const maakSpaties = (inputText) => {
    return inputText.split("").join(" ");
}

const print = () => {
    let string = document.getElementById("input").value;
    let split = maakSpaties(string);
    document.getElementById("output").textContent = split;
    console.log(split);
}


window.addEventListener("load", setup)