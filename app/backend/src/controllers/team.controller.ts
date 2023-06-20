import { Request, Response } from 'express';
import TeamService from '../services/team.service';

export default class TeamController {
  constructor(private teamController = new TeamService()) {}

  async getAllTeams(_req: Request, res: Response) {
    const teams = await this.teamController.findAll();
    res.status(200).json(teams);
  }

  async getTeamsById(req: Request, res: Response) {
    const { id } = req.params;
    const team = await this.teamController.findById(Number(id));
    res.status(200).json(team);
  }
}
