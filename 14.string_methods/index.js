let userName = "En1y1       ";

console.log(userName.charAt(1));
console.log(userName.indexOf("1"));
console.log(userName.lastIndexOf("1"));
console.log(userName.length);

let newUsername = userName.trim();
console.log(newUsername);

console.log(newUsername.toUpperCase());
console.log(newUsername.toLowerCase());

console.log(newUsername.repeat(8));

console.log(newUsername.startsWith("En"));
console.log(newUsername.startsWith("Bn"));
console.log(newUsername.endsWith("1y1"));
console.log(newUsername.endsWith("1y2"));

let phoneNumber = "123-456-7890"
console.log(userName.includes(" "));
console.log(phoneNumber.replaceAll("-", " "))

console.log(phoneNumber.padStart(15, "0"))
console.log(phoneNumber.padEnd(15, "0"))