import Game from "./game";
import Chalk from "chalk";
import Player from "./player";

interface IScores {
  [name: string]: number;
}

export default class Tournament {
  private players: Array<Player>;
  private tournamentScores: IScores = {};
  private tournamentWinner: string;

  constructor(players: Player[]) {
    this.players = players;
    this.players.forEach(player => (this.tournamentScores[player.name] = 0));
    this.tournamentWinner = "";
  }

  public runTournament() {
    for (let i = 0; i < this.players.length; i++) {
      for (let j = i + 1; j < this.players.length; j++) {
        const player1 = this.players[i];
        const player2 = this.players[j];
        const game = new Game(player1, player2);
        game.setRounds(5).runRound();
        this.tournamentScores[player1.name] +=
          game.scoreBoard.player1TotalScore;
        this.tournamentScores[player2.name] +=
          game.scoreBoard.player2TotalScore;
        game.printMatchStats();
      }
    }
    for (let i = 0; i < this.players.length - 1; i++) {}
    return this;
  }

  public printMatchStats() {
    console.log("==================================");
    console.log("TOURNAMENT RESULTS");
    console.log("==================================");
    console.group("");
    console.table(this.tournamentScores);
    console.groupEnd();
    console.log("==================================");
    return this;
  }

  public computeOverallWinner() {
    let maxScore = 0;
    for (let playerName in this.tournamentScores) {
      const playerScore = this.tournamentScores[playerName];
      if (playerScore > maxScore) {
        maxScore = playerScore;
        this.tournamentWinner = playerName;
      }
    }
    console.log("##################################");
    console.group(Chalk.yellow("AND THE WINNER IS !!!!! \n"));
    console.log(Chalk.green.bold(this.tournamentWinner) + "\n");
    console.groupEnd();
    console.log("##################################");
  }
}
