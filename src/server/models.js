const { getRandomAnswer, getInputName } = require("./helpers");

// This model represents however plays the game, a user or a CPU
class Player {
  constructor(name, input) {
    this.name = name;
    this.input = input || getRandomAnswer().code;
  }

  logInput() {
    console.log(`${this.name} played: ${getInputName(this.input).label}`);
  }
}

module.exports = { Player };
