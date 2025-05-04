/** Array
 * Collection of data separated by commma
 * assigned in index value pair
 * index always start from 0
 * enclosed by []
 * 
 * -collection of data
 */

// Single Dimensional Array
let productInfo = ["Product Name","Cat 1","brand bane",2000,10];
console.log(productInfo[0])
    console.log(productInfo[1]);
    console.log(productInfo[2]);

    //Multidimensional array
    let allProducts = [
        ["Product Name","Cat 1","brand name",2000,10],
        ["Product name","Cat 2", "brand1",1700,8],
        ["Proudct name","Cat3","brand2",1100,5],

    ]
    console.log(allProducts[2][0]);
    console.log(allProducts[2][1]);
    console.log(allProducts[2][3]);
    console.log(allProducts[2][4]);

    let product1 = [
        "Iphone 12", //data-type: string, 0 index, product Name
        "apple",   //brand, string
        "Smart Phone",      //category
        12000,          //price
        15,             //quantity
        10              //discoount
    ]
    let afterdiscount = product1[3] - product1[3]*product1[4] / 100


    let productObj = {
        discount: 10;
        name= "iphone 12",
        brand = "apple",

    };
    console.log(productObj.name)
    console.log(productObj)


    //JSON (JavaScript object notation)
    //universal data type
    //any programming language does support JSON
    //API consume, return


    let phoneDirectory = [];

    leet userOne = {
        name: "Username One",
        email: "one@username.com",
        address:"Kathmendu",
        phone: 983424543,
    };
    let userTwo = {
        name: "Usernaeme Two"
    }
    //insert in an array
    //from end (like queue)

    //fron top (like Stack)
    phoneDirectory.unshift(userFour)
    //or from any position

    let userFive = {
        name: "Username Five",
        email: "five@username.com",
        address: "Bhaktapur",
        Phone: 9839284902,
    }


    //Read from an array
        //from end(stack)
        let last = phoneDirectoy
        //from top(queue)
        //or from any position
        //splice
        //push
        //pop
    


        //Task: 
        //Create an array variable named as students and assign at least 5-10 student information, as an object to the array. 
        //USe a different array functions for insertion ( .push(), .unshirt(), .splice())
        // Each student information should contain name, email, address and scroObtained(Should be less than 200)