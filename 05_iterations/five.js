const coding = ["js", "ruby", "java", "python", "cpp"]
// Function is applied inside array 
// Callback function me function ka name nahi aata
coding.forEach( function (item) {
    // console.log(item);
} )

coding.forEach( (item) => {
    // consle.log(item)
})

function printMe(item){
    console.log(item);
}
// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})

// IMPORTANT => How to access the objects using foreach
const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
    
]
myCoding.forEach( (item) => {
    console.log(item.languageName)
    console.log(item.languageFileName)
})