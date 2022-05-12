const express = require("express");
const { playCLI } = require("./game");
const { play } = require("./controllers");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

app.get("/", (req, res) => {
  res.send("Welcome to Rock-Paper-Sissors API.");
});

// GET api for simulating a game between CPUs
app.get("/play", play.bind(null, true));

// POST api for playing against CPI by sending body of:
// { input: 'p'|'s'|'r' }
app.post("/play", play.bind(null, false));

// playCLI(server);
