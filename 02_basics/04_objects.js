//Singleton or With the help of constructor
const tinderUser = new Object()     //Singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)


// Objects inside objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Vishal",
            lastname: "Singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

// HOW TO COMBINE TWO OBJECTS ?
const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}
const obj3 = {
    5: "A",
    6: "B"
}
// const obj4 = {obj1, obj2}
const obj4 = Object.assign({}, obj1, obj2, obj3)
console.log(obj4)

// Spreading method
const obj4sp = {...obj1, ...obj2}
console.log(obj4sp)

const users = [
    {
        id: 1,
        email: "h1@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    },
    {
        id: 3,
        email: "h3@gmail.com"
    },
    {
        id: 4,
        email: "h4@gmail.com"
    },
]
// console.log(users[4].email)

console.log(tinderUser)
console.log(Object.keys(tinderUser))        // Returns the keys inside an array
console.log(Object.values(tinderUser))      // Returns the values inside an array
console.log(Object.entries(tinderUser))     // Returns the Array inside array of different [key value] pairs

console.log(tinderUser.hasOwnProperty('isLoggedIn'))    // Used to check whether the given property is present in object or not