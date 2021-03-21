const body = document.querySelector("body");

const IMG_NUM = 7;

function handleLoaded() {

}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber +1 }.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function getRandom() {
    const Number = Math.floor(Math.random()* IMG_NUM);
    return Number;
}

function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();