const fs = require("fs");

fs.readFile("./input.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  let array = data.split("\n").map((e) => e.trim().split(" "));
});
