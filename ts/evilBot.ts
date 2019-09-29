import Player, { Choice } from "./player";

export default class EvilBot extends Player {
  constructor(name) {
    super(name);
  }

  public makeChoice() {
    return Choice.Cheat;
  }
}
