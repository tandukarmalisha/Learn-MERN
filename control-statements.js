/**
 * Decision making statements
 * flow control
 * direction provide
 * -if-else
 * -else-if
 * -switch-case statement
 * 
 * -loop
 */

//syntax
//truthy
    //-not null, true, any number except 0, variables containing values or defined
//falsey
    // - null, false, 0, empty variables, undefined
// if(expression){
//     //if block
// }else {
//     //optional block
// }

// let x= 1;

// if (x){
//     console.log
// }

// task:
//create a javascriot variable to store the name of a day (Sunday till Saturday)
//print the following
// if day ==> Saturday or Sunday ==> Print Holiday
// if day ==> Friday =====> print weekend
// if day ==> Other than these ===> print weekday
//use if-else only

let day = "Sunday";

if (day==="Sunday"|| day ==="Saturday"){
    console.log("Holiday")
}else {
    if(day==="Friday"){
        console.log("Weekend")
    }else{
        console.log("Weekday")
    }
}
// if there's a control statement within control statement then it is known as nesting

//switch case
switch(day){
    //body
    case "Friday":
    console.log("Weekend")
    break;
    case "Sunday":
    case "Saturday":
        console.log("Holiday")
    break;
    default:
        console.log("Weekend")
}

let dayNo=1;
switch(dayNo)
{
    case 1:
        console.log("Sunday")
    case 2:
        console.log("Monday")
    case 3:
        console.log("Tuesday")
    case 4:
        console.log("Wednesday")
    
}
//create a javascript object named student with name, email, marksObtained as a number value
//Assign somme static value to the student variable
// consider total as 500
//Print the percentage and division based on the marksObtained by following breakdown:
//If percentage is >= 80  ==> print distinction
//if percentage is >= 60 but <80 ==>print First division
//if perventage is >=45 but <60 ==> print second division
//if perecentage is >=32 but < 45 ==>print third division
//if percentage is <32 ==> print Sorry! You ARE FAILED
let student{

    name:"Malisha Tandukar",
    email:"tandukarmalisha728@gmail.com"
    marksObtained=350,
}
const TotalMarks = 500
const percentage=student.marksObtained/TotalMarks*100;
console.log(student)
if (percentage >= 80)
{
    console.log("Distinction")
}else if(percentage)

switch(true){
    case percentage >= 80:
        console.log("Distinction")
    
}
 //Task 2:
 // Calculate electricity bill amount to be paid based on the following:
 // Consider total units consumed to be some non negative numeric value.
 //The bill amount to be calculated has to follow the follwing:
 //If total units consumed is <=30, a lumsum amount of Npr. 80 has to be paid
 //for next 20 units, the rate is Npr. 4.5 units
 //for next 30 units, the rate is Npr 5 units
 // for next 50 units, the rate is Npr 7.5 units
// for next 100 units, the rate is Npr. 12/units
// for next 200 units, the rate is Npr. 15/units
//for above any, the rate is Npr. 25/unit

//What will be the bill amount if, units consumed are:
//a. 25 ==> 80
// b. 37
// c. 65
//d. 100
//e. 120
//f. 223
//g. 350
//h. 457