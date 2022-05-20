const express = require("express");
const { playCLI } = require("./game");
const { play } = require("./controllers");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
dotenv.config();

const myArgs = process.argv.slice(2);
const isCliServer = myArgs.includes("cli");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const server = app.listen(port, () => {
  if (!isCliServer) {
    console.log(`Listening on port ${port}...`);
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to Rock-Paper-Sissors API.");
});

// GET api for simulating a game between CPUs
app.get("/play", play.bind(null, true));

// POST api for playing against CPI by sending body of:
// { input: 'p'|'s'|'r' }
// response should look like:
/**
 * {
 *   "success":Bool,
 *   "computer":'p'|'s'|'r',
 *   "player":'p'|'s'|'r',
 *   "winner": "computer" | "player" | null (indicating draw)
 * }
 */
app.post("/play", play.bind(null, false));

if (isCliServer) {
  playCLI(server);
}
