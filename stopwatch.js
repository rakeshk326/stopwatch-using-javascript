const startbtn = document.querySelector('.start');
const stopbtn = document.querySelector('.stop');
const resetbtn = document.querySelector('.reset');
const timedisplay = document.querySelector('.time');

startbtn.addEventListener('click', starting);
stopbtn.addEventListener('click', stopping);
resetbtn.addEventListener('click', resetting);

let intervalId = null;
let hours = 0;
let minutes = 0;
let seconds = 0;

function stopwatch() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }

    if (hours >= 24) {
        hours = 0;
    }

    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedHours = hours < 10 ? "0" + hours : hours;

    timedisplay.innerHTML = `${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;
}

function starting() {

    if(intervalId !== null) {
        clearInterval(intervalId);   
    }

    intervalId = setInterval(stopwatch, 1000);
}

function stopping() {
    
    clearInterval(intervalId);
}

function resetting() {
    
    clearInterval(intervalId);
    hours = 0;
    minutes = 0;
    seconds = 0;
    timedisplay.innerHTML = "00 : 00 : 00";
}
