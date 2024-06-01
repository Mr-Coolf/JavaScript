// Promise = An Object that manages asynchronous operations
//           Wrap a Promise Object around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. SLEEP
// 2. GO TO SCHOOL
// 3. GO TO TRAINING

function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You have been sleeping for 1.5s");
        }, 1500);
    });
}
function goToSchool() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You've been to school");
        }, 2500);    
    });
}
function goToTraining() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Training!! YAY!!!");
        }, 500);            
    })
}
// sleep(() => {
//     goToSchool(() =>{
//         goToTraining(() =>{
//             console.log("Day done! Get ready for the next one!");
//         })
//     });
// });


sleep().then(value => {console.log(value); return goToSchool()})
       .then(value => {console.log(value); return goToTraining();})
       .then(value => {console.log(value); console.log("We're done!");});
