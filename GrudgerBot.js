const { Player, Choice } = require("./Player");

function GrudgerBot(name) {
  Player.call(this, name);
  this.turnEvil = false;
}
GrudgerBot.prototype = Object.create(Player.prototype);
GrudgerBot.prototype.makeChoice = function() {
  let choice;
  if (!this.turnEvil) {
    const lastScore = this.scores[this.scores.length - 1];
    if (lastScore === -1) {
      // The player has cheated me :(
      this.turnEvil = true;
    }
  }
  if (this.turnEvil) {
    choice = Choice.Cheat;
  } else {
    choice = Choice.Cooperate;
  }
  this.choices.push(choice);
  return choice;
};

module.exports = GrudgerBot;
