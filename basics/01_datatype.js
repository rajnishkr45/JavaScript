// Datatypes

// There are 2 types => 1. Premitive ; 2. Non-prmetive ;

// Premitive : Number, String , Boolean , Null , Undefined , Symbol , bigInt

// Non-premitive : Array , Objects , Functions


let a = 45; // Number 
let f = 40.45; // float called as number
let b = "raju"; // string
let c = true; // boolean
let d = null; // null or stay alone data 
let e; // undefined 

// We have one more data type called symbol used to give uniqueness See Examples;

console.table([a, f, b, c, d, e]);

console.table([typeof (a), typeof (b), typeof (c), typeof (d), typeof (e), typeof (f)]);


let arrays = ["Rajnish", "Kumar", "Doge"];

let obj = {
    name: "rajnish",
    age: 19,
    branch: "CSE",
};

let symbol1 = Symbol(123);
let anotherSymbol = Symbol(123);

console.log(symbol1 === anotherSymbol);
console.log(obj);
console.log(arrays);

let myFunction = function () {

    const myname = console.log("Rajnish")
    return myname;
}