// eventListener = Listen for specific events to create interactive web pages 
//               = events: keydown, keyup {, keypress(not compatible with all browsers)}
//               = document.addEventListener(event, callback);

const box = document.getElementById("box");
// let x = box.
let x = 20;
let y = 20;
let [arrowDown, arrowUp, arrowLeft, arrowRight] = [false, false, false, false];
const moveAmount = 5;

document.addEventListener("keydown", event => {
    switch (event.key) {
        case "ArrowDown":  
            arrowDown = true;          
            break;
        case "ArrowUp":
            arrowUp = true;            
            break;
        case "ArrowLeft":
            arrowLeft = true;            
            break;
        case "ArrowRight":
            arrowRight = true;            
            break;
        default:
            break;
    }
    // console.log(box.style.left);

});
document.addEventListener("keyup", event => {
    if (event.key == "ArrowDown") arrowDown = false; 
    if (event.key == "ArrowUp") arrowUp = false; 
    if (event.key == "ArrowLeft") arrowLeft = false;
    if (event.key == "ArrowRight")arrowRight = false;
    // console.log(event.key);
});

setInterval(() => {
    if (arrowDown) y+=moveAmount;
    if (arrowUp) y-=moveAmount;
    if (arrowLeft) x-=moveAmount;
    if (arrowRight) x+=moveAmount;
    // console.log(`${x} ${y}`);
    if (y<10) y = 10;
    if(y>window.innerHeight-200-40)y=window.innerHeight-200-40;
    if (x<10) x = 10;
    if(x>window.innerWidth-200-40)x=window.innerWidth-200-40;
    console.log(x);
    box.style.top = `${y}px`;
    box.style.left = `${x}px`;
}, 30);

