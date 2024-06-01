//  classList = Element property in JS used to interact with an element's list of classes (CSS classes)
//              Allows you to make reusable classes for many elements across your webpage.

// add()
// remove()
// toggle() Remove if present, add if not
// replace(oldClass, newClass)
// contains()

const myBtn = document.getElementById("myBtn");
const myH1 = document.getElementById("myH1");

// add()
myBtn.classList.add("enabled");
// myBtn.classList.remove("enabled");
myH1.classList.add("enabled");

myBtn.addEventListener("mouseover", event => {
    event.target.classList.add("hover"); // may be replaced by toggle()
});
myBtn.addEventListener("mouseleave", event => {
    event.target.classList.remove("hover"); // may be replaced by toggle()
})
myBtn.addEventListener("click", event => {
    if (event.target.classList.contains("disabled")) {
        event.target.textContent += "🥵";
    } else {
        event.target.classList.replace("enabled", "disabled");
    }
})
myH1.addEventListener("click", event => {
    if (event.target.classList.contains("disabled")) {
        event.target.textContent += "🥵";
    } else {
        event.target.classList.replace("enabled", "disabled");
    }
})