const chalk = require("chalk");
const Game = require("./Game");
const KindBot = require("./GoodBot");
const GrudgeBot = require("./GrudgerBot");
const CopyCatBot = require("./CopyCatBot");
const EvilBot = require("./BadBot");

function Tournament(players) {
  this.players = players;
  this.tournamentScore = {};
  this.players.forEach(player => (this.tournamentScore[player.name] = 0));
}

Tournament.prototype.runTournament = function() {
  for (i = 0; i < this.players.length; i++) {
    for (j = i + 1; j < this.players.length; j++) {
      const player1 = this.players[i];
      const player2 = this.players[j];
      const game = new Game(player1, player2);
      game.setRounds(5).runRound();
      this.tournamentScore[player1.name] += game.p1.totalScore;
      this.tournamentScore[player2.name] += game.p2.totalScore;
      game.printMatchStats();
    }
  }
  for (let i = 0; i < this.players.length - 1; i++) {}
  return this;
};

Tournament.prototype.printMatchStats = function() {
  console.log("==================================");
  console.log("TOURNAMENT RESULTS");
  console.log("==================================");
  console.group("");
  console.table(this.tournamentScore);
  console.groupEnd();
  console.log("==================================");
  return this;
};

Tournament.prototype.computeOverallWinner = function() {
  let maxScore = 0;
  this.tournamentWinner = null;
  for (let playerName in this.tournamentScore) {
    const playerScore = this.tournamentScore[playerName];
    if (playerScore > maxScore) {
      maxScore = playerScore;
      this.tournamentWinner = playerName;
    }
  }
  console.log("##################################");
  console.group(chalk.yellow("AND THE WINNER IS !!!!! \n"));
  console.log(chalk.green.bold(this.tournamentWinner) + "\n");
  console.groupEnd();
  console.log("##################################");
};

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
