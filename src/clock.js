const clockContainner = document.querySelector(".js-clock"),
    clockTitle = document.querySelector("h1");

function getTime(){
    const date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
    clockTitle.innerText = `${hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`;
}

function init () {
    getTime()
    setInterval(getTime,1000)
}

init();