let day;
let testScore;
let letterGrade;
const field = document.getElementById("dayOfTheWeek");
const myButton = document.getElementById("myButton");
const myInput = document.getElementById("myInput");

// myButton.onclick = function() {

//     day = myInput.value;

//     switch (Number(day)) {
//         case undefined:
//             break;
//         case 1:
//             field.textContent = "Monday";
//             break;
//         case 2:
//             field.textContent = "Tuesday";
//             break;
//         case 3:
//             field.textContent = "Wednesday";
//             break;
//         case 4:
//             field.textContent = "Thursday";
//             break;
//         case 5:
//             field.textContent = "Friday";
//             break;
//         case 6:
//             field.textContent = "Saturday";
//             break;
//         case 7:
//             field.textContent = "Sunday";
//             break;
//         default:
//             field.textContent = `${day} is not a valid number`;
//             break;
//     }
// }

myButton.onclick = function() {
    testScore = Number(myInput.value);

    switch(true){
        case testScore == NaN:
            break;
        case testScore > 100 || testScore < 0:
            letterGrade = "Are u ok?"
            break;
        case testScore >= 90:
            letterGrade = "A"
            break;
        case testScore >= 80:
            letterGrade = "B"
            break;
        case testScore >= 70:
            letterGrade = "C"
            break;
        case testScore >= 60:
            letterGrade = "D"
            break;
        case testScore >= 50:
            letterGrade = "E"
            break;
        default:
            letterGrade = "F"
            break;
    }

    field.textContent = letterGrade;
}
