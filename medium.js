const { readFileSync } = require("fs");

const readFile = readFileSync("planets.txt", "utf8");

console.log(readFile);
