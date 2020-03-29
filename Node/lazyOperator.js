'use strict'

const obj = {
    'name': 'Esteban',
    'age': '21',
    'country': 'col'
}

let {name, ...all} = obj;
console.log(name,all)

const obj2 = {
    'name' : '🙋',
    'age' : '21'
}

const obj3 = {
    ...obj2,
    'country' : 'col'
}

console.log(obj3)