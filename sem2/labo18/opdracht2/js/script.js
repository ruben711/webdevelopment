const setup = () => {
    const listItem = document.querySelectorAll('li');
    listItem.forEach(item => {
        item.setAttribute("class", "listitem");
    })



    const style = document.createElement("style")
    style.innerText = ".listitem {color: red;}";
    document.head.appendChild(style);

    const image = document.createElement("img");
    image.setAttribute("src", "image/foto.png");
    image.setAttribute("alt", "een afbeelding");
    document.body.appendChild(image);
}

window.addEventListener('load', setup)
