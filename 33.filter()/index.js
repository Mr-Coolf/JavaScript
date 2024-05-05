// .filter() - creates a new array by filtering out elements

// let number = [1,2,3,4,5,6,7]

// function isEven(element) {
//     return element % 2 === 0;
// }

// let evenNumbers = number.filter(isEven);
// console.log(evenNumbers);

// function isOdd(element) {
//     return element % 2 === 1;
// }

// let oddNumbers = number.filter(isOdd);
// console.log(oddNumbers);


// const ages = [16, 17, 18, 19, 20, 60];
// function isAdult(element) {
//     return element >= 18;
// }

// function isChild(element) {
//     return element < 18;
// }
// const adults = ages.filter(isAdult);
// console.log(adults);
// const children = ages.filter(isChild);
// console.log(children);


const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"]

function getLongWords(element) {
    return element.length > 6;
}
function getShortWords(element) {
    return element.length <= 6;
}

let shortWords = words.filter(getShortWords);
console.log(shortWords);
let longWords = words.filter(getLongWords);
console.log(longWords);
