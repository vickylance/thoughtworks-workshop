const { Player } = require("./Player");
const GoodBot = require("./GoodBot");
const BadBot = require("./BadBot");
const CopyCatBot = require("./CopyCatBot");
const GrudgerBot = require("./GrudgerBot");
const Game = require("./Game");

// const game = new Game(new Player("Player1"), new Player("Player2"));
// const game = new Game(
//   new Player("Player1"),
//   new GoodBot("The Good Bot (T.A.R.S)")
// );
// const game = new Game(
//   new BadBot("The Evil Bot (HAL9000)"),
//   new Player("Player 2")
// );
// const game = new Game(
//   new GoodBot("The Evil Bot (HAL9000)"),
//   new BadBot("The Good Bot (T.A.R.S)")
// );
// const game = new Game(
//   new Player("Player1"),
//   new CopyCatBot("The AI Overlord (Skynet)")
// );
const game = new Game(
  new Player("Player1"),
  new GrudgerBot("The Grudger Bot (Chitti 2.0)")
);

// const NUM_OF_ROUNDS = 5;
// for (let i = 0; i < NUM_OF_ROUNDS; i++) {
//   game.runRound();
// }

game.setRounds(15).play();

game.printMatchStats();
