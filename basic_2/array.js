let arr = [1, 2, 3, 4]; // method 1
console.log(arr);

let arr1 = ["rajnish", 1, 3, true] // array can contain any values
console.log(arr1);
console.log(arr1[3]);


let newArr = new Array(1, 22, 23, 4, 5); // method 2
console.log(newArr);

console.log(newArr.length); // returns the length of arrray


// ********************* METHODS IN ARRAY *****************************

let arry2 = new Array(55, 66, 55, 88, 96, 69);
console.log(arry2);

arry2.push(8) // inserts the new value at last.
console.log(arry2);

arry2.push(96)
console.log(arry2);

arry2.pop() // removes the last value.
console.log(arry2);

arry2.unshift(9) // adds the value in starting 
console.log(arry2);

arry2.shift() // removes the first value
console.log(arry2);

console.log(arry2.join()); // converts the array in to string;

console.log(arry2.toString()); // converts the array in to string;


// ************************ Slice and Splice (INTERVIEW QUESTION ) *****************************

console.log(arry2.slice(2, 4)); // It doesnot manupulate the original array 
console.log("A", arry2);

console.log(arry2.splice(2, 4)); // It extrat the part from original array and hence the array is manupulated
console.log("B", arry2);
