const { Player, Choice } = require("./Player");

function GoodBot(name) {
  Player.call(this, name);
}
GoodBot.prototype = Object.create(Player.prototype);
GoodBot.prototype.makeChoice = function() {
  const choice = Choice.Cooperate;
  this.choices.push(choice);
  return choice;
};

module.exports = GoodBot;
