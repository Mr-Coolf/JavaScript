// rest parameters => ...
// opposite of spread operator

// const food1 = "pizza";
// const food2 = "hotdog";
// const food3 = "sushi";
// const food4 = "potato";
// const food5 = "ramen";

// function openFridge(...foods){
//     console.log(...foods);
// }

// function getFood(...foods){
//     return foods;
// }

// openFridge(food1, food2, food3, food4, food5);

// const foods = getFood(food1, food2, food3, food4, food5);
// console.log(foods);


// function sum(...numbers) {
//     let result = 0;
//     numbers.forEach(element => {
//         result += element;
//     });
//     return(result);
// }

// const total = sum(1,2,3,4,5,6);

// console.log(total);


// function getAverage(...numbers) {
//     let result = 0;
//     numbers.forEach(element => {
//         result += element;
//     });
//     return(result/numbers.length);
// }
// const average = getAverage(1,2,3,4,5,6,8,8,9,9);
// console.log(average);


function combineStrings(...strings){
    return strings.join(" ");
}
const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "|||");
console.log(fullName);
