import { it, expect } from 'vitest';
import { addNumbers } from './index.js';

it('should return a number that adds incrementally from 0 to the parameter', () => {
  // Arrange
  const number1 = 3;
  const number2 = 10;
  const number3 = 100;

  // Act
  const result1 = addNumbers(number1);
  const result2 = addNumbers(number2);
  const result3 = addNumbers(number3);

  // Assert
  expect(result1).toBe(6);
  expect(result2).toBe(55);
  expect(result3).toBe(5050);
});
