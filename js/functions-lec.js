"use strict";
(function () { //This is beggining of the IIFE (Immediately invoked function expression)

    function greeting(name) {
        return "Howdy there, " + name + "."
    }

    function sum(a, b) {
        let total = a + b;
        //console.log(total);
        return total;
    }

    function hiJeff() {
        return "Hi " + jeff;
        console.log("You'll never see this console log") //it 'exits' function after return
    }

    function getNameAndPrint() {
        let userName = prompt("Hey, what's your name?");
        alert("Nice to meet you, " + userName);
    }

    alert("Hello");
    let message = "How are you?";
    alert(message);

    let name = prompt("What is your name?");
    console.log(greeting("Cody"));
    console.log(greeting(name));
    console.log(greeting());

    console.log(sum(4, 3));
    //console.log(total);  <- this doesn't work because it's outside the scope of the function

    let jeff = "Jeff";

    console.log(hiJeff());

    getNameAndPrint();

})(); //This is the end of the IIFE (Immediately invoked function expression)