'use strict'

const hello = async () =>{
    //Returns a promise
    return setTimeout(_ => console.log('hello world'), 10000);
} 

const greet = async () => {
    //Sets a microtask
    let greeting = await hello();

    console.log('woo!')
    process.exit(0); //Process.exit will finish the code even if the promise is'nt resolved
}

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
  })
  
greet();