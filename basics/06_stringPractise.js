let str = "Hello I am Rajnish Kumar, Rajnish loves COD";


if (str.toLocaleLowerCase().includes("rajnish")) {
    console.log("Its there !")
}
else {
    console.log("Its not there !!");
}

console.log(str.indexOf("Rajnish"));

let firstoccurance = str.indexOf("Rajnish"); // It will show the index of 1st time rajnish 

console.log(str.indexOf("Rajnish", firstoccurance + 1)); // It will show the second time Rajnish

console.log(str.replace("nish", "ni")); // Replaces the particular word

console.log(str.replaceAll("Rajnish", "Rajjo")); // Replaces all words
