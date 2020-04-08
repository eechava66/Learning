'use strict'
var t0 =  new Date().getTime();

const hello = async () =>{
    setTimeout(_ => process.exit(0), 10000);
    //Returns a promise
    return 1
} 

const greet = async (num) => {
    //Microtask is before setTimeOut
    let greeting = await hello(num);
    //SetTimeOut has the latest priority
    setTimeout(_ => {
        console.log(`woo! ${num} in time ${new Date().getTime()-t0}`);
        setTimeout(_ => console.log(`nested woo!🍲 ${num} in time ${new Date().getTime()- t0}`),1000)
        }
        , 5000);
    if(num < 3) greet(num+1);
    setTimeout(_ => process.exit(1), 7000);
}

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code} in time ${new Date().getTime()-t0}`);
  })
  
greet(1);