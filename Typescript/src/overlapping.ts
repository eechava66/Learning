/**
 * Interfaces w/ same name are merged
 */

interface IntPerson {
    name: string
  }
  
interface IntPerson {
  age: number
}

const john: IntPerson = {
  name: "John",
  age: 26,
}

/**
 * types w/ same name generate error
 */

type Person = {
  name: string
}

/**
 *  //this will fail bcs type Person is already defined
 *  type Person {
 *        age : number
 *    }
 * 
 * 
 */