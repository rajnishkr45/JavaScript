// ************************ NUMBERS *************************

// let gameScore = 9815620.869;

// console.log(gameScore.toFixed(2));

// console.log(gameScore.toPrecision(7));

// console.log(gameScore.toString().length);

// console.log(gameScore.toLocaleString());


// ************************ MATHS ************************

console.log(Math.abs(-9)); // it will give the absolute value of -9 ie. 9

console.log(Math.min(2, 3, 99, 1, 66)); // it will give minimum value

console.log(Math.max(2, 3, 99, 1, 66)); // it will give maximum value

console.log(Math.round(15.42)); // it will round off and give 15

console.log(Math.round(15.55)); // it will round off and give 16

console.log(Math.ceil(15.1)); // it will also round off and give the upper value ie. 16 

console.log(Math.floor(15.9)); // it wil also round off and give the lower value ie. 15

console.log(Math.sqrt(2)); // it gives the squre root of value and gives nice pricision

console.log(Math.random()); // it gives random value between 0 and 1

console.log((Math.random() * 10) + 1);

console.log(Math.floor((Math.random() * 10) + 1));

// *************** value in a range *******************

let min = 10;
let max = 20;

console.log((Math.floor((Math.random() * (max - min + 1)) + 10)));