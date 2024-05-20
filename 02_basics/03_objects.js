// singleton
// object.create

//Object literals

const mySym = Symbol("key1")    // Creating a symbol

const JsUser = {
    name: "Vishal",
    "full name": "Vishal Singh",
    [mySym]: "myKey1",      // This is a method to use symbol as a key in object
    age: 20,
    location: "Delhi",
    email: "vshl2706@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}   // This is an object

console.log(JsUser.email)       //In most of the cases we access values through this method(dot method)
console.log(JsUser["email"])
console.log(JsUser["full name"])    // You cannot access the string key with 'JsUser."fullname"
console.log(JsUser[mySym])

// How to change values in an object
JsUser.email = "vishaloffice557@gmail.com"
// Object.freeze(JsUser)   // freeze function is used so that no one further can modify object
JsUser.email = "Vishal@microsoft.com"
// console.log(JsUser)

// How to use function inside object ? ==> Treat functions as variable
JsUser.greeting = function(){
    console.log("Hello JS User")
}
console.log(JsUser.greeting())

JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`)      //This format is called backtex(String interpolation)
}
console.log(JsUser.greeting2())