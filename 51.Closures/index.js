//  closure = A function defined inside of another function, the inner function has access to the variables and scope of the outer function.
//            Allow for private variables and state maintenance
//            Use frequently in JS frameworks: React, Vue, Angular

// function outer() {
//     let message = "Hello";
//     function inner() {
//         console.log(message);
//     }
//     inner();
// }

// outer();


// function createCounter() {
//     let count = 0;
//     function increment() {
//         count++;
//         console.log(`Count increased to ${count}`);
//     }

//     function getCount() {
//         return count;
//     }

//     return {increment, getCount};
// }

// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`Counter is: ${counter.getCount()}`);


function newScore() {
    let score = 0;

    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }   
    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }   
    function getScore() {
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

let score1 = newScore();

score1.increaseScore(10);
score1.increaseScore(150);
score1.increaseScore(12);

score1.decreaseScore(2);
score1.decreaseScore(100);
score1.decreaseScore(25);

console.log(score1.getScore());