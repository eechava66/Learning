/**
 * Interfaces uses keyword extend to add new attributes
 */
interface PersonNameInterface { name: string }
interface Person1 extends PersonNameInterface { age: number }

/**
 * A Interface can extend from a type and a class
 */
type PersonNameType = { name: string }
interface Person2 extends PersonNameType { age: number }

//This is weird, includes the attribute name but 
//You cannot use the default name
class PersonClass { name = "Jhon" }
interface Person3 extends PersonClass { age: number }

const carl : Person3 = { 
    age : 10,
    name : 'Carl'
}

console.log(carl)

/**
 * Types cannot extend classes or interfaces
 * instead they can have an intersection type
 */

// Intersection with another type
type PersonNameType2 = { name : string }
type PersonType = PersonNameType2 & { age: number}

const person: PersonType = {
    name : 'Carl',
    age: 10
}

// Intersection with another interface
type PersonType2 = PersonNameType & { age: number }
const person2: PersonType2 = {
    name : 'Carl',
    age: 10
}