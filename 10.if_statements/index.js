// let age = 17;

// if(age >= 18){
//     console.log("You are old enough to drive a car")
// }
// else {
//     console.log("You are old enough to play with toy cars")
// }

// let time = 9;
//  if(time < 12){
//     console.log("Good morning")
//  }
//  else{
//     console.log("Good afternoon")
//  }

// let isTrue = true;
// if(isTrue){
//     console.log("Oh really")
// } else { 
//     console.log("No way")
// }

// let age = 16;
// let hasLicense = false;

// if(age >= 16){
//     if (hasLicense) {
//         console.log("You are old enough to drive and you have a license")
//     } else {
//         console.log("You are old enough to drive although you don't have a license")
//     }
// }
// else { 
//     console.log("You must be 16+ to have a license")
// }

const myInput = document.getElementById("myInput")
const mySubmit = document.getElementById("myButton")
const myP = document.getElementById("myP")

let age;

mySubmit.onclick = function(){
    age = Number(myInput.value);
    let result;
    if(age >= 100){ 
        result = "You are a fossil!";
    }
    else if(age == 0){
        result = "You were just born. tf.";
    }
    else if(age >= 18 ){
        result = "You are allowed to enter." ;
    } 
    else if(age < 0) {
        result = "Time traveler, huh?";
    }  
    else{
        result = "Dick's too small, ain't it?";
    }
    myP.textContent = result;
}