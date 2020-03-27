'use strict'

var p = new Promise((resolve,reject) => {
    let a = 1 + 2;
    if(a === 2){
        resolve('sucess')
    }else{
        reject('error')
    }
});

p.then((result) =>{
    console.log('Result '+ result);
}).catch((err) => {
    console.log('Result '+ err)
});