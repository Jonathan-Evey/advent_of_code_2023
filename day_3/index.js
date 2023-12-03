const fs = require("fs");

fs.readFile("./input.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  let array = data.split("\n").map((e) => e.trim().split(" "));
  partOne(array);
});

const partOne = (array) => {
  let symbolIndexArray = [];
  array.forEach((line, lineIndex) => {
    line.forEach((string) => {
      string.split("").forEach((letter, columnIndex) => {
        if (letter.match(/[^\w.]/)) {
          symbolIndexArray.push([lineIndex, columnIndex]);
        }
      });
    });
  });
  console.log(symbolIndexArray);
  let numberObjArray = [];
  array.forEach((line, lineIndex) => {
    console.log(line);
    let numberObj = {
      value: 0,
      lineIndex: 0,
      columnIndexArray: [],
    };
    line.forEach((string) => {
      string.split("").forEach((letter, columnIndex) => {
        if (letter.match(/[.]/) && numberObj["value"] > 0) {
          console.log(numberObj);
          let cloneNumberOjb = { ...numberObj };
          numberObjArray.push(cloneNumberOjb);
          numberObj.value = 0;
          numberObj.lineIndex = 0;
          numberObj.columnIndexArray = [];
        }
        if (letter.match(/[0-9]/)) {
          numberObj.value = numberObj.value + Number(letter);
          if (numberObj.lineIndex === 0) {
            numberObj.lineIndex = lineIndex;
          }
          numberObj.columnIndexArray.push(columnIndex);
        }
      });
    });
  });
  console.log(numberObjArray);
};
