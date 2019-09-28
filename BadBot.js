const { Player, Choice } = require("./Player");

function BadBot(name) {
  Player.call(this, name);
}
BadBot.prototype = Object.create(Player.prototype);
BadBot.prototype.makeChoice = function() {
  const choice = Choice.Cheat;
  this.choices.push(choice);
  return choice;
};

module.exports = BadBot;
