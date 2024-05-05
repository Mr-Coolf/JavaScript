// .map() = accept a callback and applies that function to each element of an array, then return a new array

// const numbers = [1,2,3,4,5];

// function square(element) {
//     return Math.pow(element, 2);
// }
// function cube(element) {
//     return Math.pow(element, 3);
// }

// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// console.log(squares);
// console.log(cubes);

// const students = ["Spongebob", "Patrick", "Squidward", "Sandy"]

// function upperCase(element) {
//     return element.toUpperCase();
// }

// const studentUpperCase = students.map(upperCase);
// console.log(studentUpperCase);


// function lowerCase(element) {
//     return element.toLowerCase();
// }

// const studentLowerCase = students.map(lowerCase);
// console.log(studentLowerCase);

const dates = ["2024-1-10", "2024-2-20", "2026-3-30"]

function formatDates(element) {
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

const formattedDates = dates.map(formatDates);
console.log(formattedDates)