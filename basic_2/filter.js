
// ************************ FILTER ********************

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const reqNums = nums.filter((num) => {
//     return num > 4
// })

// const reqNums = nums.filter((num) => (num > 4)) // this method will be used in react

// console.log(reqNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// const reqBook = books.filter((bk) => (bk.genre === "History"));

// const reqBook = books.filter((bk) => (bk.publish > 2000));


const reqBook = books.filter((bk) => {

    return bk.publish > 1990 && bk.genre === "History"
});

console.log(reqBook) 
