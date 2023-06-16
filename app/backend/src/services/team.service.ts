import TeamModel from '../models/team.model';
import { ITeam } from '../Interfaces/ITeam';
import { ITeamModel } from '../Interfaces/ITeamModel';

export default class TeamService {
  constructor(private teamModel: ITeamModel = new TeamModel()) {}

  async getAllTeams(): Promise<ITeam[]> {
    const teams = await this.teamModel.findAll();
    return teams;
  }
}
