"use strict";


const deadline = "2023-11-20T13:40:55.000Z";

const setTimeRemaining = function (endtime) {
    const time = Date.parse(endtime) - Date.parse(new Date());
    const day = Math.floor(time / (1000 * 60 * 60 * 24));
    const hour = Math.floor(time / (1000 * 60 * 60) % 24);
    const minute = Math.floor((time / 1000 / 60) % 60);
    const second = Math.floor((time / 1000) % 60);

    if (time < 0) {
        day = 0;
        hour = 0;
        minute = 0;
        second = 0;
    }

    return { time, day, hour, minute, second }
}

const getZero = function (num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

const setClock = function (selector, endtime) {
    const timer = document.querySelector(selector),
        days = timer.querySelector("#days"),
        hours = timer.querySelector("#hours"),
        minutes = timer.querySelector("#minutes"),
        seconds = timer.querySelector("#seconds"),
        timeInterval = setInterval(updateClock, 1000);

    updateClock();
    function updateClock() {
        const timeSet = setTimeRemaining(endtime);

        days.textContent = getZero(timeSet.day);
        hours.textContent = getZero(timeSet.hour);
        minutes.textContent = getZero(timeSet.minute);
        seconds.textContent = getZero(timeSet.second);

        if (timeSet.time <= 0) {
            clearInterval(timeInterval);
        }
    }

}

setClock(".timer", deadline);
