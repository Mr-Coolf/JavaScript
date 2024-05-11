// Error = an object that is created to represent a problem that occurs
//         Occur often with user input or establishing a connections

// try { } = encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up ex. close files, close connections, release resources



// try {
//     console.log("");
//     // NETWORK ERRORS
//     // PROMISE REJECTION
//     // SECURITY ERROR
// } catch (error) {
//     console.error(error);
// }
// finally{
//     // CLOSE FILES
//     // CLOSE CONNECTIONS
//     // RELEASE RESOURCES
//     console.log("This always executes");

// }

// console.log("You have reached the end!");


try {
    const dividend = Number(window.prompt("Enter a dividend"));
    const divisor = Number(window.prompt("Enter a divisor"));

    if (divisor == 0) {
        throw new Error("You can't divide by zero!");
    }
    if (isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be numbers");

    }

    console.log(dividend / divisor);
    1
} catch (error) {
    console.error(error);
}


