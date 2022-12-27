import { describe, it, expect, beforeEach } from 'vitest';
import { readFileSync } from 'fs';
import {
  employees,
  reverseAZ,
  employeesNoJob,
  over100kEmployees,
  salaryLeastToGreatest,
  bonusesAdded,
} from './doNotLookHere';

const fileText = `
${readFileSync('index.js', {
  encoding: 'utf-8',
})};
`;

it('should have a function named reverseSort()', () => {
  const reverseSort = eval(`${fileText}; reverseSort`);
  expect(reverseSort).toBeInstanceOf(Function);
});

it('should have a function named over100k()', () => {
  const over100k = eval(`${fileText}; over100k`);
  expect(over100k).toBeInstanceOf(Function);
});

it('should have a function named findJrDev()', () => {
  const findJrDev = eval(`${fileText}; findJrDev`);
  expect(findJrDev).toBeInstanceOf(Function);
});

it('should have a function named findAvgSalary()', () => {
  const findAvgSalary = eval(`${fileText}; findAvgSalary`);
  expect(findAvgSalary).toBeInstanceOf(Function);
});

it('should have a function named sortBySalary()', () => {
  const sortBySalary = eval(`${fileText}; sortBySalary`);
  expect(sortBySalary).toBeInstanceOf(Function);
});

it('should have a function named addBonus()', () => {
  const addBonus = eval(`${fileText}; addBonus`);
  expect(addBonus).toBeInstanceOf(Function);
});

describe('reverseSort()', () => {
  let reverseSortFn;
  beforeEach(() => {
    eval(`
      ${fileText};
      reverseSortFn = reverseSort
    `);
  });

  it('should reverse alphabetize the employee list', () => {
    const result = reverseSortFn(employees.slice());
    expect(result).toStrictEqual(reverseAZ);
  });

  it('should throw an error when array is empty', () => {
    const result = reverseSortFn([]);
    expect(result).toThrowError('There are no employees.');
  });

  it('should throw an error when array of employees does not have a job property', () => {
    const result = reverseSortFn(employeesNoJob);
    expect(result).toThrowError('Not all employees have jobs');
  });
});

describe('over100k()', () => {
  let over100kFn;
  beforeEach(() => {
    eval(`
      ${fileText};
      over100kFn = over100k
    `);
  });

  it('should show the employees with 100k salaries or greater', () => {
    const result = over100kFn(employees);
    expect(result).toStrictEqual(over100kEmployees);
  });
});

describe('findJrDev()', () => {
  let findJrDevFn;
  beforeEach(() => {
    eval(`
      ${fileText};
      findJrDevFn = findJrDev
    `);
  });

  it('should return the employee with job: "Junior Developer"', () => {
    const result = findJrDevFn(employees);
    expect(result).toBe(employees[5]);
  });
});

describe('findAvgSalary()', () => {
  let findAvgSalaryFn;
  beforeEach(() => {
    eval(`
      ${fileText};
      findAvgSalaryFn = findAvgSalary
    `);
  });

  it('should average the employees salary', () => {
    const result = findAvgSalaryFn(employees);
    expect(result).toBe(155647.2);
  });
});

describe('sortBySalary()', () => {
  let sortBySalaryFn;
  beforeEach(() => {
    eval(`
      ${fileText};
      sortBySalaryFn = sortBySalary
    `);
  });

  it('should return the list starting with lowest salary to highest salary.', () => {
    const result = sortBySalaryFn(employees.slice());
    expect(result).toStrictEqual(salaryLeastToGreatest);
  });
});

describe('addBonus()', () => {
  let addBonusFn;
  beforeEach(() => {
    eval(`
      ${fileText};
      addBonusFn = addBonus
    `);
  });

  it('should return the list starting with lowest salary to highest salary.', () => {
    const result = addBonusFn(employees);
    expect(result).toStrictEqual(bonusesAdded);
  });
});
