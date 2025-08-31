// Advance in array 

let marvel_Heros = ["thor", "ironman", "dr_strange"]
let dc_Heros = ["superman", "batman", "flash"]

// marvel_Heros.push(dc_Heros);  // array can contain any value ie. it may be string may be number or may be another array and push method insterts one array in another at last of array.

console.log(marvel_Heros);

let all_heros = marvel_Heros.concat(dc_Heros); // concat add the TWO array ie. it stores all elements together;
console.log(all_heros);

let all_ne_heros = [...dc_Heros, ...marvel_Heros]  // it is konwn as spread and it works same as concat but main difference is that it can add more tha two array ;
console.log(all_ne_heros);

let another_arry = [1, 2, 2, 3, 4, [5, 6], 7, [4, [7, 9, 8]]]; // now i want that all the numbers to be in a single array .

let new_another_array = another_arry.flat(Infinity); // flat will merge all array and instead of infinity we an give the depth value so that it will merge till where we want;

console.log(new_another_array);


console.log(Array.isArray("Rajnish")); // it will check weather it is array or not.

console.log(Array.from("Rajnish")); // ['R', 'a', 'j', 'n', 'i', 's','h']

console.log(Array.of("Rajnish")); // [ 'Rajnish' ]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ] it will convert all in array .