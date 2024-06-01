const newH1 = document.createElement("h1");

newH1.className = "myH1";
newH1.textContent = "I like pizza!";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

document.body.append(newH1);
document.getElementById("box1").append(newH1.cloneNode(true));
document.getElementById("box2").prepend(newH1.cloneNode(true));
document.body.prepend(newH1.cloneNode(true));

const box2 = document.getElementById("box4");
document.body.insertBefore(newH1.cloneNode(true), box2);

newH1.style.textAlign = "right";
newH1.style.color = "blue";

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1.cloneNode(true), boxes[2])


const h1s = Array.from(document.getElementsByClassName("myH1"));
setTimeout(() => {
    // console.log(h1s);

    h1s.forEach(elem => {
        (elem.parentElement).removeChild(elem);
    });
}, 3000);