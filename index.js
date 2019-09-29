const { Player } = require("./Player");
const KindBot = require("./KindBot");
const EvilBot = require("./EvilBot");
const CopyCatBot = require("./CopyCatBot");
const GrudgeBot = require("./GrudgeBot");
const Game = require("./Game");
const Tournament = require("./Tournament");

// const game = new Game(
//   new Player("Human Player 1"),
//   new Player("Human Player 2")
// );
// const game = new Game(
//   new Player("Player1"),
//   new KindBot("The Good Bot (T.A.R.S)")
// );
// const game = new Game(
//   new EvilBot("The Evil Bot (HAL9000)"),
//   new Player("Player 2")
// );
// const game = new Game(
//   new KindBot("The Evil Bot (HAL9000)"),
//   new EvilBot("The Good Bot (T.A.R.S)")
// );
// const game = new Game(
//   new Player("Player1"),
//   new CopyCatBot("The AI Overlord (Skynet)")
// );
// const game = new Game(
//   new Player("Player1"),
//   new GrudgeBot("The Grudger Bot (Chitti 2.0)")
// );

// const NUM_OF_ROUNDS = 5;
// for (let i = 0; i < NUM_OF_ROUNDS; i++) {
//   game.runRound();
// }

// game.setRounds(15).play();
// game.printMatchStats();

const tournament = new Tournament([
  new KindBot("KindBot"),
  new GrudgeBot("GrudgeBot"),
  new CopyCatBot("CopyCat"),
  new EvilBot("EvilBot")
]);

tournament
  .runTournament()
  .printMatchStats()
  .computeOverallWinner();
