'use strict'

//Regular mode
function newFunction(name, age, country){
    var name = name || 'Esteban';
    var age = age || '21';
    var country = country || 'Col'
    console.log(name,age,country);
}

//ES6+
function newFunction2(name = 'Esteban', age = '21', country = 'Col'){
    console.log(name,age,country)
}

newFunction()
newFunction2()

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase) 

let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)