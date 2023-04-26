/**
 * Never represents a value that never occurs
 * for example a function that never returns or a type
 * impossible to represent
 */

let b : never;
// b = 1 you cannot instantiate never 
console.log(typeof b)


function throwError(message: string): never {
    throw new Error(message);
  }

/**
 * For unknown I don't know type at compilation
 */

let userInput: unknown;
let userName: string;

userInput = 5;
// userName = userInput; // Error: Type 'unknown' is not assignable to type 'string'.

function assignName(userInput : unknown) : string | undefined{
    let username: string;
    if (typeof userInput === 'string') {// Type assertion
        username = userInput; // No error because of type assertion
    }
    console.log(username)
    return username
}

assignName("Carl")

/**
 * any disables all type checks
 */
let a : any = 1
a = 'a'
a = {}