import Player, { Choice } from "./player";

export default class CopyCatBot extends Player {
  constructor(name: string) {
    super(name);
  }

  public makeChoice(opponentLastChoice?: Choice | null) {
    let choice;
    if (opponentLastChoice) {
      choice = opponentLastChoice;
    } else {
      // First Choice
      choice = Choice.Cooperate;
    }
    return choice;
  }
}
