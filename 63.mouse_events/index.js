//  eventListener = Listen for specific events to create interactive web pages
//                  events: click, mouseover, mouseout
//                  .addEventListener(event, callback);

const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");

myBox.style.backgroundColor = "lightgreen";
myBox.textContent = "Click me!\n😀";

myBtn.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH!\n\n\n\n🤕";
}); // event is provided
myBtn.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = `Don't do it!\n😨`;
}); // event is provided
myBtn.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click me!\n😀";
}); // event is provided
// myBtn.addEventListener("click", event => {
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH!\n\n\n\n🤕";
// }); // event is provided
// myBtn.addEventListener("mouseover", event => {
//     event.target.style.backgroundColor = "yellow";
//     event.target.textContent = `Don't do it!\n😨`;
// }); // event is provided
// myBtn.addEventListener("mouseout", event => {
//     event.target.style.backgroundColor = "lightgreen";
//     event.target.textContent = "Click me!\n😀";
// }); // event is provided