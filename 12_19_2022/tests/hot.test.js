import { describe, it, expect, beforeEach } from 'vitest';
import { readFileSync } from 'fs';
import {
  profiles,
  otherProfiles,
  youngToOld1,
  oldToYoung1,
  youngToOld2,
  oldToYoung2,
} from './ignoreMe';

const fileText = `
${readFileSync('hot/hot.js', {
  encoding: 'utf-8',
})};
`;

it('should have a function named ageSort()', () => {
  const ageSort = eval(`${fileText}; ageSort`);
  expect(ageSort).toBeInstanceOf(Function);
});

describe('ageSort()', () => {
  let ageSortFn;
  beforeEach(() => {
    eval(`
      ${fileText};
      ageSortFn = ageSort
    `);
  });

  it('should return the profiles from youngest to oldest.', () => {
    const result = ageSortFn(profiles, true);
    expect(result).toStrictEqual(youngToOld1);
  });

  it('should return the profiles from oldest to youngest.', () => {
    const result = ageSortFn(profiles, false);
    expect(result).toStrictEqual(oldToYoung1);
  });

  it('should return the profiles from youngest to oldest.', () => {
    const result = ageSortFn(otherProfiles, true);
    expect(result).toStrictEqual(youngToOld2);
  });

  it('should return the profiles from oldest to youngest.', () => {
    const result = ageSortFn(otherProfiles, false);
    expect(result).toStrictEqual(oldToYoung2);
  });
});
