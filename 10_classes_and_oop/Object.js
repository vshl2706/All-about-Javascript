function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

function createUser(username, score){
    this.username = username
    this.score = score
}

// Below is the method to define your own pre-defined function
createUser.prototype.increment = function(){
    this.score++
}
// this ka matlab jis
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`)
}

// without the help of new keyword we cannot use our made function
// The new keyword initiates the creation of a new Javascript object. 
const chai = new createUser("Chai", 25)
const tea = createUser("tea", 250) // In this we cannot use our own made function
chai.printMe()
chai.increment()
chai.printMe()
 