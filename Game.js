const Rules = require("./Rules");

const draw = "NOBODY";

function Game(player1, player2, rounds = 0) {
  this.p1 = player1;
  this.p2 = player2;
  this.currentWinner = draw;
  this.rounds = rounds;

  this.p1.addGame(this);
  this.p2.addGame(this);
  Object.seal(this);
}

Game.prototype.setRounds = function(rounds) {
  this.rounds = rounds;
  return this;
};

Game.prototype.play = function() {
  for (let i = 0; i < this.rounds; i++) {
    this.runRound();
  }
};

Game.prototype.changePlayer = function(playerName, newPlayer) {
  if (this.p1.toString() === playerName) {
    this.p1 = newPlayer;
  } else if (this.p2.toString() === playerName) {
    this.p2 = newPlayer;
  } else {
    throw new Error("No such player present");
  }
};

Game.prototype.runRound = function() {
  const p1Choice = this.p1.makeChoice();
  const p2Choice = this.p2.makeChoice();
  const scores = Rules[`${p1Choice}${p2Choice}`];
  this.p1.addScore(scores[0]);
  this.p2.addScore(scores[1]);
  this.computerWinner();
};

Game.prototype.gameState = function() {
  return {
    P1Choices: this.p1.choices,
    P2Choices: this.p2.choices,
    P1Scores: this.p1.scores,
    P2Scores: this.p2.scores
  };
};

Game.prototype.gameScore = function() {
  return {
    "Player 1 Score": this.p1.totalScore,
    "Player 2 Score": this.p2.totalScore
  };
};

Game.prototype.computerWinner = function() {
  if (this.p1.totalScore > this.p2.totalScore) {
    this.currentWinner = this.p1.toString();
  } else if (this.p1.totalScore < this.p2.totalScore) {
    this.currentWinner = this.p2.toString();
  } else {
    this.currentWinner = draw;
  }
};

module.exports = Game;
