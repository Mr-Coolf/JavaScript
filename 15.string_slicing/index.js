// const fullName = "abcdefghijklmnop qrstuvwxyz";

// const firstName = fullName.slice(0, fullName.indexOf(" "));
// const secondName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(`Your name is ${firstName} \nYour surname is ${secondName}`);

const email = "anbddgioudsuhg@gmail.com"

let username = email.slice(0, email.indexOf('@'));
console.log(username)

let extension = email.slice(email.indexOf("@") + 1, email.length);
console.log(extension);