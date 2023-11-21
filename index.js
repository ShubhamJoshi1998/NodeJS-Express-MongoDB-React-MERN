// const lib = require("./lib.js")
import { sum, diff } from "./lib.js"
// const fs = require('fs');
import fs from 'fs'

//const txt = fs.readFileSync('demo.txt', 'utf-8');
//console.log(txt)
fs.readFile('demo.txt', 'utf-8', (err, txt) => {
    console.log(txt)
});


console.log("lib", sum(4,5), diff(5,2))

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