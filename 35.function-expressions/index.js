// // function declaration = define a reusable block of code that performs a specific task

// function hello1() {
//     console.log("Hello");
// }
// // hello1();

// // function expression = a way to define functions as values or variables

// const hello2 = function() {
//     console.log("Hello");
// }
// // hello2();

// setTimeout(function() {
//     console.log("Hello!");
// }, 3000);

const numbers = [1,2,3,4,5,6];

const squares = numbers.map(function(element){
    return element ** 2;
});
console.log(squares);

const cubes = numbers.map(function(element) {
    return element ** 3;
});
console.log(cubes);

const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});
const oddNums = numbers.filter(function(element){
    return element % 2 === 1;
});
console.log(evenNums + "\n" + oddNums);

const total = numbers.reduce(function(element1, element2){
    return element1 + element2;
});
console.log(total);