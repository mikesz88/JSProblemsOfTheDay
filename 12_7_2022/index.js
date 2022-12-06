const yardsPerGame = [
  { game: 1, carries: 12, yards: 48 },
  { game: 2, carries: 22, yards: 129 },
  { game: 3, carries: 29, yards: 148 },
  { game: 4, carries: 10, yards: 70 },
  { game: 5, carries: 32, yards: 99 },
  { game: 6, carries: 25, yards: 115 },
  { game: 7, carries: 17, yards: 88 },
  { game: 8, carries: 19, yards: 60 },
  { game: 9, carries: 5, yards: 37 },
  { game: 10, carries: 18, yards: 88 },
  { game: 11, carries: 20, yards: 80 },
  { game: 12, carries: 21, yards: 64 },
  { game: 13, carries: 28, yards: 132 },
  { game: 14, carries: 7, yards: 27 },
  { game: 15, carries: 15, yards: 100 },
  { game: 16, carries: 24, yards: 187 },
  { game: 17, carries: 27, yards: 153 },
];

const totalYards = (gameLogs) =>
  Object.keys(gameLogs).reduce((sum, key) => {
    return sum + gameLogs[key].yards;
  }, 0);
console.log(totalYards(yardsPerGame));

const gamesOverOrEqual100 = (gameLogs) =>
  gameLogs.filter((game) => game.yards >= 100).map((game) => game.game);
console.log(gamesOverOrEqual100(yardsPerGame));

const avgYardsPerCarry = (amountOfGames, gameLogs) =>
  +(
    gameLogs
      .filter((game) => game.game <= amountOfGames)
      .map((game) => game.yards)
      .reduce((a, b) => a + b, 0) / amountOfGames
  ).toFixed(2);
console.log(avgYardsPerCarry(10, yardsPerGame));

const carries10YardsOver50 = (gameLogs) =>
  gameLogs
    .filter((game) => game.carries <= 10)
    .map((game) => game.yards)
    .every((yards) => yards >= 50);
console.log(carries10YardsOver50(yardsPerGame));

const badGame = (gameLogs) => gameLogs.some((game) => game.yards <= 50);
console.log(badGame(yardsPerGame));

const gamesOverAverage = (gameLogs) =>
  gameLogs.filter(
    (game) =>
      game.yards >=
      +(
        Object.keys(gameLogs).reduce(
          (sum, key) => sum + gameLogs[key].yards,
          0
        ) / gameLogs.length
      ).toFixed(2)
  ).length;

console.log(gamesOverAverage(yardsPerGame));

const smallToBig = (gameLogs) =>
  gameLogs.sort((a, b) => {
    if (a.yards < b.yards) {
      return -1;
    }
    if (a.yards > b.yards) {
      return 1;
    }
    return 0;
  });

const bigToSmall = (gameLogs) =>
  gameLogs.sort((a, b) => {
    if (a.yards < b.yards) {
      return 1;
    }
    if (a.yards > b.yards) {
      return -1;
    }
    return 0;
  });

const sortBySuggestion = (sort, gameLogs) =>
  sort === 'small' ? smallToBig(gameLogs) : bigToSmall(gameLogs);
console.log(sortBySuggestion('small', yardsPerGame.slice()));
console.log(sortBySuggestion('big', yardsPerGame.slice()));
