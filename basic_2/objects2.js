// ******************** Now we will see the singleton method objects *******************

const instaUser = new Object() // singleton method

instaUser.id = "123abc"
instaUser.name = "Rajnish"
instaUser.isLoggedIn = false

// console.log(instaUser);

const fbUser = {
    ids: "321cba",
    userName: {
        firstName: "rajnish",
        lastName: "kumar"
    },
    isLogged: true
}

// console.log(fbUser);
// console.log(fbUser.userName);
// console.log(fbUser.userName.firstName);


// ************************* operations on objects ************************ 


// const all_user = { instaUser, fbUser }; // its not the way to concatenate the objects 
// console.log(all_user);

// let new_all_user = Object.assign({}, instaUser, fbUser) // this and below are the methods to concatenate the objecst 
// console.log(new_all_user);

// let all_old_and_new_user = { ...instaUser, ...fbUser } // spread method
// console.log(all_old_and_new_user)


//***************** accessing the keys and values from objects***************

// console.log(Object.keys(instaUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(instaUser)); // [ '123abc', 'Rajnish', false ]
// console.log(Object.entries(instaUser)) // [ [ 'id', '123abc' ], [ 'name', 'Rajnish' ], [ 'isLoggedIn', false ] ]

// console.log(instaUser.hasOwnProperty("isLoggedIn")); // it is used to check that weather there exist a key named isLoggedIn


// ********************** DESTRUCTURING OF OBJECTS ********************

let anotherObject = {
    userId: 1234,
    user_name: "Rajjo",
    price: 999
}

//  To accesss it multiple times we have to write 

// console.log(anotherObject.user_name);  // so instead of writing the same thing multiple times we can use

// let { user_name } = anotherObject

// console.log(user_name); // it will give the user_name of anotherObject 


let { user_name: u_name } = anotherObject // we can make the username as short as we want 

console.log(u_name);
