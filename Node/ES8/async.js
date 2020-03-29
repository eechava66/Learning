'use strict'

//Resolves a promise
function a(){
    return Promise.resolve('a')
}


async function b(){
    return Promise.resolve('b')
}

//Wraps return in a Promise
async function c(){
    return 'c'
}

console.log(a())

//Using promise
console.log(b().then(val => {
    console.log("Getting here")
    console.log(val)

}))
console.log(c())


