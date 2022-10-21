//////////////////Warmup #1///////////////////////////////////////
// let object1 = {
//     name: "Potatoes",
//     quantity: 2,
//     price: "$7.89"
// };
//
// let object2 = {
//     name: "Sweet Potatoes",
//     quantity: 4,
//     price: "$Free.99"
// };
//
// function getPrice(obj){
//     return obj.price;
// }
//
// console.log(getPrice(object1));
// console.log(getPrice(object2));

//////////////////Warmup #2///////////////////////////////////////
//TODO: Write a function that when passed an array will return the longest string from the array.
// Ex. const arr = [“Green”, “Blue”, “Periwinkle”];
// getLongestString(arr) // Returns “Periwinkle”

// function getLongestString(arr){
//     let longestString = arr[0].length;
//     let longestAnswer = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         let largestI = arr[i].length;
//         if(largestI > longestString){
//             longestAnswer = arr[i];
//             longestString = largestI;
//         }
//     }
//     return longestAnswer;
// }

//The better way to do it is to use a "for of" loop

function getLongestString(arr) {
    let longestStr = "";
    for(let str of arr){
        if (str.length > longestStr.length) {
            longestStr = str;
        }
        console.log(longestStr)
    }
    return longestStr;
}

let arr = ["Green", "Blue", "Periwinkle"];

console.log(getLongestString(arr));