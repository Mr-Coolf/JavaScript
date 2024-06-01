//  DOM = DOCUMENT OBJECT MODEL
//        Object{} that represents the page you see in the web browser and provides you with an API to interact with it.
//        Web browser constructs the DOM when it loads an HTML document, and structures all the elements in a tree-like representation.
//        JS can access the DOM to dynamically change the content, structure and style of the page

console.dir(document);
// document.title = "5900";
document.body.style.backgroundColor = "hsl(0, 0%, 15%)"
const username = "abc";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username === "" ? `, guest`: `, ${username}`
welcomeMsg.style.color = "white";