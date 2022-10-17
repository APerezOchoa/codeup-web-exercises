"use strict";
(function () {  //IFFE start

let userInput = prompt("Please enter an odd number between 1 and 50.");
while(true){
    if(userInput < 1){
        userInput = prompt("Your number is less than 1. Please enter an odd number between 1 and 50.");
    }else if(userInput > 50){
        userInput = prompt("Your number is greater than 50. Please enter an odd number between 1 and 50.");
    }else if (userInput % 2 === 0) {
        userInput = prompt("Please enter an odd number between 1 and 50.");
    }else{
        break;
    }
}

for (let i = 1; i <= 50; i++){
    if (i % 2 === 0) {
        continue;
    }
    if (parseInt(userInput) == i){
        console.log("Yikes! Skipping number: " + i);
    }else{
        console.log("Here is an odd number: " + i);
    }
}

})(); //IFFE end