const fs = require("fs");

fs.readFile("./input.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  let array = data.split("\n").map((e) => e.trim().split(" "));
  partOne(array);
  partTwo(array);
});

const partOne = (array) => {
  let eachGameArray = [];
  array.forEach((game, index) => {
    const highestGemsShown = {
      game: index + 1,
      red: 0,
      blue: 0,
      green: 0,
    };
    game.forEach((gemAmount, index) => {
      if (index > 1) {
        if (index % 2 === 0) {
          let colorValue = game[index + 1].replace(/[,;]/, "");
          if (Number(gemAmount) > highestGemsShown[colorValue]) {
            highestGemsShown[colorValue] = Number(gemAmount);
          }
        }
      }
    });
    eachGameArray.push(highestGemsShown);
  });
  console.log(eachGameArray);
  calculateGames(eachGameArray);
};

const partTwo = (array) => {};

const calculateGames = (array) => {
  const possibleGamesArray = [];
  const MAX_GEM_AMOUNTS = {
    red: 12,
    blue: 14,
    green: 13,
  };
  array.forEach((game) => {
    let keys = Object.keys(MAX_GEM_AMOUNTS);
    if (MAX_GEM_AMOUNTS[keys[0]] >= game[keys[0]]) {
      if (MAX_GEM_AMOUNTS[keys[1]] >= game[keys[1]]) {
        if (MAX_GEM_AMOUNTS[keys[2]] >= game[keys[2]]) {
          possibleGamesArray.push(game);
        }
      }
    }
  });
  console.log(possibleGamesArray);
  sumGames(possibleGamesArray);
};

const sumGames = (array) => {
  let total = 0;
  array.forEach((game) => {
    total = total + game["game"];
  });
  console.log(total);
};
