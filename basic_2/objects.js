// sinleton 
// Object.create  // in this method created object is always singleton 

// Literals

let anySymbol = Symbol("Rajjo"); // insert this symbol in the object ans print it ( INTERVIEW QUESTION )

const newObject = {    // this method to create an object is known is as literals
    name: "Rajnish",
    age: 18,
    city: "Darbhanaga",
    email: "rajnish@google.org", // by default the key is stored as string,
    isLoggedIn: false,
    lastLoggedIn: ["monday", "saturday"],
    "hobby": "COD",
    [anySymbol]: "any value for symbol"
}

// ******************* Accessing the object ***************************

// console.log(newObject.email); // 1st method
// console.log(newObject["email"]); // 2nd method to access the object
// console.log(newObject["hobby"]); // this is the only way to access the object given in this form ;
// console.log(newObject[anySymbol]); // only way to access the symbol

// console.log(typeof (newObject[anySymbol])); 

// newObject.email = "rajnishdbg@microsoft.org" // to change the email

// console.log(newObject.email);
// Object.freeze(newObject); // method to freez the object it will not allow to change the value .

newObject.email = "rajnishdbg@chatgpt.org"

console.log(newObject);

// Adding function in object  for that we have to first unfreez the object

newObject.greeting = function () {
    console.log("Hello! user ");
}

console.log(newObject.greeting); // exicuation doesnot takes place here because we didn't use ()
console.log(newObject.greeting()); // exicuation takes places

newObject.greetingTwo = function () {  // this is use to access the elements of objects in a functions.
    console.log(`Hello ${this.name}`)
}

console.log(newObject.greeting());
console.log(newObject.greetingTwo());