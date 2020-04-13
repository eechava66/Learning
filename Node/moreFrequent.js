
const moreFrequent = (arr) =>{
    let reduced = {}
    array.forEach( val => {
        (reduced[val]) ? reduced[val] += 1 : reduced[val] = 1;
    })

    let entries = Object.entries(reduced);
    let biggest = [0,0];
    entries.forEach( (val) => {
        console.log(val)
        if (val[1] > biggest[1])   
            biggest = [val[0],val[1]]
        else if (val[1] == biggest[1])  
            biggest[0] = Math.min(val[0],biggest[0])  
    })
    return biggest[0]
} 