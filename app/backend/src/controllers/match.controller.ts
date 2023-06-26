import { Request, Response } from 'express';
import MatchService from '../services/match.service';

export default class MatchController {
  private matchService = new MatchService();

  public async getAll(req: Request, res: Response): Promise<Response> {
    const { inProgress } = req.query;

    if (inProgress !== undefined) {
      const serviceResponse = await this.matchService.getAllMatchesInProgress(
        inProgress === 'true',
      );
      return res.status(200).json(serviceResponse);
    }

    const serviceResponse = await this.matchService.getAll();
    return res.status(200).json(serviceResponse);
  }

  public async matchFinish(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const serviceResponse = await this.matchService.matchFinish(Number(id));

    return res.status(serviceResponse.status).json(serviceResponse.data);
  }

  public async matchUpdate(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { body } = req;

    const serviceResponse = await this.matchService.matchUpdate(Number(id), body);

    return res.status(serviceResponse.status).json(serviceResponse.data);
  }

  public async matchCreate(req: Request, res: Response): Promise<Response> {
    const { body } = req;
    const serviceResponse = await this.matchService.matchCreate(body);
    return res.status(serviceResponse.status).json(serviceResponse.data);
  }
}
