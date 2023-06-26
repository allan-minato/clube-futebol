import { ILeaderboard, LeaderBoardClass } from '../Interfaces/ILeaderboard';

const victoryCalc = (match: any) => {
  let victory = 0;
  let loss = 0;
  let draw = 0;

  if (match.homeTeamGoals > match.awayTeamGoals) {
    victory = 1;
  } else if (match.homeTeamGoals < match.awayTeamGoals) {
    loss = 1;
  } else {
    draw = 1;
  }

  return { victory, loss, draw };
};

export default function calculateLeaderboard(matches: any): ILeaderboard[] {
  const board: ILeaderboard[] = [];

  matches.forEach((match: any) => {
    const id = match.homeTeamId;

    if (board[id] === undefined) board[id] = new LeaderBoardClass();
    const result = victoryCalc(match);

    board[id].teamId = id;
    board[id].name = match.homeTeam.dataValues.teamName;
    board[id].totalPoints += result.victory * 3 + result.draw;
    board[id].totalGames += 1;
    board[id].totalVictories += result.victory;
    board[id].totalDraws += result.draw;
    board[id].totalLosses += result.loss;
    board[id].goalsFavor += match.homeTeamGoals;
    board[id].goalsOwn += match.awayTeamGoals;
    board[id].goalsBalance += match.homeTeamGoals - match.awayTeamGoals;
    board[id].efficiency = (board[id].totalPoints / (board[id].totalGames * 3)) * 100;
  });

  return board.filter((e) => e !== null);
}
