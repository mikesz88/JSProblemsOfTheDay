import { describe, it, expect, beforeEach } from 'vitest';
import { readFileSync } from 'fs';
import {
  emmittSmith,
  esmallToBig,
  ebigToSmall,
  barrySanders,
  bSmallToBig,
  bBigToSmall,
} from './doNotTouch';

const fileText = `
${readFileSync('index.js', {
  encoding: 'utf-8',
})};
`;

describe('totalYards()', () => {
  let totalYardsFn;
  beforeEach(() => {
    eval(`
      ${fileText};
      totalYardsFn = totalYards
    `);
  });

  it('should have a function named totalYards()', () => {
    const totalYards = eval(`${fileText}; totalYards`);
    expect(totalYards).toBeInstanceOf(Function);
  });

  it("should return Emmitt Smith's yards from all games together.", () => {
    const result = totalYardsFn(emmittSmith);
    expect(result).toStrictEqual(1625);
  });

  it("should return Barry Sander's yards from all games together.", () => {
    const result = totalYardsFn(barrySanders);
    expect(result).toStrictEqual(1579);
  });
});

describe('gamesOverOrEqual100()', () => {
  let gamesOverOrEqual100Fn;
  beforeEach(() => {
    eval(`
      ${fileText};
      gamesOverOrEqual100Fn = gamesOverOrEqual100
    `);
  });

  it('should have a function named gamesOverOrEqual100()', () => {
    const gamesOverOrEqual100 = eval(`${fileText}; gamesOverOrEqual100`);
    expect(gamesOverOrEqual100).toBeInstanceOf(Function);
  });

  it("should return which games Emmitt Smith's reached 100 or more.", () => {
    const result = gamesOverOrEqual100Fn(emmittSmith);
    expect(result).toStrictEqual([2, 3, 6, 13, 15, 16, 17]);
  });

  it("should return which games Barry Sander's reached 100 or more.", () => {
    const result = gamesOverOrEqual100Fn(barrySanders);
    expect(result).toStrictEqual([2, 5, 11, 12, 17]);
  });
});

describe('avgYardsPerCarry()', () => {
  let avgYardsPerCarryFn;
  beforeEach(() => {
    eval(`
      ${fileText};
      avgYardsPerCarryFn = avgYardsPerCarry
    `);
  });

  it('should have a function named avgYardsPerCarry()', () => {
    const avgYardsPerCarry = eval(`${fileText}; avgYardsPerCarry`);
    expect(avgYardsPerCarry).toBeInstanceOf(Function);
  });

  it("should return which games Emmitt Smith's reached 100 or more.", () => {
    const result = avgYardsPerCarryFn(10, emmittSmith);
    expect(result).toBe(88.2);
  });

  it("should return which games Barry Sander's reached 100 or more.", () => {
    const result = avgYardsPerCarryFn(10, barrySanders);
    expect(result).toBe(86.7);
  });
});

describe('carries10YardsOver50()', () => {
  let carries10YardsOver50Fn;
  beforeEach(() => {
    eval(`
      ${fileText};
      carries10YardsOver50Fn = carries10YardsOver50
    `);
  });

  it('should have a function named carries10YardsOver50()', () => {
    const carries10YardsOver50 = eval(`${fileText}; carries10YardsOver50`);
    expect(carries10YardsOver50).toBeInstanceOf(Function);
  });

  it('should return a boolean whether Emmitt Smith reached over 50 yards for every game with at least 10 carries.', () => {
    const result = carries10YardsOver50Fn(emmittSmith);
    expect(result).toBe(false);
  });

  it('should return a boolean whether Barry Sanders reached over 50 yards for every game with at least 10 carries.', () => {
    const result = carries10YardsOver50Fn(barrySanders);
    expect(result).toBe(true);
  });
});

describe('badGame()', () => {
  let badGameFn;
  beforeEach(() => {
    eval(`
      ${fileText};
      badGameFn = badGame
    `);
  });

  it('should have a function named badGame()', () => {
    const badGame = eval(`${fileText}; badGame`);
    expect(badGame).toBeInstanceOf(Function);
  });

  it('should return whether Emmitt Smith had a bad game (50 yards or less).', () => {
    const result = badGameFn(emmittSmith);
    expect(result).toBe(true);
  });

  it('should return whether Barry Sanders had a bad game (50 yards or less).', () => {
    const result = badGameFn(barrySanders);
    expect(result).toBe(false);
  });
});

describe('gamesOverAverage()', () => {
  let gamesOverAverageFn;
  beforeEach(() => {
    eval(`
      ${fileText};
      gamesOverAverageFn = gamesOverAverage
    `);
  });

  it('should have a function named gamesOverAverage()', () => {
    const gamesOverAverage = eval(`${fileText}; gamesOverAverage`);
    expect(gamesOverAverage).toBeInstanceOf(Function);
  });

  it('should return how many games Emmitt Smith surpassed his average for the year.', () => {
    const result = gamesOverAverageFn(emmittSmith);
    expect(result).toBe(8);
  });

  it('should return how many games Barry Sanders surpassed his average for the year.', () => {
    const result = gamesOverAverageFn(barrySanders);
    expect(result).toBe(8);
  });
});

describe('sortBySuggestion()', () => {
  let sortBySuggestionFn;
  beforeEach(() => {
    eval(`
      ${fileText};
      sortBySuggestionFn = sortBySuggestion
    `);
  });

  it('should have a function named sortBySuggestion()', () => {
    const sortBySuggestion = eval(`${fileText}; sortBySuggestion`);
    expect(sortBySuggestion).toBeInstanceOf(Function);
  });

  it("should return Emmitt Smith's games sorted from smallest to biggest amount of yards.", () => {
    const result = sortBySuggestionFn('small', emmittSmith.slice());
    expect(result).toStrictEqual(esmallToBig);
  });

  it("should return Emmitt Smith's games sorted from biggest to smallest amount of yards.", () => {
    const result = sortBySuggestionFn('big', emmittSmith.slice());
    expect(result).toStrictEqual(ebigToSmall);
  });

  it("should return Barry Sander's games sorted from smallest to biggest amount of yards.", () => {
    const result = sortBySuggestionFn('small', barrySanders.slice());
    expect(result).toStrictEqual(bSmallToBig);
  });

  it("should return Barry Sander's games sorted from biggest to smallest amount of yards.", () => {
    const result = sortBySuggestionFn('big', barrySanders.slice());
    expect(result).toStrictEqual(bBigToSmall);
  });
});
