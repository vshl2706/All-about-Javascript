// Scope => {}

// var c = 300      // Global scope
let a = 300    

if (true) {
    // Block scope
    let a = 10
    const b = 20
    var c = 30      // If you print var outside scope then it wil print but let and const will not do it
    console.log("INNER: ",a)
}

// For loop syntax below
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

console.log(a)
// console.log(b)
// console.log(c)

// Function inside function
function one(){
    const username = "Vishal"
    
    function two(){
        const website = "Yotube"
        console.log(username)
    }
    // console.log(website)    // This will not work and throw error
    
    two()
}

// one()        // Function call

// Nested if
if(true){
    const username = "Vishal"
    if(username === "Vishal"){
        const website = " Youtube"
        console.log(username + website)
    }
    // console.log(website)        // This will not work and throw an error
}

// console.log(username)       //This will also not work




// +++++++++++++++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5))      // This can access the below function
function addone(num){
    return num + 1
}

// addTwo(5)       // Error : Cannot access addTwo Function
const addTwo = function(num){
    return num + 2
}
