'use strict'

//Set up a microtask and logs task 1
function task1(){
    Promise.resolve().then(_=> {console.log('Microtask 1')});
    console.log('task 1');
}

//Set up a microtask and logs task 2
function task2(){
    Promise.resolve().then(_=> {console.log('Microtask 2')});
    console.log('task 2');
}

//Since we are calling from Javascript code, Eventloop won't be empty and will
//finish the script, if there would be a button listener, after adding 1 listener
//the task stack would be empty and it will execute Microtask 1
task1();
task2();