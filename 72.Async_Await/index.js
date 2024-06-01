//  Async/Await = Async = makes a function return a promise
//                Await = makes an async function wait for a promise

//                Allows you write asynchronous code in a synchronous manner
//                Async doesn't have resolve or reject parameters
//                Everything after Await is placed in an event queue 

function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const slept = true;
            if (slept) {
                resolve("You have been sleeping for 1.5s");
            } else {
                reject("You didn't sleep");
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
            reject("You didn't go to school");
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
            reject("You didn't attend training. What a shame."); 
        }
    })
}

// await is only valid in async functions
async function liveADay() {
    try {
        const sleepResult = await sleep();
        console.log(sleepResult);

        const goToSchoolResult = await goToSchool();
        console.log(goToSchoolResult);

        const goToTrainingResult = await goToTraining();
        console.log(goToTrainingResult);

        console.log("You've lived a day!");
    } catch (error) {
        console.error(error);        
    }
    
}


// sleep().then(value => {console.log(value); return goToSchool()})
//        .then(value => {console.log(value); return goToTraining();})
//        .then(value => {console.log(value); console.log("We're done!");})
//        .catch(error => console.error(error));

liveADay();