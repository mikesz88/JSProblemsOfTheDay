import { describe, it, expect, beforeEach } from 'vitest';
import { readFileSync } from 'fs';

const fileText = `
${readFileSync('mild/mild.js', {
  encoding: 'utf-8',
})};
`;
it('should have addFavProperty defined()', () => {
  const addFavProperty = eval(`${fileText}; addFavProperty`);
  expect(addFavProperty).toBeDefined();
});

it('should have a function named addFavProperty()', () => {
  const addFavProperty = eval(`${fileText}; addFavProperty`);
  expect(addFavProperty).toBeInstanceOf(Function);
});

describe('addFavProperty()', () => {
  let addFavPropertyFn;
  beforeEach(() => {
    eval(`
      ${fileText};
      addFavPropertyFn = addFavProperty
    `);
  });

  it('should return the parameter object with a new property of a favorite with a false values', () => {
    const object = { mentor: 'Michael' };
    const result = addFavPropertyFn(object);
    expect(result).toStrictEqual({ mentor: 'Michael', favorite: false });
  });
});

// sprint 6 story
