// let username = "";
// do{
//     username = window.prompt("Input your username:");
//     username === "" ? console.log("You didn't enter your name") : null;
// } while (username === "" || username === null)
// console.log(`Hello ${username}`);

let loggedIn = "false";
let username;
let password;

while (!loggedIn) {
    username = window.prompt("Enter your username");
    password = window.prompt(`Enter your password`);

    if (username === "abc" && password==="123"){
        loggedIn = true;
        console.log("You are logged in");
    }
    else {
        console.log("L bozo")
    }

}