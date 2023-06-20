import IMatchModel from '../Interfaces/IMatchModel';
import matchModels from '../database/models/Matches';
import Teams from '../database/models/Team';

export default class MatchService implements IMatchModel {
  private match = matchModels;

  async getAll(): Promise<matchModels[]> {
    const matches = await this.match.findAll({
      include: [
        { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return matches;
  }

  async getAllMatchesInProgress(inProgress: boolean): Promise<matchModels[]> {
    const matchesInProgress = await this.match.findAll({
      include:
        [
          { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
          { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } },
        ],
      where: { inProgress },
    });
    return matchesInProgress;
  }
}
