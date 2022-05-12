/**
 * Here, we could add enums for all the codes (and better naming of course) as:
 *
 * enum Input {
 *   paper,
 *   rock,
 *   sissors,
 * }
 *
 * then the INPUTS constant could look something like:
 *
 * const INPUTS = [
 *  { label: "Paper", code: "p", value: Input.paper },
 *  { label: "Rock", code: "r", value: Input.rock },
 *  { label: "Sissors", code: "s", value: Input.sissors },
 * ]
 *
 * and we should always check using the "value" key, so that the string "paper"
 * for example is used one time in the enum only, everywhere else, it should
 * be from the enum
 */

const MAX_ALLOWED_ATTEMPTS = 3;

const WRONG_ANSWER_MESSAGE = "Please use one of the answers provided.";
const INVALID_ATTEMPTS_MESSAGE =
  "Sorry, you have exceeded your allowed attempts number.";

// all "code" key could be array to allow multiple possible answers
const INPUTS = [
  { label: "Paper", code: "p" },
  { label: "Rock", code: "r" },
  { label: "Sissors", code: "s" },
];

const RULES = {
  r: "s",
  s: "p",
  p: "r",
};

const MC_ANSWERS = [
  { label: "Yes", code: "y" },
  { label: "No", code: "n" },
];

const GAME_MODES = [
  { label: "Player VS Computer", code: "p" },
  { label: "Computer VS Computer", code: "c" },
];

// Also questions could be replaced with array and having a code/key for each question
const QUESTIONS = {
  gameMode: {
    text: "Which game mode do you want to play?",
    options: GAME_MODES,
  },
  inputs: {
    text: "Which shape you want to play?",
    options: INPUTS,
  },
  playAgain: {
    text: "Do you want to play again?",
    options: MC_ANSWERS,
  },
};

module.exports = {
  INPUTS,
  MC_ANSWERS,
  GAME_MODES,
  QUESTIONS,
  MAX_ALLOWED_ATTEMPTS,
  WRONG_ANSWER_MESSAGE,
  RULES,
  INVALID_ATTEMPTS_MESSAGE,
};
