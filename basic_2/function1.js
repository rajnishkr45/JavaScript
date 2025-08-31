// console.log("R");
// console.log("A");
// console.log("J");
// console.log("N");
// console.log("I");
// console.log("S");
// console.log("H");

function myName() {
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");

}

myName // it is called as refrence 

myName() // it is exicuated when we use () then it is called as exicuation


function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

// addTwoNumbers() // value needed in the parameters to give the answer
console.log(addTwoNumbers(5, 4))
console.log(addTwoNumbers(5, "4")); // it will add number and string by considerig as string and keep it side wise as 54
console.log(addTwoNumbers(5, "a"))// it will add number and string by considerig as string and keep it side wise as 54
console.log(addTwoNumbers(5, null))

// let result = addTwoNumbers(6, 9)
// console.log(result)  // it will give result as undefined as the function is not returning any value 

function addTwoNumbers(num1, num2) {
    //    let sum = num1+num2
    //    return sum 
    return num1 + num2
}

let result = addTwoNumbers(6, 9)
console.log(result) 
