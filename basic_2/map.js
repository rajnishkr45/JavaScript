// ***************************  MAPS ************************** 

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  add 10 to each number of the array 

// const reqNums = nums.map((num) => (num + 10))


// Chaining in map 

const reqNums = nums.map((num) => (num * 10)).map((num) => (num + 10))

// console.log(reqNums)                


// ******************************* REDUCE ********************************


//  Reduce is used to add all the values like fibonacci series.

// nums.reduce((accumulator, currentValue) => (accumulator + currentValue), 0) // single line code 

// nums.reduce(function (acc, curr) { // accumulator stores the sum of all previous values and current value stores current value of array
//     acc + curr
//     console.log(`accumulator : ${acc} currentValue : ${curr}`);

//     return acc + curr
// }, 0) // in place of 0 we can write any value which we want to add by default 

const products = [

    {
        course: "CPP",
        price: 999
    },
    {
        course: "JS",
        price: 2999
    },
    {
        course: "React",
        price: 9999
    },
    {
        course: "PY",
        price: 99
    }

]

// find the sum of all products added to cart

const totalprice = products.reduce((acc, items) => (acc + items.price), 0)

console.log(`Tolat price to pay : ${totalprice}`)