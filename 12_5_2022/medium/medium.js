// delete after testing
// import { employees } from '../data/data';
import { employees } from '../data/data.js';

/* 
  You are to follow the directions for each prompt listed below.
  You are expected to import the data from data folder in order to solve the functions below.
  Hint: do not forget the file type 'js' at the end!
*/

/*  
  Create a function called: reverseSort.
  You must return the employees in reverse alphabetical order.
  Throw an error message that says 'There are no employees.' if the array is empty.
  Throw an error message that says 'Not all employees have jobs' if the array has a 'job' property on each object.
*/
const reverseSort = (data) => {
  if (!data.length) {
    throw new Error('There are no employees.');
  }
  if (!data.every((employee) => employee.job)) {
    throw new Error('There are no employees.');
  }
  return data.sort((a, z) => {
    if (a.name < z.name) {
      return 1;
    }
    if (a.name > z.name) {
      return -1;
    }
    return 0;
  });
};
console.log(reverseSort(employees));
