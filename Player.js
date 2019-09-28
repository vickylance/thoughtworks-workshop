const Choice = Object.freeze({
  Cooperate: 1,
  Cheat: 0
});

function Player(name) {
  this.name = name;
  this.scores = [];
  this.choices = [];
  this.totalScore = 0;
}

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
