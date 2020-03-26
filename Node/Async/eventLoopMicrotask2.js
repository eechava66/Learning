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

task1();
task2();