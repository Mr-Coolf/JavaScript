const colors = ["gray", "white", "blue", "black", "red"];
const colorChoosers = document.querySelectorAll(".chooser");
const outerChoosers = document.querySelectorAll(".outer");
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        outerChoosers[slideIndex].style.border = "5px solid hsla(196, 96%, 44%, 0.7)";
        intervalId = setInterval(nextSlide, 5000);    
    }
}

function showSlide(index) {
    if (index >= slides.length) {slideIndex = 0; index = 0;}
    else if (index<0)  {slideIndex = slides.length-1; index = slides.length-1;}
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    outerChoosers.forEach(outerChooser => {
        outerChooser.style.border = "none";
    });
    outerChoosers[index].style.border = "5px solid hsla(196, 96%, 44%, 0.7)";
    slides[index].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalId)
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function setImg(color) {
    slideIndex = colors.indexOf(color);
    showSlide(slideIndex);
    clearInterval(intervalId)
}