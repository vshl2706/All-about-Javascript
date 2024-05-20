// Arrays
// On copying array it creates a shlaow copy(shares the same reference i.e, when we change content from one place it also changes from the copied version)
// Similarly, opposite is Deep copy(do not share the same reference)
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Iron man", "Captain"]
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1])

// Array methods
myArr.push(6)
myArr.push(7)
// myArr.pop()      //Used to remove the elements from the upper side
myArr.unshift(9)    //Used to insert an element at the starting
myArr.shift()       //Used to shift the array by one position
console.log(myArr)
console.log(typeof myArr)
// console.log(myArr.includes(9))    //Used to check whether element is present in array or not
// console.log(myArr.indexOf(9))     //Used to check whether element is presenet, if present return index

// const newArr = myArr.join()
// console.log(newArr)
// console.log(typeof newArr)

// SLICE OR SPLICE

const myn1 = myArr.slice(1, 3)
console.log("A ", myArr)
console.log(myn1)

const myn2 = myArr.splice(1, 3)
console.log("B ", myArr)
console.log(myn2)

/* What is the difference between slice and splice functions
Slice => (1, 3) => Take element 1, 2 without affecting the original MyArray
Splice => (1, 3) => Take element 1, 2, 3 and also affects the original MyArray
*/

