import Chalk from "chalk";
import Rules from "./rules";
import Player, { Choice } from "./player";

const draw = "NOBODY";

type ScoreBoard = {
  player1Scores: number[];
  player2Scores: number[];
  player1TotalScore: number;
  player2TotalScore: number;
};

type PlayerChoices = {
  player1Choices: Choice[];
  player2Choices: Choice[];
  player1LastChoice: Choice | null;
  player2LastChoice: Choice | null;
};

export default class Game {
  private p1: Player;
  private p2: Player;
  private currentWinner: string;
  private rounds: number;
  private _scoreBoard: ScoreBoard;
  private playerChoices: PlayerChoices;

  get scoreBoard() {
    return this._scoreBoard;
  }

  constructor(player1: Player, player2: Player, rounds: number = 0) {
    this.p1 = player1;
    this.p2 = player2;
    this.currentWinner = draw;
    this.rounds = rounds;
    this._scoreBoard = {
      player1Scores: [],
      player2Scores: [],
      player1TotalScore: 0,
      player2TotalScore: 0
    };
    this.playerChoices = {
      player1Choices: [],
      player2Choices: [],
      player1LastChoice: null,
      player2LastChoice: null
    };
  }

  private computeTotalScore() {
    this._scoreBoard.player1TotalScore = this.scoreBoard.player1Scores.reduce(
      (a, b) => a + b,
      0
    );
    this._scoreBoard.player2TotalScore = this.scoreBoard.player2Scores.reduce(
      (a, b) => a + b,
      0
    );
  }

  private computeCurrentScore(p1Choice: Choice, p2Choice: Choice) {
    const scores = Rules[`${p1Choice}${p2Choice}`];
    this._scoreBoard.player1Scores.push(scores[0]);
    this._scoreBoard.player2Scores.push(scores[1]);
  }

  public setRounds(rounds: number) {
    this.rounds = rounds;
    return this;
  }

  public changePlayer(playerName: string, newPlayer: Player) {
    if (this.p1.toString() === playerName) {
      this.p1 = newPlayer;
    } else if (this.p2.toString() === playerName) {
      this.p2 = newPlayer;
    } else {
      throw new Error("No such player present");
    }
  }

  public runRound() {
    this.playerChoices.player1LastChoice = this.p1.makeChoice(
      this.playerChoices.player2LastChoice
    );
    this.playerChoices.player2LastChoice = this.p2.makeChoice(
      this.playerChoices.player1LastChoice
    );
    this.playerChoices.player1Choices.push(
      this.playerChoices.player1LastChoice
    );
    this.playerChoices.player2Choices.push(
      this.playerChoices.player2LastChoice
    );

    this.computeCurrentScore(
      this.playerChoices.player1LastChoice,
      this.playerChoices.player2LastChoice
    );
    this.computeTotalScore();
    this.computerWinner();
  }

  public play() {
    for (let i = 0; i < this.rounds; i++) {
      this.runRound();
    }
  }

  public gameState() {
    return {
      P1Choices: this.playerChoices.player1Choices,
      P2Choices: this.playerChoices.player2Choices,
      P1Scores: this.scoreBoard.player1Scores,
      P2Scores: this.scoreBoard.player2Scores
    };
  }

  public gameScore() {
    return {
      [`${this.p1.name} Score`]: this.scoreBoard.player1Scores,
      [`${this.p2.name} Score`]: this.scoreBoard.player2Scores
    };
  }

  public computerWinner() {
    if (this.scoreBoard.player1TotalScore > this.scoreBoard.player2TotalScore) {
      this.currentWinner = this.p1.toString();
    } else if (
      this.scoreBoard.player1TotalScore < this.scoreBoard.player2TotalScore
    ) {
      this.currentWinner = this.p2.toString();
    } else {
      this.currentWinner = draw;
    }
  }

  public printMatchStats() {
    console.group(Chalk.yellow("\n\nPLAYERS ON FIELD"));
    console.log(
      `PLAYER 1: ${Chalk.blue(this.p1.name)} vs PLAYER 2: ${Chalk.blue(
        this.p2.name
      )}`
    );
    console.groupEnd();
    console.group(Chalk.yellow("GAME STATE"));
    console.table(this.gameState());
    console.groupEnd();
    console.group(Chalk.yellow("GAME Score"));
    console.table(this.gameScore());
    console.groupEnd();
    console.log(Chalk.yellow("WINNER: "), this.currentWinner, "\n\n");
  }
}
