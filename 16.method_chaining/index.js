let username = window.prompt("Enter your username:");
username = username.trim();
username = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
console.log(username);