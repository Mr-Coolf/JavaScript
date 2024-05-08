const fruits = [
    {name:"apple", color: "red", calories: 95},
    {name:"orange", color: "orange", calories: 45},
    {name:"banana", color: "yellow", calories: 105},
    {name:"coconut", color: "white", calories: 159},
    {name:"pineapple", color: "yellow", calories: 37},
];

fruits.push({name:"grapes", color:"green", calories: 63}); // add new element
fruits.pop(5); // pop by id
fruits.splice(1, 2); // delete all elements between 1 and 2
fruits.push({name:"banana", color: "yellow", calories: 105});
//  ----- forEach() -----

// fruits.forEach(fruit => console.log(fruit.name));

// ----- map() -----
const fruitNames = fruits.map(fruit => fruit.name);
// console.log(fruitNames);

const fruitColours = fruits.map(fruit => fruit.color);
// console.log(fruitColours);

// ----- filter() -----

// const yellowFruits = fruits.filter(fruit => fruit.color =="yellow")
// console.log(yellowFruits); 
// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// console.log(lowCalFruits); 

// ----- reduce() -----
const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
console.log(maxFruit);
const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);
console.log(minFruit);

// console.log(fruits);