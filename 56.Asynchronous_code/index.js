// synchronous  = executes line by line consecutively in a sequential manner
//                Code that waits for an operation to complete

// asynchronous = Allows multiple operations to be performed concurrently without waiting
//               Doesn't block the execution flow and allows the program to continue
//               (Input/Output operations, network requests, fetching data)
//               Handled with: Callbacks, Promises, Async/Await

function fn1(callback) {
    setTimeout(() => {
        console.log("Task 1");
        callback();
    }, 3000);
}

function fn2(){
    console.log("Task 2");
    console.log("Task 3");
}

fn1(fn2);