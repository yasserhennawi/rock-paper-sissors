const { getRandomAnswer, getInputByCode } = require("./helpers");

// This model represents however plays the game, a user or a CPU
class Player {
  constructor(name, input) {
    this.name = name;
    this.input = input || getRandomAnswer().code;
  }

  logInput() {
    console.log(`${this.name} played: ${getInputByCode(this.input).label}`);
  }
}

module.exports = { Player };
