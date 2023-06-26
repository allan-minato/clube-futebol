import { ILeaderboard } from '../Interfaces/ILeaderboard';
import SequelizeLeaderboard from '../database/models/Leaderboard';
import MatchModel from './match.model';
import leaderBoardCalculate from '../helpers/calculateLeaderboard';

export default class LeaderboardModel {
  private model = SequelizeLeaderboard;
  private matchModel = new MatchModel();

  async leaderboardCreate(): Promise<ILeaderboard[]> {
    const allMatches = await this.matchModel.findOnlyId();
    const leaderBoardComplete = leaderBoardCalculate(allMatches);

    await leaderBoardComplete.reduce(async (previousPromise, board) => {
      await previousPromise;
      await this.model.create(board);
    }, Promise.resolve());

    const result = this.model.findAll({
      attributes: { exclude: ['id', 'teamId'] },
      order: [['totalPoints', 'DESC'], ['goalsBalance', 'DESC'], ['goalsFavor', 'DESC']],
    });
    return result;
  }
}
