"use strict";

/*////////////////////////////////////////////////////////////////////////////////
//Just some stuff we did during class

console.log('Hello from JavaScript!');

alert("Happy Thorsday Xerxes");

// the following line will show the OK/CANCEL confirm dialog
var confirmed = confirm('Are you sure you want to do XYZ?');
console.log(confirmed); // will be either true or false

var userInput = prompt('Please type something:');
console.log('The user entered: ' + userInput);

////////////////////////////////////////////////////////////////////////////////*/

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var userInput = prompt("What's your favorite color?");
alert("Great, " + userInput + " is my favorite color too!");

//////////////////////////////////////////////////////////////////////////////////

var lilMer = prompt("For how many days have you had The Little Mermaid?");
console.log('The user entered: ' + lilMer);

var broBer = prompt("For how many days have you had Brother Bear?");
console.log('The user entered: ' + broBer);

var herCul = prompt("For how many days have you had Hercules?");
console.log('The user entered: ' + herCul);

var ppd = prompt("What is the price per day of having these movies out?");
console.log('The user entered: ' + ppd);

var total = (Number(lilMer) + Number(broBer) + Number(herCul)) * Number(ppd);
alert("You owe $" + total + " for these movie rentals.");

/////////////////////////////////////////////////////////////////////////////////

var gooPhr = prompt("What rate does Google pay you per hour?");
console.log('The user entered: ' + gooPhr);
var gooWrk = prompt("How many hours did you work for Google this week?");
console.log('The user entered: ' + gooWrk);

var amaPhr  = prompt("What rate does Amazon pay you per hour?");
console.log('The user entered: ' + amaPhr);
var amaWrk = prompt("How many hours did you work for Amazon this week?");
console.log('The user entered: ' + amaWrk);

var facPhr = prompt("What rate does Facebook pay you per hour?");
console.log('The user entered: ' + facPhr);
var facWrk = prompt("How many hours did you work for Facebook this week?");
console.log('The user entered: ' + facWrk);

var total = (Number(gooPhr) * Number(gooWrk)) + (Number(amaPhr) * Number(amaWrk)) + (Number(facPhr) * Number(facWrk));
alert("You will be getting paid $ " + total + " this week!");

/////////////////////////////////////////////////////////////////////////////////

var classFull = prompt("Is the class already full?");
console.log('The user entered: ' + classFull);

var conflSch = prompt("Does it conflict with your schedule?");
console.log('The user entered: ' + conflSch);

if (classFull == "no" && conflSch == "no"){
    alert("You can take this class.")
} else {alert("You cannot take this class.")}

/////////////////////////////////////////////////////////////////////////////////

var items = prompt("How many items did you purchase?");
console.log('The user entered: ' + items);

var offExp = prompt("Is this offer expired?");
console.log('The user entered: ' + offExp);

var preMem = prompt("Are you a premium member?");
console.log('The user entered: ' + preMem);

if ((items > 2 || preMem == "yes") && offExp == "no"){
    alert("This offer can be applied!")
} else {alert("Sorry, this offer cannot be apllied.")}