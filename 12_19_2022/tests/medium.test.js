import { describe, it, expect, beforeEach } from 'vitest';
import { readFileSync } from 'fs';

const fileText = `
${readFileSync('medium/medium.js', {
  encoding: 'utf-8',
})};
`;

it('should have a function named averageMyNumbers()', () => {
  const averageMyNumbers = eval(`${fileText}; averageMyNumbers`);
  expect(averageMyNumbers).toBeInstanceOf(Function);
});

describe('Average of numbers in an array', () => {
  let averageMyNumbersFn;
  beforeEach(() => {
    eval(`
      ${fileText};
      averageMyNumbersFn = averageMyNumbers
    `);
  });

  it('should return 15 if I am trying to average [10,20]', () => {
    const numbers = [10, 20];
    const result = averageMyNumbersFn(numbers);
    expect(result).toBe(15);
  });

  it('should return 30 if I am trying to average [10, 20, 30, 40, 50]', () => {
    const numbers = [10, 20, 30, 40, 50];
    const result = averageMyNumbersFn(numbers);
    expect(result).toBe(30);
  });

  it('should yield "Cannot Average" if the array is empty.', () => {
    const emptyArray = [];
    const result = averageMyNumbersFn(emptyArray);
    expect(result).toBe('Cannot Average');
  });

  it('should yield "Not all numbers" if the array contains any non number types', () => {
    const badArray = [1, '1'];
    const result = averageMyNumbersFn(badArray);
    expect(result).toBe('Not all are numbers');
  });

  it('should return a number that is rounded to the nearest hundredths if necessary', () => {
    const numbers = [9, 49, 57];
    const result = averageMyNumbersFn(numbers);
    expect(result).toBe(38.33);
  });

  it('should yield "This is not an array of numbers" if the parameter is not an array.', () => {
    const number = 5;
    const result = averageMyNumbersFn(number);
    expect(result).toBe('This is not an array of numbers');
  });
});
