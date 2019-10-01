import Player from "./player";
import KindBot from "./kindBot";
import EvilBot from "./evilBot";
import CopyCatBot from "./copyCatBot";
import GrudgeBot from "./grudgeBot";
import Game from "./game";
import Tournament from "./tournament";

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

// // RUN the game rounds individually
// const NUM_OF_ROUNDS = 5;
// for (let i = 0; i < NUM_OF_ROUNDS; i++) {
//   game.runRound();
// }

// Or RUN the game using API
// game.setRounds(15).play();

// game.printMatchStats();

// CREATE AND RUN A TOURNAMENT
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
