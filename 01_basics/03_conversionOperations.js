let score = "35abc"
// -----------------console.log(typeof score)

let valueInNumber = Number(score)
// -----------------console.log(typeof valueInNumber)
// -----------------console.log(valueInNumber)

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
// -----------------console.log(booleanIsLoggedIn)
//1 => true; 0=>false
//"" => false
//"Vishal" => true

let someNumber = 35
let stringNumber = String(someNumber)
// -----------------console.log(stringNumber)
// -----------------console.log(typeof stringNumber)


// ****************** OPERATIONS *****************
let value = 3
let negValue = -value
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2**2)
// console.log(2**3)
// console.log(2%2)

let str1 = "Hello "
let str2 = "Vishal"
let string = str1 + str2
console.log(string)

// ------------------------console.log("1" + 2) //=>12
// ------------------------console.log(1 + "2") //=>12
// ------------------------console.log("1" + 2 + 2) //=>122
// ------------------------console.log(1 + 2 + "2") //=>32

// ------------------------console.log(+true) //=>1
// ------------------------console.log(+"") //=>0
let gameCounter = 100;
gameCounter++
console.log(gameCounter);
