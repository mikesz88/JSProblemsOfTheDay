/*
  count how many times the letter 's' is used in a sentence
  1. Create a function called: countAllS
  2. The function brings in an argument that is a sentence (string). 
  3. Return the amount of times the letter s is used lowercase or uppercase.
*/

// Write your code below:
const countAllS = (string) => {
  let count = 0;
  const arrayOfWords = string.split(' ');
  for (const word of arrayOfWords) {
    const arrayOfChar = word.split('');
    count += arrayOfChar.filter(
      (letter) => letter.toLowerCase() === 's'
    ).length;
  }
  console.log(count);
  return count;
};

countAllS('michael SancheS ss She best.');
// Finish this up with more examples.
// Create the tests for this.
// Still need to make the hot
// potentially make diablo
