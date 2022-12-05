/* 
  You are to follow the directions for each prompt listed below.
  YOU ARE CREATING EVERYTHING WITH THE EXAMPLE employees array in mind as you data.
  Hint: I made this so you practice methods! 
  So make sure you know which mutate and which don't. 
  Also, READ DOCUMENTATION!
*/

// DO NOT TOUCH. USE IT, BUT DO NOT TOUCH IT!
const employees = [
  {
    name: 'Michael',
    job: 'Owner',
    salary: 500000,
  },
  {
    name: 'Lisa',
    job: 'CEO',
    salary: 200000,
  },
  {
    name: 'Lily',
    job: 'CTO',
    salary: 150000,
  },
  {
    name: 'Mila',
    job: 'CFO',
    salary: 89975,
  },
  {
    name: 'Remi',
    job: 'Lead Developer',
    salary: 75000,
  },
  {
    name: 'Kenzie',
    job: 'Junior Developer',
    salary: 50499,
  },
  {
    name: 'Alec',
    job: 'Designer',
    salary: 35499,
  },
  {
    name: 'Emma',
    job: 'Designer',
    salary: 35499,
  },
  {
    name: 'Missy',
    job: 'Full-Stack Developer',
    salary: 250000,
  },
  {
    name: 'Nico',
    job: 'Product Owner',
    salary: 170000,
  },
];

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
// console.log(reverseSort(employees.slice()));

/*  
  Create a function called: over100k.
  You must return the employees names whose salary is over 100k.
*/
const over100k = (data) =>
  data.filter((employee) => employee.salary >= 100000).map((emp) => emp.name);
// console.log(over100k(employees));

/*  
  Create a function called: findJrDev.
  You must return the employee that has a job title of 'Junior Developer'
*/
const findJrDev = (data) =>
  data.find((employee) => employee.job === 'Junior Developer');
// console.log(findJrDev(employees));

/*  
  Create a function called: findAvgSalary.
  You must return the average salary among all employees rounded to the nearest hundredths;
*/
const findAvgSalary = (data) =>
  +(
    Object.keys(data).reduce((sum, key) => {
      return sum + data[key].salary;
    }, 0) / data.length
  ).toFixed(2);
// console.log(findAvgSalary(employees));

/*  
  Create a function called: sortBySalary.
  You must return all the employees but sorted by:
  SMALLEST TO LARGEST SALARY;
*/
const sortBySalary = (data) =>
  data.sort((a, z) => {
    if (a.salary < z.salary) {
      return -1;
    }
    if (a.salary > z.salary) {
      return 1;
    }
    return 0;
  });
// console.log(sortBySalary(employees.slice()));

/*  
  Create a function called: addBonus.
  You must return all the employees with each having a new bonus property depending on their salary.
  If they have a salary less than 100k:
    return a bonus that is 5% of their salary (rounded to the hundredths place)
  If they have a salary equal to or more than 100k:
    return a bonus that is 10% of their salary (rounded to the hundredths place)
*/
const addBonus = (data) =>
  data.map((employee) => {
    if (employee.salary < 100000) {
      return {
        ...employee,
        bonus: +(employee.salary * 0.05).toFixed(2),
      };
    }
    return {
      ...employee,
      bonus: +(employee.salary * 0.1).toFixed(2),
    };
  });
// console.log(addBonus(employees));
