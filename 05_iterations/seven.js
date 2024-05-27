const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})
// Agar ham scope open krenge toh hame value return krni pdegi

// Chaining => Use of combination of two or maps and filters
const newNums = myNumers
                .map( (num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);