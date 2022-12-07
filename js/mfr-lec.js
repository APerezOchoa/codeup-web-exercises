const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "September 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

// .map() will change every element in the arraya nd return an array of same length

// const names = [];
// for (let hamster of hamsters){
//     names.push(hamster.name);
// }

const names = hamsters.map(hamster => hamster.name)
console.log(names);

//another ex using the whole formal notation in the => function
const numbers = [1,2,3,4,5];
const doubledNumbers = numbers.map((num) => {
    return num*2
});
console.log(doubledNumbers);



// .filter() will return a new array this is (potentially) shorter than the original array
// it does not change or mutate the individual elements from the og array. It only adds or
// takes away elements from the array. The return for a filter method MUST BE BOOLEAN value.


// You can define the function into an
const findEvenNumber = num => num % 2 === 0;

// const evenNumbers = numbers.filter(num => num % 2 === 0);
// const evenDoubleNumbers = doubledNumbers.filter(num => num % 2 === 0)
const evenNumbers = numbers.filter(findEvenNumber);
const evenDoubleNumbers = doubledNumbers.filter(findEvenNumber)
console.log(evenNumbers);
console.log(doubledNumbers);

// This returns the entire object
const tallHamsters = hamsters.filter(hamster => hamster.heightInMM >= 100);
console.log(tallHamsters);

// But you can do method chaining and return just the names all in one step
const tallHamstersNames = hamsters.filter(hamster => hamster.heightInMM >= 100).map(hamster => hamster.name);
console.log(tallHamstersNames);



// .reduce() it reduces an array to something. it changes the element into what we want
// 2 arguments: 1st is a function expression with 2 parameters (accumulation, elemntATOI),
// 2nd is the starting value of the accumulation/result.

// this is what you would have to do before
let sumInTheBeforeTimes =0;
for(let number of numbers){
    sumInTheBeforeTimes += number;
}
console.log(sumInTheBeforeTimes)

// now using the reduce method
const sum = numbers.reduce((accumulation, currentNumber) => {
    return accumulation + currentNumber;
}, 0); //the starting value of accumulation is 0
console.log(sum);

// tallest hamster ex
const tallestHamster = hamsters.reduce((tallHamster, hamster) => {
    if (hamster.heightInMM > tallHamster.heightInMM){
        tallHamster = hamster;
    }
    return tallHamster;
},{heightInMM: 0});
console.log(tallestHamster);

//ex
function countWords(sentence) {
    const words = sentence.split(' '); // transform a sentence into an array of words
    const wordCountObject = words.reduce((wordCounts, word) => {
        if (typeof wordCounts[word] === 'undefined') {
            // if the word is not yet present in our object, set it's value to 1
            wordCounts[word] = 1;
        } else {
            // otherwise increment the existing count
            wordCounts[word] += 1;
        }
        return wordCounts;
    }, {}); // start with an empty object
    return wordCountObject;
}

console.log(countWords('Mary had a little lamb little lamb little lamb'));

// array.reduce((sum (final number), every iteration)(like index) = > (insert function) ), starting number(like i))