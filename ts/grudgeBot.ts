import Player, { Choice } from "./player";

export default class GrudgeBot extends Player {
  private turnEvil: boolean;

  constructor(name: string) {
    super(name);
    this.turnEvil = false;
  }

  public makeChoice(opponentLastChoice?: Choice | null) {
    if (opponentLastChoice === Choice.Cheat) {
      this.turnEvil = true;
    }
    if (this.turnEvil) {
      return Choice.Cheat;
    } else {
      return Choice.Cooperate;
    }
  }
}
