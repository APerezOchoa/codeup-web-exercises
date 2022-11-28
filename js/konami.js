"use strict";

$(function() {
    $(document).keyup(function(event){
    console.log(event.key);
    });

    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];
    let userCode = [];
    let count = 0;

    $(document).keyup(function(event){
        userCode.push(event.key.toString());
        console.log(userCode);
        count++;
        if(count === konamiCode.length ){
            for(let i = 0; i < konamiCode.length; i++){
                konamiCode[i]
            }
        }
    });




});