/* 
  1. Create a function called: addNumbersAbove100
  2. The function will receive an argument of an array of numbers
  3. return a number that is the sum of all the numbers in the 
  array that are greater than or equal to 100!
*/

const addNumbersAbove100 = (array) =>
  array.filter((num) => num >= 100).reduce((a, b) => a + b);
