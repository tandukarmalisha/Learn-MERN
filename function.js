/**
 * A function can take anything as an input
 * function can return anything as output
 * 
 * 
 */
function addTwoNumbers(a,b){ 
    let c = a + b
    //function body
    // return is optional
    //Any vatiable declared within funciton is function variable
    return c;
}

//a, b, c===> not av
// let result = addTwoNumbers(10, 20)
// console.log(result)

// const addTwoNumbers=function addTwoNumbers(a,b){ 
//     let c = a + b
//     //function body
//     // return is optional
//     //Any vatiable declared within funciton is function variable
//     return c;
// }

// //a, b, c===> not av
// let result = addTwoNumbers(10, 20)
// console.log(result)

const user = {
    name: "Malisha",
    getName: function(){
        //this
        return this.name;
    },
    //getName1: ()==> {}
}

//
//console.log()
console.log(user.getName())

console.log(greeting + "," + this.name + punctuation)
function greet(greeting, punctuation){
}

greet.call ({name: "Malisha"},"Hello",".....")
greet.apply(name: "Malisha"},{"Hello", "...."})







// Recursive
// closure
// cancelIdleCallback
// async function name(

