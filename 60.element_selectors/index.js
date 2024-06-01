//  element selectors = Methods used to target and manipulate HTML elements. They allow you to select one or multiple HTML elements from the DOM (Document Object Module)

//  1. document.getElementById()          // ELEMENT OR NULL
//  2. document.getElementsByClassName()  // HTML COLLECTION
//  3. document.getElementsByTagName()    // HTML COLLECTION
//  4. document.querySelector()           // FIRST ELEMENT OR NULL
//  5. document.querySelectorAll()        // NODELIST

const myHeading = document.getElementById("my-heading");
myHeading.style.display = "inline-block";
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";
myHeading.style.padding = "10px 10px";
// console.log(myHeading);

const fruits = document.getElementsByClassName("fruits");
fruits[0].style.fontSize = "50px";
for (const fruit of fruits) {
    fruit.style.backgroundColor = "orange";
}
Array.from(fruits).forEach(fruit => {
    fruit.style.border = "1px solid black";
    fruit.style.borderRadius = "20px";
});
// console.log(fruits);

const h4Elements = document.getElementsByTagName("h4");
Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.fontSize = "25px";
    h4Element.style.fontWeight = "900";
});
// console.log(h4Elements);
const liElements = document.getElementsByTagName("li");
for (const liElement of liElements) {
    liElement.style.fontFamily = "monospace";
    liElement.style.fontSize = "1.5em";
}

const element1 = document.querySelector(".fruits");// . to select by class
element1.style.color = "purple";
const element2 = document.querySelector("li");// . to select by class
element2.style.color = "orange";
// Null if doesn't exist

const foods = document.querySelectorAll(".fruits");
foods.forEach(food => {
    food.style.textAlign = "right";
});
foods[1].style.textAlign = "center";
