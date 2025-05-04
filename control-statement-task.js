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
let amount=0;
let unit = 25;
if (unit<=30){
    amount=80;
}else if (unit<=50){
    amount= 80 + (unit-30)*4.5
}else if (unit<=80){
    amount= 80 + 20*4.5 + (unit-50)*5
}else if (unit<=130){
    amount= 80 + 20*4.5 + 30*5 + (unit-80)*7.5
}else if (unit<=230){
    amount= 80 + 20*4.5 + 30*5 +50*7.5 + (unit-130)*12
}else if (unit<=430){
    amount = 80 + 20 * 4.5 + 30 * 5 + 50 * 7.5 + 100 * 12 + (unit-230) * 15
}
else{
    amount = 80 + 20 * 4.5 + 30 * 5 + 50 * 7.5 + 100 * 12 + 200 * 15 + (unit-430) * 25
}
console.log(amount)