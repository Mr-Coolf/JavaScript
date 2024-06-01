// DOM navigation = the process of navigating through the structure of an HTML document using JS.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// -------   .firstElementChild      -------

const element = document.getElementById("fruits");
const firstElementChild = element.firstElementChild;
firstElementChild.style.backgroundColor = "yellow";

const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    ulElement.firstElementChild.style.color = "brown";
});

// -------   .lastElementChild       -------

const element1 = document.getElementById("fruits");
const firstElementChild1 = element1.lastElementChild;
firstElementChild1.style.backgroundColor = "gray";

const ulElements1 = document.querySelectorAll("ul");

ulElements.forEach(ulElement1 => {
    ulElement1.lastElementChild.style.color = "blue";
});

// -------   .nextElementSibling     -------

const element2 = document.getElementById("apple");
const nextElementSibling = element2.nextElementSibling;
nextElementSibling.style.fontSize = "2em";

// -------   .previousElementSibling -------

const element3 = document.getElementById("onions");
const previousElementSibling = element3.previousElementSibling;
previousElementSibling.style.padding = "5px 5px";

// -------   .parentElement          -------

const element4 = document.getElementById("ice cream");
const parentElement = element4.parentElement;
parentElement.style.border = "2px solid black";

// -------   .children               -------
// returns HTML collection
const element5 = document.getElementById("desserts");
const children = element5.children;

Array.from(children).forEach(child => {
    child.style.margin = "6px 6px";
    child.style.backgroundColor = "lightgray";
});