//create a array variable name as students and assign atleast 5-10  information as an object to the array.
//use different array function for insertion (.push(), unshift(), .splice())
//Each student information must contain, name , email, address, and scoreObtained (should be less than 500)

let student = []

let stu1 = {
    name: "Malisha Tandukar",
    email: "m1@gmail.com",
    address: "Kathmandu",
    scoreObtained:200,

}

let stu2 = {
    name: "Malisha Tandukar",
    email: "m2@gmail.com.com",
    address: "Kathmandu",
    scoreObtained:300,

}

let stu3 = {
    name: "Rita Sharma",
    email: "rita@gmail.com",
    address: "Bhaktapur",
    scoreObtained:250,

}

let stu4 = {
    name: "Jenny Shrestha",
    email: "jenny2@gmail.com",
    address: "Kathmandu",
    scoreObtained:380,

}

let stu5 = {
    name: "James Shakya",
    email: "james@gmail.com",
    address: "Lalitpur",
    scoreObtained:300,

}

console.log(student);
student.push(stu1, stu2, stu3, stu5);
console.log(student);

// student.unshift(stu5);
// console.log(student);

student.splice(3,1,stu4);
console.log(student);

// student.splice(3,1,stu4);
// console.log(student);