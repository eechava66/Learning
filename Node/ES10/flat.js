'use strict'

let arr = [1,2,3,[1,2,3 , [1,2,3]]];
console.log(arr.flat(2));

let arr2 = [1,2,3,4,5];

console.log(arr2.flatMap(val => [val , val * 2]));

let hello = '      hello world        ';
console.log(hello.trimStart());
console.log(hello.trimEnd());