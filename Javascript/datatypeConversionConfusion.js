// let score = "null"
// // let score = null
// // let score = true
// // let score = false
// let score = 123
let score = "123abc"

//const {score} = req.body

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => Nan NOt a number
// "true" =/ 1: false =. 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => ture
// "" => false
// "Kamal" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)




