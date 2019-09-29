import Player, { Choice } from "./player";

export default class GrudgeBot extends Player {
  constructor(name) {
    super(name);
  }

  public makeChoice() {
    return Choice.Cheat;
  }
}
