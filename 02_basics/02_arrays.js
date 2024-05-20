const marvel = ["Thor", "Ironman", "Spiderman"]
const dc = ["Superman", "Flash", "Batman"]

// marvel.push(dc)
// console.log(marvel)

// const allHeros = marvel.concat(dc)      // This will merge both the arrays
// console.log(marvel)
// console.log(allHeros)

// const all_new_heros = [...marvel, ...dc]    //Work similar as of concat but in this we can give more than 2 value/arrays
// console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Vishal"))
console.log(Array.from("Vishal"))   //Used to convert into array
console.log(Array.from({name: "Vishal"}))   // => returns empty string, interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))   //Used to convert into array but 'Array.of()' is used to convert a set of elements into an array
