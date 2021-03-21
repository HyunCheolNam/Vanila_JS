const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOW_CLASS = "showing";


function saveName(text) {
    localStorage.setItem(USER_LS,text);
}

function handleSubmint(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue)
}
function askForName() {
    form.classList.add(SHOW_CLASS);
    form.addEventListener("submit", handleSubmint);
}



function paintGreeting(text) {
    form.classList.remove(SHOW_CLASS);
    greeting.classList.add(SHOW_CLASS);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser===null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();