const { Player, Choice } = require("./Player");

function KindBot(name) {
  Player.call(this, name);
}
KindBot.prototype = Object.create(Player.prototype);
KindBot.prototype.makeChoice = function() {
  const choice = Choice.Cooperate;
  this.choices.push(choice);
  return choice;
};

module.exports = KindBot;
