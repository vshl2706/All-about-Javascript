// for-in loops
// Keys objects are accessed with the help of 'for-in' loop
const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(key)    // To print keys only
    // console.log(myObject[key])  // To print values
}

// for(const key in myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`)
// }

// Arrays has also keys starting from 0
const programming = ["js", "rb", "py", "java", "cpp"]
for(const key in programming){
    // console.log(key)
    // console.log(programming[key])
}

// Can we apply for-in loop on maps ??
const map = new Map()
map.set("IN", "INDIA")
map.set("USA", "United states of America")
map.set("Fr", "France")
map.set("IN", "India")

for(const key in map){
    console.log(map[key])
}