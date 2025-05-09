/** Array
 *
 * is  a collection of data
 * separated by comma
 * assigned in index-value pair
 * index always starts from 0
 * enclosed by []
 *
 * - collection data
 */

// Single Dimensional array
let productInfo = ["Product Name", "Cat 1", "brand Name", 1000, 10];

console.log(productInfo[0]);
console.log(productInfo[1]);
console.log(productInfo[2]);
console.log(productInfo[3]);
console.log(productInfo[4]);

// Multi Dimensional Array
let allProducts = [
  ["Product Name", "Cat 1", "brand Name", 1000, 10],
  ["Product Name 2", "Cat 2", "brand 1", 1200, 8],
  ["Product Name 3", "Cat 3", "brand 2", 1765, 7],
  ["Product Name 3", "Cat 3", "brand 2", 1765, 7],
];

console.log(allProducts[2][0]); // []
console.log(allProducts[2][1]); // []
console.log(allProducts[2][2]); // []
console.log(allProducts[2][3]); // []
console.log(allProducts[2][4]); // []


let product1 = [
  "iPhone 12",    // data-type: string, 0 index, product Name
  "apple",      // brand, string
  "Smart Phones",   // category
  120000,       // price 
  15,            // ? 
  10           //  discount, 
]

let afterDiscount = product1[3] - product1[3] * product1[4] / 100


let productObj = {
  discount: 10,
  name: "iPhone 12",
  brand: "apple",
  category: "Smart Phones",
  price: 120000,
  stock: 15,
};

console.log(productObj.name)
console.log(productObj['price'])

let result = productObj.price - productObj.price * productObj.discount /100

console.log(result)


// JSON (JavaScript Object Notation)
// Universal Data type 
  // any programming language does support JSON
    // API consume, return 

let phoneDirectory = [];

let userOne = {
  name: "Username One",
  email: 'one@username.com',
  address: "Kathmandu",
  phone: 9876543210
}
let userTwo = {
  name: "Username Two",
  email: "two@username.com",
  address: "Kathmandu",
  phone: 9809876543,
};
// Insert in an array 
  // from end (Like Queue)
  console.log(phoneDirectory)   // []

  phoneDirectory.push(userOne, userTwo)

  // console.log(phoneDirectory)   // [{}, {}]

let userThree = {
  name: "Username Three",
  email: "three@username.com",
  address: "Lalitpur",
  phone: 9876098769,
};
phoneDirectory.push(userThree)
  // console.log(phoneDirectory)   // [{}, {}, {}]

  // phoneDirectory.push(userTwo);

let userFour = {
  name: "Username Four",
  email: "four@username.com",
  address: "Bhaktapur",
  phone: 985421098,
};
// [{}, {}, {}, {}]
  // from top (like Stack)
  phoneDirectory.unshift(userFour)
  // console.log(phoneDirectory)
  // or any position

let userFive = {
  name: "Username Five",
  email: "five@username.com",
  address: "Bhaktapur",
  phone: 9876509876,
};

// 0,1,..., 2,3
phoneDirectory.splice(2, 0, userFive)
// console.log(phoneDirectory)
// 0,1,2,3,
// Read from an array
  // from end (stack)
  // let last = phoneDirectory.pop()
  // console.log(phoneDirectory)
  // from top (queue)
  // let first = phoneDirectory.shift()
  // or any position 

  // 0,1,2,3,4 => return index 2 => shift 3 to 2, 4 to 3
  let index2 = phoneDirectory.splice(2,2)
  // splice(index, counter, [replacement value])
  // .splice(1,0, "any")  
    // 1 insert "any"
  // .splice(1,1, "any")
    // 1 index replace "any" reutrns existing 1 indexed value
  // .splice(1,2,"any")
    // 1and 2 index value will be returned, and replace with "any" and shift another value 
  // .splice(1, 1)  
    // return index value 1 value and shifts the next elements
  console.log(phoneDirectory)


// Task: 1 
// Create an array variable named as students and assign atleast 5-10 student informations as an object to the array.
// Use different array functions for insertion (.push(), .unshift(), .splice() )
// Each student information must contain, name, email, address, and scoreObtained(Should be less than 500)