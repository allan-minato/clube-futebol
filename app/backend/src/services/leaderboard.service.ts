import LeaderboardModel from '../models/leaderboard.model';
import { ILeaderboard } from '../Interfaces/ILeaderboard';

export default class LeaderBoardService {
  private leaderBoard = new LeaderboardModel();

  public async leaderboardCreate(): Promise<ILeaderboard[]> {
    const result = await this.leaderBoard.leaderboardCreate();
    return result;
  }
}
