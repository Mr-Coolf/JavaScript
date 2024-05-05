const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum-minNum+1)+minNum);
const myInput = document.getElementById("myInput");
const introElement = document.getElementById("Intro");
const resultElement = document.getElementById("Result");

let attempts = 0;
let guess;
let running = true;

myInput.value = minNum;
myInput.max = maxNum;
myInput.min = minNum;
myInput.oninput = function() {
    let value = Number(myInput.value);
    if (value != NaN){
        if(value > maxNum){
            myInput.value = maxNum;
        }
        else if(value < minNum && value != ""){
            myInput.value = minNum;
        }
    
        if(running){
            if(value == answer) {
                resultElement.textContent = `You got it! ${value} is right! Want to play again?`
                running = false;
            }
            else if (value < answer){
                resultElement.textContent = `No, it's too low! Try again!`
            }
            else {
                resultElement.textContent = `No, it's too high! Try again!`
            }
        }
    }
    else{
        resultElement.textContent = `No, ${myInput.value} is not a number.`
    }
    
};
if(running){
    if(myInput.value == answer) {
        resultElement.textContent = `You got it! ${myInput.value} is right! Click to play again?`
        running = false;
    }
    else{
        resultElement.textContent = `No, it's too low!`
    }
}

introElement.textContent = `Choose a number between ${minNum} and ${maxNum}`;

resultElement.onclick = function(){
    location.reload();
}