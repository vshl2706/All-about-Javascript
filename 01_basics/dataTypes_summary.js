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