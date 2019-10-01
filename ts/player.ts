export enum Choice {
  "Cooperate",
  "Cheat"
}

export default class Player {
  private _name: string;
  get name(): string {
    return this._name;
  }

  constructor(name: string) {
    this._name = name || "Guest Player";
  }

  public makeChoice(opponentLastChoice?: Choice | null) {
    const choice = Math.random() > 0.5 ? Choice.Cooperate : Choice.Cheat;
    return choice;
  }

  public toString() {
    return `Player: ${this._name}`;
  }
}
