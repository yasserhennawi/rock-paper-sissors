// all "code" key could be array to allow multiple possible answers

const INPUTS = [
  { label: "Paper", code: "p" },
  { label: "Rock", code: "r" },
  { label: "Sissors", code: "s" },
];

const MC_ANSWERS = [
  { label: "Yes", code: "y" },
  { label: "No", code: "n" },
];

const GAME_MODE = [
  { label: "Player VS Computer", code: "p" },
  { label: "Computer VS Computer", code: "c" },
];

module.exports = {
  INPUTS,
};
