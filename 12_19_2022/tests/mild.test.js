import { describe, it, expect, beforeEach } from 'vitest';
import { readFileSync } from 'fs';

const fileText = `
${readFileSync('mild/mild.js', {
  encoding: 'utf-8',
})};
`;
it('should have addNumbersAbove100 defined()', () => {
  const addNumbersAbove100 = eval(`${fileText}; addNumbersAbove100`);
  expect(addNumbersAbove100).toBeDefined();
});

it('should have a function named addNumbersAbove100()', () => {
  const addNumbersAbove100 = eval(`${fileText}; addNumbersAbove100`);
  expect(addNumbersAbove100).toBeInstanceOf(Function);
});

describe('addNumbersAbove100()', () => {
  let addNumbersAbove100Fn;
  beforeEach(() => {
    eval(`
      ${fileText};
      addNumbersAbove100Fn = addNumbersAbove100
    `);
  });

  it('should return the sum of all numbers greater than or equal to 100', () => {
    const array = [20, 200, 50, 400, 100];
    const result = addNumbersAbove100Fn(array);
    expect(result).toEqual(700);
  });
});

// sprint 6 story
