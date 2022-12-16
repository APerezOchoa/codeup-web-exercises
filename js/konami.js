"use strict";

$(function() {  //IIFE open
// modeled after code found at https://stackoverflow.com/questions/31626852/how-to-add-konami-code-in-a-website-based-on-html

// allowed keys
    let validInput = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        65: 'a',
        66: 'b'
    };

// Konami Code
    let konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// keeps track of amount of valid input keys
    let arrayPosition = 0;

// event listener
    document.addEventListener('keydown', function(e) {
        // get the value of the key code from the input
        let key = validInput[e.keyCode];
        // get the value of the required key from the konami code
        let requiredKey = konamiCode[arrayPosition];

        // compare the user's input with the current konamiCode position
        if (key === requiredKey) {

            // move to the next key in the konami code sequence
            arrayPosition++;

            // if the last key is reached, it means they all match,
            // we activate cheats and reset the array to position 0
            if (arrayPosition === konamiCode.length) {
                activateCheats();
                arrayPosition = 0;
            }
        } else { //if the code doesn't match, we reset the array
            arrayPosition = 0;
        }
    });

    function activateCheats() {
        document.body.style.backgroundImage = "url('img/pixel-art.gif')";
        alert("cheats activated");
    }
}); //IIFE close