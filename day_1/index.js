const fs = require("fs");

fs.readFile("./input.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  let array = data.split("\n").map((e) => e.trim().split(" "));
  partOneFunction(array);
  partTwoFunction(array);
});

const partOneFunction = (array) => {
  let calibrationValuesArray = [];
  array.forEach((line) => {
    line = line[0].replace(/[a-z,A-Z]/g, "");
    if (line.length === 1) {
      calibrationValuesArray.push(Number(`${line}${line}`));
    } else {
      calibrationValuesArray.push(Number(`${line[0]}${line[line.length - 1]}`));
    }
  });

  console.log(
    calibrationValuesArray.reduce((accumulater, currentValue) => {
      return accumulater + currentValue;
    }, 0)
  );
};

const spelledNumbers = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const partTwoFunction = (array) => {
  let calibrationValuesArray = [];
  array.forEach((line) => {
    let newLine = line[0];
    spelledNumbers.forEach((number, index) => {
      newLine = newLine.replaceAll(
        `${number}`,
        `${number}${index + 1}${number}`
      );
    });
    newLine = newLine.replace(/[a-z,A-Z]/g, "");
    if (newLine.length === 1) {
      console.log(newLine);
      calibrationValuesArray.push(Number(`${newLine}${newLine}`));
    } else {
      calibrationValuesArray.push(
        Number(`${newLine[0]}${newLine[newLine.length - 1]}`)
      );
    }
  });
  console.log(
    calibrationValuesArray.reduce((accumulater, currentValue) => {
      return accumulater + currentValue;
    }, 0)
  );
};
