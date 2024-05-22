const user = {
    username: "Vishal",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // When we refer to the current context, we use 'this' keyword
        // console.log(this)       // Here this will show output beacause it is used in current context 
    }
}

// user.welcomeMessage  // This will not give any output
// user.welcomeMessage()
// user.username = "Hitesh"
// user.welcomeMessage()

// console.log(this)       // This will show empty object because here current context is empty

// function chai(){
//     let username = "Vishal"
//     console.log(this.username)      // This will show output 'undefined' and 'this' doesn't work in function
// }
// chai()

// const chai = function(){
//     let username = "Vishal"
//     console.log(this.username);
// }
// chai()

// const chai = () => {
//     let username = "Vishal"
//     console.log(this);      // => {}
//     console.log(this.username)      // => undefined
// }
// chai()


// +++++++++++++++++++++++++++++++++ ARROW FUNCTION +++++++++++++++++++++++++++++++
// Explicit return arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// Implicit return arrow function
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);       // For curly braces, use return keyword, For parenthesis, don't use return keyword
const addTwo = (num1, num2) => ({username: "Vishal"})

let result = addTwo(3, 4)
console.log(result)

