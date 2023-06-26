import { Request, Response } from 'express';
import LeaderBoardService from '../services/leaderboard.service';

export default class LeaderBoardController {
  private leaderBoardService = new LeaderBoardService();

  public async leaderboardCreate(_req: Request, res: Response): Promise<Response> {
    const leaderBoardService = await this.leaderBoardService.leaderboardCreate();
    return res.status(200).json(leaderBoardService);
  }
}
