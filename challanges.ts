// Challenge 1 Done ✔️
/*  Create a function addTwo that accepts one input and adds 2 to it. */

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

const addTwo = (input: number) => {
  return input + 2;
};
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2 Done ✔️
/* 
Create a function addS that accepts one input and adds an "s" to it.
*/
// uncomment these to check your work
//console.log(addS("pizza"));
//console.log(addS("bagel"));

const addS = (input: string) => {
  return input + "s";
};
console.log(addS("pizza"));
console.log(addS("bagel"));

// Challenge 3 Done ✔️
/* 
Create a function called map that takes two inputs:
1. An array of numbers (a list of numbers)
2. A 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
*/
//console.log(map([1, 2, 3], addTwo));

type AddTwoFunction = (input: number) => number;

const map = (array: number[], addTwo: AddTwoFunction): number[] => {
  return array.map(addTwo);
};
console.log(map([1, 2, 3], addTwo));
