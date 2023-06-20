import { Request, Response } from 'express';
import MatchService from '../services/match.service';

class MatchControler {
  private readonly matchService: MatchService;

  constructor() {
    this.matchService = new MatchService();
  }

  public getAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { inProgress } = req.query;

      const response = await this.matchService.getAll();

      if (inProgress === undefined) {
        return res.status(200).json(response);
      }

      const matchesInProgress = await this.matchService
        .getAllMatchesInProgress(inProgress === 'true');

      return res.status(200).json(matchesInProgress);
    } catch (error) {
      return res.status(401).json({ message: error });
    }
  };
}

export default MatchControler;
