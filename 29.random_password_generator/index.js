const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = lowercaseChars.toUpperCase();
const numberChars ="0123456789";
const symbolChars = "!@#$%^&*()-_+=,./<>?:\";'";

const min = 1;
const max = 10000;

const inputNum = document.getElementById("inputNum");
const result = document.getElementById("result");
const submitBtn = document.getElementById("Submit");
const lowercaseCheckbox = document.getElementById("lowercaseChars");
const uppercaseCheckbox = document.getElementById("uppercaseChars");
const numberCharsCheckbox = document.getElementById("numberChars");
const symbolCharsCheckbox = document.getElementById("symbolChars");
const copiedDiv = document.getElementById("copied");

inputNum.oninput = function() {
    const value = Number(inputNum.value);
    if (value <= (min-1)){
        inputNum.value = "1"
    }
    else if (value > max){
        inputNum.value = "10000"
    }
}

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    
    let password = "";
    let allowedChars = "";

    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length > 0 && allowedChars.length != 0) {
        for (let i = 0; i < length; i++) {
        
            password += allowedChars.charAt(Math.floor(Math.random()*allowedChars.length));

        }
        return password;
    }
    else if (length > 0 && allowedChars.length == 0) return ("NONE\n(At least one set of characters needs to be selected)");
    else return ("NONE\n(Password length has to be at least 1)");
}

let passwordLength = 10;
let includeLowerCase = true;
let includeUpperCase = true;
let includeNumbers = true;
let includeSymbols = true;

submitBtn.onclick = function() {

    passwordLength = Number(inputNum.value);
    includeLowerCase = Boolean(lowercaseCheckbox.checked);
    includeUpperCase = Boolean(uppercaseCheckbox.checked);
    includeNumbers = Boolean(numberCharsCheckbox.checked);
    includeSymbols = Boolean(symbolCharsCheckbox.checked);

    const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);

    result.textContent = `${password}`;
}

let copyActive = false;
let copiedNum = 0;
let copiedNumElements = [];

result.onclick = function(){
    navigator.clipboard.writeText(result.textContent);
    let myP = `<p id="copyP${copiedNum}" class="hidden">Copied to clipboard<br></p>\n`;
    copiedDiv.innerHTML += myP;
    copiedNumElements.push(document.getElementById(`copyP${copiedNum}`));
    a = copiedNumElements[copiedNumElements.length-1];
    copiedNum++;

    
    setTimeout(() => {
        copiedDiv.children[copiedDiv.children.length-1].classList.remove("hidden");
    }, 0);
    
    setTimeout(() => {
        copiedDiv.children[copiedDiv.children.length-1].classList.add("hidden");
    }, 1000);
    setTimeout(() => {
        copiedDiv.removeChild(copiedDiv.children[0]);
        copiedNumElements.pop(0);
        copiedNum--;
    }, 2000);
    
    
    
}

