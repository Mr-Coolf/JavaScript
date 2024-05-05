const numOfDice = document.getElementById("numOfDice");
const diceResult = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImages");
let values = [];
const dice = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"];
let images = [];
const root = document.querySelector(":root");
let delay = getComputedStyle(root).getPropertyValue("--transition-speed");
delay = Number(delay.slice(0, delay.indexOf("ms")));


function rollDice() {
    const rollNum = Number(numOfDice.textContent);
    values = [];
    images = [];
    for(let i = 0; i < rollNum; i++){
        const value = Math.floor(Math.random() * 6);
        values.push(value);
        images.push(dice[value]);
    }

    diceImages.classList.toggle("hidden");
    

    setTimeout(function() {
        diceImages.innerHTML = `<p class="dice">${images.join(' ')}</p>`;
        diceImages.classList.toggle("hidden");
    }, delay);
}
