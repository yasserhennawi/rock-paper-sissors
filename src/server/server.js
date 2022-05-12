const express = require("express");
const { playCLI } = require("./game");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Root API.");
});
const server = app.listen(port, () => {
  //   console.log(`Listening on port ${port}...`);
});

playCLI(server);
