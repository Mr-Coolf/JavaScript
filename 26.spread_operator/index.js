// spread operator => ...


// let numbers = [1,2,3,4,5];
// let max = Math.max(...numbers);
// let min = Math.min(...numbers);

// console.log(numbers);
// console.log(...numbers);
// console.log(max);
// console.log(min);


// let username = "doigjsj sdogjso";
// // let letters = [...username].join("-");
// let letters = [...username];

// console.log(letters);


// let fruits = ["apple", "orange", "banana"]
// let newFruits = [...fruits];

// console.log(fruits);
// console.log(newFruits);


let fruits = ["apple", "orange", "banana"]
let vegetables = ["potatoes", "cucumbers", "potatoes"];

let newFruits = [...fruits, ...vegetables, "eggs", "milk"];

console.log(fruits);
console.log(newFruits);