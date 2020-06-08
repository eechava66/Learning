

let matrix =
[[1,2,3,4,5], 
[6,7,8,9,10], 
[11,12,13,14,15],
[16,17,18,19,20],
[22,23,24,25,26]];

let matrix3 =
[[1,1,1,1,1], 
[1,1,1,1,1], 
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,0]];

let matrix2 = 
[[0,0,0],
[0,0,0],
[0,0,0]]

function largestArea(samples) {
    let min = 0;
    for(let i = 0; i <= samples[0].length-min; i++){
        for( let j = 0; j <= samples[0].length-min; j++){
            let newMatrix = getSubMatrix(samples,j,i,samples[0].length-i);
            let exploration = exploreArea(newMatrix);
            if(exploration.clean && exploration.size > min) min = exploration.size  
        }
    }     
    return min
}   


function getSubMatrix(matrix, startRow, startCol, length) {
    return matrix.slice(startRow, startRow + length).map(row => row.slice(startCol, startCol + length));
}

function exploreArea(subM){
    let clean = true;
    for(const row of subM){
        let indexOf = row.indexOf(0) 
        if(indexOf !== -1){
            clean = false;
        };
    }
    return {clean, size : subM.length}
}

console.log(largestArea(matrix3))