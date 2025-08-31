// let myDate = new Date();

// console.log(myDate); // 2023-10-17T14:40:22.848Z

// console.log(myDate.toString()); // Tue Oct 17 2023 20:10:22 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString()); // Tue Oct 17 2023

// console.log(myDate.toISOString()); // 2023-10-17T14:40:22.848Z

// console.log(myDate.toLocaleString()); // 17/10/2023, 8:10:22 pm

// console.log(myDate.toLocaleTimeString()); // 8:10:22 pm

// console.log(myDate.toTimeString()); // 20:13:16 GMT+0530 (India Standard Time)



let newDate = Date.now(); // value will come in milliseconds

console.log(newDate);

console.log(Math.floor(newDate / 1000)); // value will come in seconds

//********************** Decleration of date **************************

// let myAssumedDate = Date(23, 0, 25);

let myAssumedDate = Date(5-12-23);

console.log(myAssumedDate.toString());