interface properValues {
    str: string
    num: number
}

/**
 * 
 * typeguard
 * 
 */
function isProperValues(obj : any): obj is properValues {
    return typeof obj.str === "string" && typeof obj.num === "number"
}

const test : any = {
    str : '1',
    num : 2
}

if(!isProperValues(test)){
    throw new Error("invalid values")
}

const nonValid : any = {
    str: 1,
    num : '1'
}

nonValid as properValues
console.log(typeof nonValid.str === "number")