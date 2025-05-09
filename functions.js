// 1 to 10
const printTill10 = (i) => {
    if(i<=10){      // 10 <= 10
        console.log(i); //10
        i++ //11
        printTill10(i)  //11
    }
}

printTill10(1)