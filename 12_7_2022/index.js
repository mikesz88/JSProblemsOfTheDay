const emmittSmith = [
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

const barrySanders = [
  { game: 1, carries: 22, yards: 96 },
  { game: 2, carries: 21, yards: 159 },
  { game: 3, carries: 15, yards: 75 },
  { game: 4, carries: 19, yards: 69 },
  { game: 5, carries: 37, yards: 113 },
  { game: 6, carries: 14, yards: 74 },
  { game: 7, carries: 19, yards: 99 },
  { game: 8, carries: 27, yards: 54 },
  { game: 9, carries: 9, yards: 51 },
  { game: 10, carries: 11, yards: 77 },
  { game: 11, carries: 20, yards: 110 },
  { game: 12, carries: 25, yards: 125 },
  { game: 13, carries: 7, yards: 74 },
  { game: 14, carries: 12, yards: 64 },
  { game: 15, carries: 5, yards: 51 },
  { game: 16, carries: 14, yards: 97 },
  { game: 17, carries: 35, yards: 191 },
];

/*
  Create a function named 'totalYards' where 
  you show the sum of all the yards.
*/
const totalYards = (gameLogs) =>
  Object.keys(gameLogs).reduce((sum, key) => {
    return sum + gameLogs[key].yards;
  }, 0);
console.log(totalYards(barrySanders));

/*
  Create a function named 'gamesOverOrEqual100' where
  you list the game numbers the player reached 100 or greater
*/
const gamesOverOrEqual100 = (gameLogs) =>
  gameLogs.filter((game) => game.yards >= 100).map((game) => game.game);
console.log(gamesOverOrEqual100(barrySanders));

/*
  Create a function named 'avgYardsPerCarry' where
  you are given the amount of games from the start
  you want to average the amount of yards per carry. 
*/
const avgYardsPerCarry = (amountOfGames = 17, gameLogs) =>
  +(
    gameLogs
      .filter((game) => game.game <= amountOfGames)
      .map((game) => game.yards)
      .reduce((a, b) => a + b, 0) / amountOfGames
  ).toFixed(2);
console.log(avgYardsPerCarry(10, barrySanders));

/*
  Create a function named 'carries10YardsOver50' where
  you return a boolean whether the player reached at least 50 yards in
  every game he has 10 carries or less. 
*/
const carries10YardsOver50 = (gameLogs) =>
  gameLogs
    .filter((game) => game.carries <= 10)
    .map((game) => game.yards)
    .every((yards) => yards >= 50);
console.log(carries10YardsOver50(barrySanders));

/*
  Create a function named 'badGame' where
  you return a boolean whether the player 
  never went over 50 yards.
*/
const badGame = (gameLogs) => gameLogs.some((game) => game.yards <= 50);
console.log(badGame(barrySanders));

/*
  Create a function named 'gamesOverAverage' where
  you give a count of how many games did the player
  beat or pass his yards per game average.
*/
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

console.log(gamesOverAverage(barrySanders));

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

/*
  Create a function named 'sortBySuggestion' where
  told 'small' or 'big', you sort the players stats accordingly.
*/
const sortBySuggestion = (sort, gameLogs) =>
  sort === 'small' ? smallToBig(gameLogs) : bigToSmall(gameLogs);
console.log(sortBySuggestion('small', barrySanders.slice()));
console.log(sortBySuggestion('big', barrySanders.slice()));
