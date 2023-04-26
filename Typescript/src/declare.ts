/**
 * Mostly used for declaring variables for a 
 * class that has not types declared
 */

declare const myLibrary: {
    myFunction: (x: number, y: number) => number;
    myString: string;
  };
  
  const result = myLibrary.myFunction(2, 3);
  console.log(result); // Output: 5
  
  const message = `The value of myString is ${myLibrary.myString}`;
  console.log(message); // Output: "The value of myString is Hello, World!"