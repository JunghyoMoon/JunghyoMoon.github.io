const body = document.querySelector("body");

const IMAGES = 8;

function paintBG(imgNumber) {
    const image = new Image();
    image.src = `./images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandomNum(input) {
    const number = Math.floor(Math.random() * input);
    return number;
}

function init() {
    const randomNumber = genRandomNum(IMAGES);
    paintBG(randomNumber);
}

init();