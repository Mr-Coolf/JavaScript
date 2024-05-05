// // callback is a function that is passed as an argument to another function.

// // used to handle asynchronous operations
// // "When ur done im starting"
// /*
// */
// function hello(callback) {
//     console.log("Hello!");
//     callback();
// }
// /*
// function goodbye() {
//     console.log("Goodbye!");
// }

// hello(goodbye);
// */


// function leave() {
//     console.log("Leave!");
// }
// function wait() {
//     console.log("Wait!")
// }
// hello(leave);
// hello(wait);

function sum(callback, x, y) {
    let result = x+y;
    callback(result);
}

function displayResult(result) {
    console.log(result);
    
}
function displayDOM(result) {
    document.getElementById("myH1").textContent = result;
}
sum(displayDOM, 6, 495976);