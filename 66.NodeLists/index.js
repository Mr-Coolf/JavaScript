//  NodeList = Static collection of HTML elements by (id, class, element)
//           = Can be created using querySelectorAll()
//           = Similar to an array, but no (map, filter, reduce) has forEach()
//           = NodeList won't update automatically to reflect changes

let buttons = document.querySelectorAll(".myBtns");
// console.log(buttons);

// ADD HTML/CSS PROPERTIES

buttons.forEach(button => {
    button.style.backgroundColor = "tomato";
    button.textContent += "🤣";

});

// CLICK EVENT LISTENER + MOUSEOVER + MOUSEOUT

buttons.forEach(button =>{
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "hsl(9, 100%, 50%)";
        // console.log(event.target.style.backgroundColor);
        setTimeout(() => {
            button.style.backgroundColor = "tomato";
        }, 1000);
    });
    button.addEventListener("mouseover", event =>{
        // console.log(event.target.style.backgroundColor);
        if (event.target.style.backgroundColor != "rgb(255, 38, 0)") {
            event.target.style.backgroundColor = "hsl(9, 100%, 55%)";
        }
    })
    button.addEventListener("mouseout", event =>{
        if (event.target.style.backgroundColor != "rgb(255, 38, 0)") {
            event.target.style.backgroundColor = "hsl(9, 100%, 64%)";
        }
    })
    
});


//  ADD ELEMENT TO A NODELIST

// STEP 1
const newBtn = document.createElement("button");

// STEP 2
newBtn.textContent = "Button 5";
newBtn.classList = "myBtns";

// STEP 3
document.body.appendChild(newBtn);

console.log(buttons); // still 4 elements because NodeList static

buttons = document.querySelectorAll(".myBtns");

console.log(buttons); // 5 elements because it's updated

// REMOVE ELEMENT 

buttons.forEach(button => {
    button.ondblclick = () => {button.remove(); console.log(buttons); buttons = document.querySelectorAll(".myBtns");};
    
});