"use strict";
(function () {  //IFFE start

///////////////////Problem #2///////////////////////////////
function showMultiplicationTable(number){
    for(let i = 1; i <= 10; i++){
        console.log(number + " x " + i + " = " + (number * i))
    }
}
showMultiplicationTable(7);

///////////////////Problem #3///////////////////////////////
function generateRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

for(let i = 1; i <= 10; i++){
    let random = generateRandomNumber(20,200);
    if(random % 2 === 0){
        console.log(random + " is even.")
    }else{
        console.log(random + " is odd.")
    }
}

///////////////////Problem #4///////////////////////////////
for(let i = 1; i < 10; i++){
    let number = i.toString();
    console.log(number.repeat(i));
}

///////////////////Problem #5///////////////////////////////
for(let i = 100; i > 0; i -= 5){
    console.log(i);
}

})(); //IFFE end