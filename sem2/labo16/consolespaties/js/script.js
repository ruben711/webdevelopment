const setup = () => {
    document.getElementById("button").addEventListener("click", print)
}

const print = () => {
    let string = document.getElementById("input").value
    let split = string.split("").join(" ");
    console.log(split);
}


window.addEventListener("load", setup)