const lib = require("./lib")

console.log("lib", lib.sum(4,5), lib.diff(5,2))

const name = 'Raj'
const age = 20 
const location = 'India'
  
// User with ES6 shorthand 
// property  
const user = { 
    name,       
    age, 
    location 
} 
  
console.log(user) 