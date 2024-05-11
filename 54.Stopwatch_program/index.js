// Program

let startTime, endTime, elapsedTime;
elapsedTime = 0;
let elapsedHours, elapsedMinutes, elapsedSeconds, elapsedMilliseconds;
let isRunning = false;
let timer = null
const stopwatchClock = document.getElementById("stopwatch-clock"); 

function start() {
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        isRunning = true;
        timer = setInterval(update, 10);
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    isRunning = false;
    clearInterval(timer);
    elapsedTime = 0;
    stopwatchClock.textContent = "00:00:00:00"
}

function update() {
    elapsedTime = (Date.now() - startTime);
    
    elapsedHours = Math.floor(((elapsedTime / (1000 * 60 * 60)) % 60)).toFixed(0).toString().padStart(2, 0);
    elapsedMinutes = Math.floor(((elapsedTime / (1000 * 60)) % 60)).toFixed(0).toString().padStart(2, 0);
    elapsedSeconds = Math.floor(((elapsedTime / 1000) % 60)).toFixed(0).toString().padStart(2, 0);
    elapsedMilliseconds = elapsedTime.toString().slice(elapsedTime.toString().length-3, elapsedTime.toString().length - 1).padStart(2, 0);

    stopwatchClock.textContent = `${elapsedHours}:${elapsedMinutes}:${elapsedSeconds}:${elapsedMilliseconds}`;
}