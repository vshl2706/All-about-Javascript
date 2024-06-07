// We will learn in this how to create method
// let myName = "Hitesh     "
// console.log(myName.trim().length)   // We can also remove spaces in length counting

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

// By doing the below we can add a property to any object
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`)
}

// heroPower.hitesh()

// By doing below we only add power to arrays but not objects
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`)
}

myHeros.heyHitesh()
// heroPower.heyHitesh()    // This will not work

// INHERITANCE

const User = {
    name: "Chai",
    email: "chai@google.com",
}

const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport  // By doing this we can access another object properties 
}

Teacher.__proto__ = User // Teacher can access properties of User 

// Modern syntax for doing the same above
Object.setPrototypeOf(TeachingSupport, Teacher)    // TeachingSupport access the properties of Teacher

let anotherUsername = "ChaiAurCode      "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
// Jis ka matlab this
"hitesh    ".trueLength()
"iceTea".trueLength()