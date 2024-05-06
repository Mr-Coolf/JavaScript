// destructuring = extract values from arrays and objects, then assign them to variables in a convenient way
//                [] = to perform array destructuring
//                {} = to perform object destructuring

// ----- EXAMPLE 1 -----
//  SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a]
console.log(a + " " + b);

// ----- EXAMPLE 2 -----
//  SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

// ----- EXAMPLE 3 -----
//  ASSIGN ARRAY ELEMENTS TO VARIABLES

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor + " " + secondColor + " " + thirdColor + " " + extraColors);

// ----- EXAMPLE 4 -----
//  EXTRACT VALUES FROM OBJECTS

const person1 = {
    firstName: "Spongebob",
    secondName: "SquarePants",
    age: 30,
    job: "Fry Cook",
}
const person2 = {
    firstName: "Patrick",
    secondName: "Star",
    age: 34,
}
const {firstName, secondName, age, job="Unemployed"} = person2;
console.log(firstName, secondName, age, job);

// ----- EXAMPLE 5 -----
//  DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName="", secondName="", age=0, job="Unemployed"}) {
    console.log(`Hello ${firstName + " " + secondName}. You are ${age} years old and your work status is ${job}.`);
}
displayPerson(person1);
displayPerson(person2);