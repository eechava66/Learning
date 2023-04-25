/**
 *  Classes can implement interfaces and types
 *  unless type is an union type
 */

interface PersonInt{
    name: string
    age: number
}

class John implements PersonInt{
    name: "John"
    age : 30
}

type PersonTyp = {
    name: string,
    age: number
}

class Carl implements PersonTyp{
    name : "Carl"
    age: 15
}

/**
 *  Union types can be one or the other or both
 */
type union = { name : string } | { age: number } 

/*  error, class can only implement intersection types
    class Joel implements union{

    } 
*/

const Peach : union = {
    name: 'Peach'
} 

const Age : union = {
    age: 12
} 

const Peaches : union = {
    name: 'Peach',
    age: 12
}