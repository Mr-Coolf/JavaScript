const newListItem = document.createElement("li");

newListItem.textContent = "coconut";
newListItem.style.fontFamily = "monospace";
newListItem.style.textAlign = "center";
newListItem.style.fontWeight = 900;

// (document.body.firstElementChild).append(newListItem);

const orange  = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem, orange);

setTimeout(() => {
    document.getElementById("fruits").removeChild(newListItem);
}, 3000);