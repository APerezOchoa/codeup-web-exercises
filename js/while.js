"use strict";
(function () {  //IFFE start

let i = 1;
let j = 0;
while(j < 16){
    i *=2;
    j++;
    console.log(i)
}

let allCones = Math.floor(Math.random() * 50) + 50;

do{
    let conesToBuy = Math.floor(Math.random() * 5) + 1;
    if((allCones - conesToBuy) < 0){
        console.log("Cannot sell you " + conesToBuy + " cones I only have " + allCones + " ...");
    }else{
        allCones -= conesToBuy;
        console.log(conesToBuy + " cones sold...");
    }
}while(allCones > 0)

console.log("Yay! I sold them all!");

})(); //IFFE end