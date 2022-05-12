const { askQuestion, terminateServer, getWinner } = require("./helpers");
const { QUESTIONS } = require("./constants");

const { Player } = require("./models");

const playCLI = async (server) => {
  let shouldPlayAgain = false;
  do {
    const player1 = new Player("Computer");

    // Next, we check if it's the user wants to participate against the CPU
    // or just want to watch a simulation
    const mode = await askQuestion(QUESTIONS.gameMode, server);

    // Also, we would've used Input enum instead of the very ugly strings
    const player2 =
      mode === "p"
        ? new Player("Player", await askQuestion(QUESTIONS.inputs, server))
        : new Player("Computer 2");

    player1.logInput();
    player2.logInput();

    console.log("\nAnd the winner is: ", getWinner(player1, player2) || "Draw");
    const playAgain = await askQuestion(QUESTIONS.playAgain, server);
    shouldPlayAgain = playAgain === "y";
  } while (shouldPlayAgain);
  // Terminate the server if the user doesn't want to play again
  terminateServer(server);
};

module.exports = {
  playCLI,
};
