// function happyBDay(name, age) {
//     console.log("Happy bday to u");
//     console.log("Happy bday to u");
//     console.log("Happy bday");
//     console.log("Happy bday");
//     console.log(`Happy bday dear ${name}`);
//     console.log(`Happy bday to u ${age} years old ass`);
// }
// happyBDay("abc", 22);

// function add(x, y) {
//     return x+y;
// }
// console.log(add(0.1,0.2));
// function subtract(x, y) {
//     return x-y;
// }
// console.log(subtract(2,3));
// function multiply(x, y) {
//     return x*y;
// }
// console.log(multiply(2,3));
// function divide(x, y) {
//     return x/y;
// }
// console.log(divide(2,3));

// function isEven(x) {
//     return x%2===0 ? true: false;
// }
// console.log(isEven(112));

function isValidEmail(email) {
    return (email.includes("@") && email.slice(email.indexOf("@")).includes(".") && email.slice(0, email.indexOf("@")).length > 0) ? true: false;
}
console.log(isValidEmail("a@gmail.com"))