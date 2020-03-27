'use strict'

function Horse(name){
    this.name = name;

    this.poop = function (){
        console.log('💩💩💩')
        return this
    }
}

const myHorse = new Horse('jeff');

//Since im returning the actual objet from the function poop, I can chain the functions and variables. 
console.log(myHorse.poop().poop().poop().name);
