// Declaration of string

// let str = "Rajnish"; // Method 1;

// let anotherStr = new String("Rajnish"); // Method 2nd it is better to use cause it gives us the more and more features to use such as methods can be use...


// console.log(str);
// console.log(anotherStr);

// Concatenation of string 

let str1 = "Rajnish";
let age = 19;

// console.log("My name is " + str1 + " and my age is " + age); // This is old method and now it not recomanded ;

// console.log(`My name is ${str1.toUpperCase()} and my age is ${age}`); // It is best way to concate string here we can use methods ;

// *************************** METHODS IN STRINGS ******************************

// console.log(str1.length); // Will give the length of string
// console.log(str1[0]); // Will give the character at 0th index
// console.log(str1.toLocaleLowerCase()); // Converts to lowercase
// console.log(str1.toLocaleUpperCase()); // Converts to uppercase
// console.log(str1.indexOf('i')); // Returns the index of letter i
// console.log(str1.charAt(3)); // Character at 3rd index ie. at 4th place

let newstr = "rajnish";

console.log(newstr.trim());

console.log(newstr.substring(2, 5)); // substring() make new string from the given index and it doesnot includes the last index;

console.log(newstr.slice(-6, 7));  // slice() works in reverse direction if we use -ve sign else it is same as substring

const newstring1 = "     Rajnish    ";

console.log(newstring1);
console.log(newstring1.trim()); // trim() removes the extra spaces from starting and ending 

let url = "https://dcesports/index%20sports.org";

console.log(url);
console.log(url.replace("%20", "_")); // replaces the given text ;

console.log(url.includes("sports")); // includes will check weather that statement is present or not;


let myname = "Rajnish kumar cs";
console.log(myname.split(" ")); // split will split the selected text or sentence into various parts and store into an array . it splits according to the given splitter such as in this example i have given white sapce as splitter;