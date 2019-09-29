const { Player, Choice } = require("./Player");

function CopyCatBot(name) {
  Player.call(this, name);
}
CopyCatBot.prototype = Object.create(Player.prototype);
CopyCatBot.prototype.makeChoice = function() {
  let choice;
  if (this.choices.length > 0) {
    const lastScore = this.scores[this.scores.length - 1];
    if (lastScore === -1 || lastScore === 0) {
      choice = Choice.Cheat;
    } else if (lastScore === 3 || lastScore === 2) {
      choice = Choice.Cooperate;
    }
  } else {
    // First Choice
    choice = Choice.Cooperate;
  }
  this.choices.push(choice);
  return choice;
};

module.exports = CopyCatBot;
