// ************************* OPERATION ON NUMBERS ***********************

let a = 3;

let negA = -a;
console.log(negA);

// console.log(2 + 2);  // addition
// console.log(2 - 2);  // substraction
// console.log(2 * 2);  // multiplication
// console.log(2 ** 4); // power of 2
// console.log(2 / 2);  // division
// console.log(2 % 2);  // module ( gives reminder).


// ************** OPERATION ON STRINGS *********************

let str1 = "Hello";
let str2 = " Rajnish";

let str3 = str1 + str2;

console.log(str3);

//  ********************** OPERATION ON TRICKY SITUSTION ***********************

// console.log("1" + 2); // => 12  - it treats all as string 
// console.log(1 + "2"); // => 12  - first one is number and second one is string
// console.log("1" + 2 + 2); // => 122 - if we make 1st one as string all will be treated as string 
// console.log(1 + "3" + 2); // => 22  - it treats all as string 
// console.log(1 + 4 + "2"); // => 32 - if we make other one as string then later one will become string

console.log((2 + 2) * 5 % 3);  // Better way to write the code code readibility is good
