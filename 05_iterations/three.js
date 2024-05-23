// for of

// ["", "", ""]
// [{}, {}, {}]    // Objects inside array

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num)
}

const greetings = "Hello World !!"
for(const greet of greetings){
    // console.log(`Each char is ${greet}`)
}

// Maps
// Maps are applicable only on unique elements
const map = new Map()
map.set("IN", "INDIA")
map.set("USA", "United states of America")
map.set("Fr", "France")
map.set("IN", "India")
// console.log(map)

// To print keys or values of maps
for(const [key, value] of map){
    console.log(key, ":-", value)
}

// Objects are not iteratable using for of loop, they have different ways to iterate
const myObject = {
    "game1": "NFS"
    "game2": "Spiderman"
}
for (const [key, value] of myObject) {
    
}
