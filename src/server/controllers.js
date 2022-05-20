const { Player } = require("./models");
const { getInputByCode, getRandomAnswer, getWinner } = require("./helpers");

// the variable 'simulate' should decide if a player want to play themself
// of the CPU should simulate the game
const play = (simulate, req, res) => {
  const inputObj = simulate
    ? getRandomAnswer()
    : getInputByCode(req.body.input);
  try {
    if (inputObj) {
      const player1 = new Player("computer");
      const player2 = new Player(
        simulate ? "computer2" : "player",
        inputObj.code
      );
      const response = {
        success: true,
        [player1.name]: player1.input,
        [player2.name]: player2.input,
        winner: getWinner(player1, player2),
      };

      res.send(JSON.parse(JSON.stringify(response)));
    } else {
      throw new Error("Input doesn't exists");
    }
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
};

module.exports = { play };
