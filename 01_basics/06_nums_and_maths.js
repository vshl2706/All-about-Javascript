const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance); 

let string = balance.toString()
console.log(string)
console.log(string.length)
console.log(balance.toFixed(2)) 
//toFixed() is used in e-commerece websites to show a number in decimal places. Example => GST

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) 
// Used to insert commas between zeros so that we can easily read them

// +++++++++++++++++++++++++ MATHS +++++++++++++++++++++
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.66))  // Used to round of values
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
console.log(Math.min(4, 3, 6, 8))   // Used to find minimum value in the given array
console.log(Math.max(4, 3, 6, 8))   // Used to find minimum value in the given array

console.log(Math.random());    //It is used to generate random numbers between 0 and 1
console.log((Math.random()*10) + 1)     // +1 is done to avoid the zero value in result
console.log(Math.floor((Math.random()*10) + 1))

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)