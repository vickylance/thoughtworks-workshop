export enum Choice {
  "Cooperate",
  "Cheat"
}

export default class Player {
  private name: string;

  constructor(name: string) {
    this.name = name || "Guest Player";
  }

  public makeChoice() {
    const choice = Math.random() > 0.5 ? Choice.Cooperate : Choice.Cheat;
    return choice;
  }

  public toString() {
    return `Player: ${this.name}`;
  }
}
