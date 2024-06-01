//  Program

const calculatorDisplay = document.getElementById("calculator-display");

calculatorDisplay.textContent = '0';
let typedZero = false;

function append(input) {
    if (calculatorDisplay.textContent == 'Error') {
        calculatorDisplay.textContent = input;
    } else{
        calculatorDisplay.textContent += input
    }
}
function clearDisplay() {
    console.log("IM ALIVE");
    calculatorDisplay.textContent = "0";
    typedZero = false;
}
function calc() {
    try {
        if (calculatorDisplay.textContent == 'Error') {
            calculatorDisplay.textContent = 'Error';
        } else {
            calculatorDisplay.textContent = eval(calculatorDisplay.textContent);
        }
    } catch (error) {
        calculatorDisplay.textContent = "Error";
    }
}