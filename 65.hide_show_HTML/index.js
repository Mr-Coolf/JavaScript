const myImg = document.getElementById("myImg");
const myBtn = document.getElementById("myBtn");
let isHidden = false;

myBtn.addEventListener("click", event => {
    // console.log(myImg.style.display);
    if(isHidden) {
        // myImg.style.display = "";
        myImg.style.visibility = "visible";        
        myBtn.textContent = "Hide";
        isHidden = false;
    }
    else {
        // myImg.style.display = "none";
        myImg.style.visibility = "hidden"; 
        myBtn.textContent = "Show";
        isHidden = true;
    }
});