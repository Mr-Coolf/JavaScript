let buttons = document.querySelectorAll(".myBtns");

buttons.forEach(button => {
    button.classList.add("enabled");
    button.addEventListener("mouseover", event => {
        if(event.target.classList.contains("enabled")) event.target.classList.toggle("hover");
    });
    button.addEventListener("mouseout", event => {if(event.target.classList.contains("enabled")) event.target.classList.toggle("hover");});
    button.addEventListener("click", event => {
        if (event.target.classList.contains("disabled")) {
            event.target.textContent += '😡';
        } else{
            event.target.classList.replace("enabled", "disabled");
            event.target.classList.remove("hover");
        }
    })
});
