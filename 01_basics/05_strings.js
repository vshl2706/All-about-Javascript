const name = "hitesh"
const repoCount = 50
// console.log(name + repoCount + " Value") // This is outdated syntax

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

//Another method to initialize string
const gameName = new String('hitesh-hc')
console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0, 4) // if you give negative starting index in substring the it will automatically take the starting index 0
console.log(newString)

const anotherString = gameName.slice(-9, 4)
console.log(anotherString)  


const newStringOne = "     hitesh    "
console.log(newStringOne)
console.log(newStringOne.trim()) // trim() is used to remove white spaces

const url = "https://hitesh.com/hiteshc%20choudhary"
console.log(url.replace("%20","-"))

console.log(url.includes("hitesh"))

const gameName1 = new String('hitesh-hc-com')
console.log(gameName1.split('-')) // This will give the array of strings separated by dash

// Read mdn or ecma javascript documentation