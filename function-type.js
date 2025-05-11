// // const func1 = () => {
// //   let x = 10


// //   const func2 = () => {
// //       console.log("I am in func2")
// //       console.log("value of x is: ", x)
// //   }
// //   return func2;
// // }


// // const func3 = () => {
// //   // 
// //   const func2 = () => {
// //     console.log("I am in func2");
// //     console.log("value of x is: ", x);
// //   };
// // }


// // let result = func1()  
// // result()
// // // console.log(result())       // undefinedc

// // callback 
// const func1 = (cb) => {
  
//   cb()
// }

// const func3 = (cb) => {
//   // logic 
//   cb()
// }


// const func2 = () => {

// }

// func2()
// func1(func2)

// func3(func2)

function handler(i){
    console.log(i+". I am inside handler function, "+this.name)
    // i++
  }
  const handler1 = handler.bind({name: "First"}, 1)
  const handler2 = handler.bind({ name: "Second" }, 2);
  const handler3 = handler.bind({ name: "Thrid" }, 3);
  // console.log(handler1)
  // handler1()
  
  // setTimecut(handler3, 1000);
  
  
  // setInterval(handler1, 1000)
  
  // polling 
  // bi-directional converstation 
    // socket programming (RTC)
  
  
  // js digitial clock
  const showClock = () => {
    // logically clock 
    let today = new Date()
    const hours = `${today.getHours()}`.padStart(2, '0')
    const minutes = `${today.getMinutes()}`.padStart(2, '0')
    const seconds = `${today.getSeconds()}`.padStart(2, '0')
    console.log(hours+":"+minutes+":"+seconds)
  }
  
  // showClock()
  // setInterval(showClock, 1000)
  
  // setInterval(() => {
  //   // logically clock
  //   let today = new Date();
  //   const hours = `${today.getHours()}`.padStart(2, "0");
  //   const minutes = `${today.getMinutes()}`.padStart(2, "0");
  //   const seconds = `${today.getSeconds()}`.padStart(2, "0");
  //   console.log(hours + ":" + minutes + ":" + seconds);
  // }, 1000);
  
  
  let arr = [1,2,3,4,5,6]
  
  const hanlder = (val, i) => {};
  
  // for(let i in arr) {
  //   console.log(i)
  //   console.log(arr[i])
  // }
  
  // 
  
  arr.forEach(handler)
  
  arr.forEach((val) => {
    console.log({val})
  });
  
  let newarr = arr.map((val, i) => {
    return val * 2
  })
  
  console.log(newarr)