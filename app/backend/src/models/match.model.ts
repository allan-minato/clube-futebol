import IMatch, { IMatchUpdate } from '../Interfaces/IMatches';
// import IMatchModel from '../Interfaces/IMatchModel';
import matchModels from '../database/models/Matches';
import Teams from '../database/models/Team';

export default class MatchModel {
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

  async findById(id:number): Promise<IMatch | null> {
    const match = await this.match.findByPk(id);
    return match;
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

  async matchFinish(id: number) {
    const result = await this.match.update({ inProgress: false }, { where: { id } });
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAA', result);

    return result;
  }

  async matchUpdate(id: number, data: IMatchUpdate) {
    const result = this.match.update(
      {
        ...data,
      },
      {
        where: { id },
      },
    );
    return result;
  }

  async matchCreate(data:IMatch) {
    const result = this.match.create({ ...data, inProgress: true });
    return result;
  }
}
