import Player, { Choice } from "./player";

export default class GoodBot extends Player {
  constructor(name: string) {
    super(name);
  }

  public makeChoice() {
    return Choice.Cooperate;
  }
}
