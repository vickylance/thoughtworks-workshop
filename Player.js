const Choice = Object.freeze({
  Cooperate: 1,
  Cheat: 0
});

function Player(name) {
  this.name = name;
  this.scores = [];
  this.choices = [];
  this.totalScore = 0;
  this.game = null;
}

Player.prototype.addGame = function(game) {
  this.game = game;
};

Player.prototype.getOpponent = function() {
  if (!this.game) return;
  if (this.game.p1 === this) {
    return this.game.p2;
  } else {
    return this.game.p1;
  }
};

Player.prototype.toString = function() {
  return this.name;
};

Player.prototype.makeChoice = function() {
  const choice = Math.random() > 0.5 ? Choice.Cooperate : Choice.Cheat;
  this.choices.push(choice);
  return choice;
};

Player.prototype.addScore = function(score) {
  this.scores.push(score);
  this.totalScore = this.scores.reduce((a, b) => a + b); // compute total score
};

module.exports = {
  Choice,
  Player
};
