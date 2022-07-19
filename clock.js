// const { Console } = require("console");

var time = document.querySelector('.clock-body')
var one = document.getElementById('1')

setInterval(CurrentTime, 1000)
function CurrentTime() {
    let D = new Date();
    let hour = D.getHours();
    let min = D.getMinutes();
    let sec = D.getSeconds();
    let session = "P.M.";

    if (hour == 0) {
        hour = 12
    }
    if (hour == 12) {
        session = "";
        hour = hour - 12;
    }
    time.innerHTML = `${hour} : ${min < 10 ? `0${min}` : min} : ${sec < 10 ? `0${sec}` : sec} : ${session}`

    if (6 < hour < 12) {
        one.src = "morning.jpg"
    }
    if (12 < hour < 2) {
        one.src = "afternoon.jpg"
    }
    if (2< hour <5) {
        one.src = "evening.jpg"
    }
    else {
        one.src = "night.jpg"

    }


}

CurrentTime()