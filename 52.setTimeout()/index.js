// setTimeout() = function in JS that allows you to schedule the execution of a function after an amount of time (milliseconds)
//                Times are approximate(varies based on the workload of the JS runtime environment)
//                setTimeout(callback, delay);

// function sayHello() {
//     console.log("Hello!");
// }

// setTimeout(sayHello, 3000);
// setTimeout(function() {
//     console.log("Hello!");
// }, 3000);
// setTimeout(() => {
//     console.log("Hello!");
// }, 3000);

// const timeoutId = setTimeout(() => {
//     console.log("Hello!");
// }, 3000);
// clearTimeout(timeoutId);


let timeoutId;
function startTimer() {
    timeoutId = setTimeout(() => {
        window.alert("Hello!");
    }, 3000);
    console.log("Started");
}

function clearTimer() {
    clearTimeout(timeoutId);
    console.log("Cancelled");
}