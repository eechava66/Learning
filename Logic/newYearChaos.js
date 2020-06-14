'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumBribes function below.
function minimumBribes(q) {
    let bribes = 0;
    for(const [index,num] of q.entries()){
        if(num-1 - index > 2){
            console.log("Too chaotic")
            return;
        }

        for(let i = Math.max(num-2,0); i < index; i++ ){
            if(q[i] > num){
                bribes++;
            }
        }
    }
    console.log(bribes)
}


function main() {
    
    const t = parseInt(readLine(), 10);
    console.log(t)
    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
