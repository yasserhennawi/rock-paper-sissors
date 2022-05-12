const {
  INPUTS,
  MAX_ALLOWED_ATTEMPTS,
  INVALID_ATTEMPTS_MESSAGE,
  WRONG_ANSWER_MESSAGE,
  RULES,
} = require("./constants");

const util = require("util");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getInputByCode = (input) => INPUTS.find(({ code }) => code === input);

const getRandomAnswer = () => INPUTS[Math.floor(Math.random() * INPUTS.length)];

// Returns the Player.name of the winner, or null incase of draw
const getWinner = (player1, player2) => {
  if (player1.input === player2.input) return null;
  return RULES[player1.input] === player2.input ? player1.name : player2.name;
};

const ask = util.promisify(readline.question).bind(readline);

const optionsToText = (options) =>
  options.reduce(
    (acc, option) => `${acc}\n${option.label} (${option.code})`,
    ""
  );

const getQuestionText = ({ text, options }) =>
  `${text}${optionsToText(options)}`;

const terminateServer = (server) => {
  console.log("Thanks for using our app, Server closed.");
  // Terminate the express server
  server.close((err) => {
    process.exit(err ? 1 : 0);
  });
  // Just to stop the app synchronously until the process is exited
  throw new Error();
};


const askQuestion = async (question, server) => {
  // This variable should carry the input string from the user.
  let answer;
  
  // Just a fancy variable that counts the attempts the user make each question
  // and terminate the server after n trials.
  // We could pass the maxAllowedAttempts as an optional arg with MAX_ALLOWED_ATTEMPTS
  // being the default number, in case other questions needed more/less attempts.
  let attemptsCounter = MAX_ALLOWED_ATTEMPTS;

  do {
    try {
      answer = String(await ask(getQuestionText(question)))
        .trim()
        .toLowerCase();
      // here's a trick, if we've created the enums like the comments said in constants.js
      // we should recieve the input in another variable (for ex. inputMode) then we
      // add the line (for example, gameMode question):
      // answer = GAME_MODES.find(({ code }) => code === inputMode)
      // and if it exists, then we could use mode.value being of the Input enum

      // Throws an error if the input was unexpected letter
      if (!question.options.some(({ code }) => code === answer)) {
        throw new Error(WRONG_ANSWER_MESSAGE);
      } else {
        // Should stop the loop and continue if an expected mode is provided
        break;
      }
    } catch (error) {
      // Log a message why the loop was repeated (before another try)
      --attemptsCounter;
      // Only should the next message if the user is allowed to try again. otherwise, it 
      // doesn't make sense to do so, because the server is going to terminate anyway.
      if (attemptsCounter) {
        console.log(error.message);
      }
      // everytime an error gets thrown, an attempt is counted, thus, the variable decrease
    }
    // only loop again if there's still attemps for the prompt
  } while (attemptsCounter > 0);
  // Check if the attempts counter is zero, if so, we terminate the server
  if (attemptsCounter === 0) {
    console.log(INVALID_ATTEMPTS_MESSAGE);
    terminateServer(server);
  }
  return answer;
};
module.exports = {
  askQuestion,
  getRandomAnswer,
  getInputByCode,
  getWinner,
  getQuestionText,
  terminateServer,
};
