const PI = 3.141592653589793;
let radius;
let result;


// radius = Number(window.prompt("Enter circle radius"))
document.getElementById("myButton").onclick = function () {
    radius = Number(document.getElementById("myInput").value);

    result = 2 * PI * radius;

    document.getElementById("myH2").textContent = `The result is ${result} cm`
}


// console.log(result);

