import { describe, it, expect, beforeEach } from 'vitest';
import { readFileSync } from 'fs';

const fileText = `
${readFileSync('medium/medium.js', {
  encoding: 'utf-8',
})};
`;

it('should have a function named countAllS()', () => {
  const countAllS = eval(`${fileText}; countAllS`);
  expect(countAllS).toBeInstanceOf(Function);
});

describe('Average of numbers in an array', () => {
  let countAllSFn;
  beforeEach(() => {
    eval(`
      ${fileText};
      countAllSFn = countAllS
    `);
  });

  it("should return the count of S's in each string.", () => {
    const sentence = 'michael SancheS ss She best.';
    const result = countAllSFn(sentence);
    expect(result).toBe(6);
  });
});
