const choices = ["rock", "paper", "scissors"];
const choiceEmojis = ['👊', '✋', '✌'];
let computerChoice;
const combinations = [["paper", ["rock", "paper"]], ["rock", ["rock", "scissors"]], ["scissors", ["scissors", "paper"]]];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const gameDisplay = document.getElementById("gameDisplay");

let playerWins = 0;
let computerWins = 0;

playerDisplay.textContent = `PLAYER: ${playerWins}`;
computerDisplay.textContent = `COMPUTER: ${computerWins}`;

function playGame(playerChoice) {

    computerChoice = choices[Math.floor(Math.random()*3)];
    let result = findWinner(playerChoice, computerChoice);

    switch (result) {
        case 0:
            resultDisplay.textContent = "IT'S A TIE!";
            playerWins++;
            computerWins++;
            break;
        case 1:
            resultDisplay.textContent = "PLAYER WINS!";
            playerWins++;
            break;
        case 2:
            resultDisplay.textContent = "COMPUTER WINS!";
            computerWins++;
            break;
        default:
            break;
   }

   gameDisplay.textContent = `${choiceEmojis[choices.indexOf(playerChoice)]} VS ${choiceEmojis[choices.indexOf(computerChoice)]}`
   playerDisplay.textContent = `PLAYER: ${playerWins}`;
   computerDisplay.textContent = `COMPUTER: ${computerWins}`;

}
let result;
function findWinner(firstChoice, secondChoice) {
    result;
    if(firstChoice == secondChoice) return 0;
    else {
        combinations.forEach(combination => {
            if(JSON.stringify(combination[1].sort()) == JSON.stringify([firstChoice, secondChoice].sort())) {
                if (combination[0] == firstChoice) {
                    result = 1;
                } else {
                    result = 2;
                }
            }
        })
        return result;
    }
    
}
console.log(([1, 2].sort()) == ([2, 1].sort()), [1,2].sort(), [2,1].sort());