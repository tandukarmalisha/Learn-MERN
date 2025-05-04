/**
 * a. String
 * '', "", ``
 * b. Number
 * 123, 12.3, 12e3
 * c. Boolean
 * true, false
 * d. NULL
 * null,
 * e. Undefined
 * 
 * f. array
 * - collection of data separated by coma, enclosed within [], assigned with index-value pair, index starts from 0
 * g. Object/ JSON (Js object notation)
 * - collection of data separated by comma, enclosed within {}, assigned with key-value pair
 * - JSON data is known as universal datatype
 * h. Function
 * -
 */
// let a;      //undefined
// these 5 data types are known as javascript primitives

let a = '';
let b = "";
let c = ``;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c); //string

let d = [1,2,3,4,5,'a','b', null, true, false, []]
console.log(typeof d)       //object

let name = 'Malisha'
console.log(name.toUpperCase())

let decimal = 123.1231231212
console.log(decimal.toFixed(2))

let userObj = {
    name: "Malisha",
    email: "tandukarmalisha412@gmail.com"
}

const addNumber = () =>{}
console.log(typeof addNumber)

//operators