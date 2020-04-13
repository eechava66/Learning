
function arrayConsecutive (arr) {
    var sorted = arr.sort((a,b) =>{
        console.log(`${a} - ${b} = ${a-b}`)
        return  (a - b)})
        
    console.log(sorted)
    var full =  sorted[sorted.length-1] - sorted[0] +1
    console.log(sorted[sorted.length-1])
    console.log(full)
    return full - sorted.length
}

    var puntos = [6, 2, 3, 8];  
    console.log(arrayConsecutive(puntos))