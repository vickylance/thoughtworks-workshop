import Player, { Choice } from "./player";

export default class EvilBot extends Player {
  constructor(name: string) {
    super(name);
  }

  public makeChoice() {
    return Choice.Cheat;
  }
}
