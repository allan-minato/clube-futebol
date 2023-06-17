import TeamModel from '../models/team.model';
import { ITeam } from '../Interfaces/ITeam';
// import { ITeamModel } from '../Interfaces/ITeamModel';

export default class TeamService {
  private teamModel = new TeamModel();

  async getAllTeams(): Promise<ITeam[]> {
    const teams = await this.teamModel.findAll();
    return teams;
  }

  async getTeamsById(id: number): Promise<ITeam | null> {
    const team = await this.teamModel.findById(id);

    return team;
  }
}
