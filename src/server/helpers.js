const { INPUTS } = require("./constants");
const util = require("util");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const getRandomAnswer = INPUTS[Math.floor(Math.random() * array.length)];

const getWinner = (player1, player2) => {
  if (player1.input === player2.input) return null;
  return player1[player2] ? player1.name : player2.name;
};

const ask = util.promisify(readline.question).bind(readline);

module.exports = {
  ask,
  getRandomAnswer,
  getWinner,
};
