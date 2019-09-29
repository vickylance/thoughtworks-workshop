const { Player, Choice } = require("./Player");

function EvilBot(name) {
  Player.call(this, name);
}
EvilBot.prototype = Object.create(Player.prototype);
EvilBot.prototype.makeChoice = function() {
  const choice = Choice.Cheat;
  this.choices.push(choice);
  return choice;
};

module.exports = EvilBot;
