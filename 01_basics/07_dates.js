// Dates

let myDate = new Date()
console.log(myDate)
console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())    // Date only
console.log(myDate.toLocaleString())    // Date with time
console.log(typeof myDate)

let myCreatedDate = new Date(2023, 0, 23)   // In javaScript months start from 0
console.log(myCreatedDate.toDateString())   

let myCreatedDate1 = new Date(2023, 0, 23, 15, 3)   // Last two are inserted for time
console.log(myCreatedDate1.toDateString())
console.log(myCreatedDate1.toLocaleString())

//Other formats of Date 
// let myCreatedDate2 = new Date("2024-05-19")
let myCreatedDate2 = new Date("05-19-2024")
console.log(myCreatedDate2.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate2.getTime())
console.log(Math.floor(Date.now()/1000))    // To convert it into seconds

let newDate = new Date()
console.log(newDat e)
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday : "long",
})