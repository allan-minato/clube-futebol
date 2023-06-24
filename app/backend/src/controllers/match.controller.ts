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

  public async matchFinish(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const [result] = await this.matchService.matchFinish(Number(id));
    console.log('WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW', result);
    if (result > 0) {
      return res.status(200).json({ message: 'Finished' });
    }

    return res.status(400).json({ message: 'Nada encontrado' });
  }

  public async matchUpdate(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { body } = req;

    const serviceResponse = await this.matchService.matchUpdate(Number(id), body);

    return res.status(200).json(serviceResponse);
  }

  public async matchCreate(req: Request, res: Response): Promise<Response> {
    const { body } = req;

    const serviceResponse = await this.matchService.matchCreate(body);
    return res.status(201).json(serviceResponse);
  }
}

export default MatchControler;
