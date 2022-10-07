"use strict";
(function(){  //IIFE start

    /**
     * TODO:
     * Create a function called 'sayHello' that takes a parameter 'name'.
     * When called, the function should return a message that says hello to the passed in name.
     *
     * Example
     * > sayHello("codeup") // returns "Hello, codeup!"
     */

    function sayHello(name) {
        alert("Hello, " + name + "!");
    }

    //in the walkthrough, I noticed I should've used console logs instead o
    //of using alerts to make it more convenient and less pop up messages

    /**
     * TODO:
     * Call the function 'sayHello' and pass your name as a string literal argument.
     * Store the result of the function call in a variable named 'helloMessage'.
     *
     * console.log 'helloMessage' to check your work
     */

    let helloMessage = sayHello("Bobby Boucher");
    console.log(helloMessage);

    /**
     * TODO:
     * Store your name as a string in a variable named 'myName', and pass that
     * variable to the 'sayHello' function. You should see the same output in the
     * console.
     */

    let myName = "Robeito";
    sayHello(myName);

    //Don't modify the following line, it generates a random number between 1 and 3
    //and stores it in a variable named random
    var random = Math.floor((Math.random() * 3) + 1);

    /**
     * TODO:
     * Create a function called 'isTwo' that takes a number as a parameter.
     * The function should return a boolean value based on whether or not the passed
     * number is the number 2.
     *
     * Example
     * > isTwo(1) // returns false
     * > isTwo(2) // returns true
     * > isTwo(3) // returns false
     *
     * Call the function 'isTwo' passing the variable 'random' as a argument.
     *
     * console.log *outside of the function* to check your work (you should see a
     * different result everytime you refresh the page if you are using the random
     * number)
     */

    function isTwo(number) {
        return number == 2;
    } //same as if else statement, will return false unless true
    console.log(isTwo(random));

    /**
     * TODO:
     * Create a function named 'calculateTip' to calculate a tip on a bill at a
     * restaurant. The function should accept a tip percentage and the total of the
     * bill, and return the amount to tip
     *
     * Examples:
     * > calculateTip(0.20, 20) // returns 4
     * > calculateTip(0.25, 25.50) // returns 6.375
     * > calculateTip(0.15, 33.42) // returns 5.013
     */

    function calculateTip(percent, total) {
        let tipAmt = total * percent;
        alert("You need to tip $" + tipAmt);
    }

    //Changes in walkthrough, instead of using alert in function
    //console.log(calculateTip(.2,20));
    //console.log(calculateTip(.25,25.50));
    //console.log(calculateTip(.15,33.42));

    /**
     * TODO:
     * Use prompt and alert in combination with your calculateTip function to
     * prompt the user for the bill total and a percentage they would like to tip,
     * then display the dollar amount they should tip
     */

    let bill = parseFloat(prompt("What is the total of your bill?"));
    let tipPer = parseFloat(prompt("What percentage would your like to tip?"));
    let tip = bill * tipPer;
    alert("Your tip should be $" + tip)
    //Same here. Should've used console log instead of alert and also could've
    //just done the math in the same line that the log wouuld be in

    /**
     * TODO:
     * Create a function named `applyDiscount`. This function should accept a price
     * (before a discount is applied), and a discount percentage (a number between 0
     * and 1). It should return the result of applying the discount to the original
     * price.
     *
     * Example:
     * > var originalPrice = 100;
     * > var discountPercent = .2; // 20%
     * > applyDiscount(originalPrice, discountPercent) // 80
     *
     * > applyDiscount(45.99, 0.12) // 40.4712
     */

    function applyDiscount(price, discount) {
        let disPrice = price - (price * discount);
        return disPrice;
    }

    /*///////////////////Just checking my work///////////////////////////////
    console.log(applyDiscount(20, .25));
    let price = parseFloat(prompt("What is the total?"));
    let discount = parseFloat(prompt("What the discount?"));
    alert("Your discounted total is $" + applyDiscount(price, discount))
    ///////////////////////////////////////////////////////////////////////*/

})(); //IFFE close