// arrow functions = a concise way to write expressions;
//                   good for simple functions that you use once;
//                   (parameters) => some code

// function hello() {
//     console.log("Hello!");
// }

// const hello = function() {
//     console.log("Hello!");
// }

// const hello = (name, age) => {
//     console.log(`Hello, ${name}!`);
//     console.log(`You are ${age} years old.`);
// }
// hello("batman", 25);

// setTimeout(() => {
//     console.log("Hello!");
// }, 3000);

const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element) => element ** 2);
console.log(squares);

const cubes = numbers.map((element) => element ** 3);
console.log(cubes);

const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 === 1);
console.log(evenNums + "\n" + oddNums);

const total = numbers.reduce((element1, element2) => element1 + element2);
console.log(total);