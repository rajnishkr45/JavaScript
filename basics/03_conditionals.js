// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 > 1);
// console.log(2 == 1);
// console.log(2 != 1);

// **************************** TRICKY CONVERSIONS ****************************

// console.log(null == 0); // => false
// console.log(null >= 0); // =>true  - it works differently first it converts the null to number so try not to use this way. Datatype should be same 
// console.log(null > 0); // => false
// console.log(null < 0); // => false
// console.log(null <= 0); // => true

console.log(undefined >= null); // false
console.log(undefined == null); // true 
console.log(undefined > null); // false
console.log(undefined < null); // false
console.log(undefined <= null); // false


//  strict check => "===" => it checks the value as well as datatype while "==" checks only value and it also converts the values