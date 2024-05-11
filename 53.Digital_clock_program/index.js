// Program
let now, hours, minutes, timeString;
const clockDiv = document.getElementById("clock");

function updateClock() {
    now = new Date();
    hours = now.getHours().toString().padStart(2, 0);
    minutes = now.getMinutes().toString().padStart(2, 0);
    seconds = now.getSeconds().toString().padStart(2, 0);

    timeString = `${hours}:${minutes}:${seconds}`;

    clockDiv.textContent = timeString;

}

updateClock();
setInterval(() => {
    updateClock();
}, 1000);