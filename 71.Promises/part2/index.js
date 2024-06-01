// Promise = An Object that manages asynchronous operations
//           Wrap a Promise Object around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve, reject) => {asynchronous code})

function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const slept = true;
            if (slept) {
                resolve("You have been sleeping for 1.5s");
            } else {
                reject("You didn't sleep")
            }
        }, 1500);
    });
}
function goToSchool() {
    return new Promise((resolve, reject) => {
        const schoolAttended = false;
        if (schoolAttended) {
            setTimeout(() => {
                resolve("You've been to school");
            }, 2500);    
        } else {
            reject("You didn't go to school")
        }
    });
}
function goToTraining() {
    return new Promise((resolve, reject) => {
        const trainingAttended = true;
        if (trainingAttended) {
            setTimeout(() => {
                resolve("Training!! YAY!!!");
            }, 500);            
        } else {
            reject("You didn't attend training. What a shame.")    
        }
    })
}

sleep().then(value => {console.log(value); return goToSchool()})
       .then(value => {console.log(value); return goToTraining();})
       .then(value => {console.log(value); console.log("We're done!");})
       .catch(error => console.error(error));

// In case of error program stops