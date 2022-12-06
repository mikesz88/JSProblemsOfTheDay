import { describe, it, expect, beforeEach } from 'vitest';
import { readFileSync } from 'fs';
import { yardsPerGame, smallToBig, bigToSmall } from './doNotTouch';

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

  it('should return yards from all games together.', () => {
    const result = totalYardsFn(yardsPerGame);
    expect(result).toStrictEqual(1625);
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

  it('should return which games player reached 100 or more.', () => {
    const result = gamesOverOrEqual100Fn(yardsPerGame);
    expect(result).toStrictEqual([2, 3, 6, 13, 15, 16, 17]);
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

  it('should return which games player reached 100 or more.', () => {
    const result = avgYardsPerCarryFn(10, yardsPerGame);
    expect(result).toBe(88.2);
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

  it('should return the player reached over 50 yards for every game with at least 10 carries.', () => {
    const result = carries10YardsOver50Fn(yardsPerGame);
    expect(result).toBe(false);
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

  it('should return whether player had a bad game (50 yards or less).', () => {
    const result = badGameFn(yardsPerGame);
    expect(result).toBe(true);
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

  it('should return how many games player surpassed his average for the year.', () => {
    const result = gamesOverAverageFn(yardsPerGame);
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

  it('should return the games sorted from smallest to biggest amount of yards.', () => {
    const result = sortBySuggestionFn('small', yardsPerGame.slice());
    expect(result).toStrictEqual(smallToBig);
  });

  it('should return the games sorted from biggest to smallest amount of yards.', () => {
    const result = sortBySuggestionFn('big', yardsPerGame.slice());
    expect(result).toStrictEqual(bigToSmall);
  });
});
