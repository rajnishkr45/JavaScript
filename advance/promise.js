const promise1 = new Promise(function (resolve, reject) {
    // we can use any async code 
    // such as await , time out time interval etc

    setTimeout(() => {
        // console.log("Promise 1");
        resolve();
    }, 1000);
    // used to resolve the promise after execution of above code this will be executed and then only below function will show that this has been resolved.
})

promise1.then(function () {
    // console.log("Promise Resolved")
})


// Method 2

new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function () {
    // console.log("Promise 2 resolved");
})


//There is direct connection between resolve and then

const promise3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: "rajnish", email: "rajnishdbg1@gmail.com" }) // passing an object to rseolve we can pass any thing like function , array etc...
    }, 1000)

})

promise3.then(function (user) { // user is variable so we can put any name there
    console.log(user);
})


const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "rajnish", password: "123" })
        } else {
            reject("ERROR : Something went wrong !")
        }

    }, 1000)
})

promise4.then(function (user) {
    console.log(user);
    return user.username
}).then(function (username/* its a varialbe  */) {
    console.log(username);
}).catch((error) => {
    console.log(error)
}).finally(() => console.log("Either promise resolved or rejected"))


const promise5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Js", password: "123" })
        } else {
            reject("ERROR : JS went wrong !")
        }

    }, 1000)
})

async function consumePromise5() {
    try {
        const response = await promise5
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromise5()