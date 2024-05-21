function sayMyName(){
    console.log("V")
    console.log("I")
    console.log("S")
    console.log("H")
    console.log("A")
    console.log("L")
}

sayMyName()

// function addTwoNumbers(number1, number2){       // Parameters
//     console.log(number1 + number2 )
// }
// addTwoNumbers(3, 4)     // Arguments
// addTwoNumbers(3, "4")
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)

function addTwoNumbers1(number1, number2){       // Parameters
    let result = number1 + number2
    console.log("Vishal")
    return result
    console.log("Vishal")       // In functions Nothing will execute after return statement
}
const result = addTwoNumbers1(3, 5)
console.log("Result is : ",result)

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username")
        return      // After this statement below code will not execute
    }
    return `${username} just loggeed in`
}

console.log(loginUserMessage("Vishal"))
console.log(loginUserMessage())