let products = [
    {
        name: "Product one",
        price: 1000,
        discount: 10,
    },
    {
        name: "Product two",
        price: 3245,
        discount: 7.5,
    },
    {
        name: "Product three",
        price: 5434,
        discount: 9,
    },

];

let discountAmt= 0;
let afterDiscount = 0;


//without using loop for each product:
// discountAmt = products[0].price * products[0].discount / 100;
// afterDiscount = products[0].price - discountAmt;
// products[0].discountAmount = discountAmt;
// products[0].afterDiscount = afterDiscount;

for (let i=0; i<products.length; i++){
discountAmt = products[i].price * products[i].discount / 100;
afterDiscount = products[i].price - discountAmt;
products[i].discountAmount = discountAmt;
products[i].afterDiscount = afterDiscount;
}

// Print the array in the following format using loop:
// Product name: ......afterDiscount...

for (let i=0; i<products.length; i++){
    console.log("Product Name: name "+products[i].name)
    console.log("Product Price Npr: "+products[i].price)
    console.log("Discount in % "+products[i].dicount)
    console.log("Discount Amount"+products[i].discountAmt)
    console.log("After Discount"+products[i].afterDiscount)
    console.log("..........................................")
}
// for in, for of loops are used with array data only