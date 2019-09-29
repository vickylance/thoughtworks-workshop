import Player, { Choice } from "./player";

export default class GoodBot extends Player {
  constructor(name) {
    super(name);
  }

  public makeChoice() {
    return Choice.Cooperate;
  }
}
