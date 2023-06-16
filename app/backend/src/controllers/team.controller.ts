import { Request, Response } from 'express';
import TeamService from '../services/team.service';

export default class TeamController {
  constructor(private teamController = new TeamService()) {}

  async getAllTeams(_req: Request, res: Response) {
    const teams = await this.teamController.getAllTeams();
    res.status(200).json(teams);
  }
}
