// Two types of data types :- Primitive and Non-primitive(reference type)

// Primitive 
// 7 Typese of primitive data types : String, Number, Boolean, null, undefined, symbol, bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; 
let userEmail1 = undefined

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId) // will give result false 

const bigNumber = 3322334546467846564345n // n at last represents bigInt number

// Reference (Non-Primitive)
// Array, Objects, Functions, 

const heros = ["Iron man", "Hulk", "Captain america", "Thor"]
let myObj = {
    name: "Vishal",
    age: 20, 
}

const myFunction = function(){
    console.log("HelloWorld");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Two types of memory => Stack, Heap
// Stack is used in Primitive Data Types
// Heap is used in Non-Primitive Data Types

let myYoutubename = "hiteshchoudharydotcom"
let anotherName = myYoutubename
anotherName = "chaiaurcode"
console.log(myYoutubename); //=> hiteshchoudharydotcom
console.log(anotherName); //=> chaiaurcode
// In stacks we get a copy of the original content

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
// In heaps we get reference to the original content from the heap memory
// In heaps jo bhi hum changes krtein hain vo change original content me hota hai 

userTwo.email = "hitesh@google.com"
console.log(userOne.email) //=> hitesh@google.com
console.log(userTwo.email) //=> hitesh@google.com
