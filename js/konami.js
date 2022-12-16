"use strict";

$(function() {
    // $(document).keyup(function(event){
    // console.log(event.key);
    // });

    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];
    let userCode = [];

    $(document).keyup(function(event){
        //userCode.shift();
        userCode.push(event.key.toString());
        console.log(userCode);
        if(userCode.length === konamiCode.length){
            for(let i = 0; i < konamiCode.length; i++){
                if(konamiCode[i] === userCode[i]){

                }
                console.log("You have added 30 lives!");
                cheatActivated();
            }
        }
    });

    function cheatActivated(){
        $(document).css("background-image", 'img/pixel-art.gif');

    }




});