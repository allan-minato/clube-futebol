import IMatch, { IMatchUpdate } from '../Interfaces/IMatches';
import MatchModel from '../models/match.model';
// import IMatchModel from '../Interfaces/IMatchModel';
// import matchModels from '../database/models/Matches';
import Teams from './team.service';

export default class MatchService {
  private matchModel = new MatchModel();
  private teamModel = new Teams();

  public async getAll(): Promise<IMatch[]> {
    const allMatches = await this.matchModel.getAll();
    return allMatches;
  }

  public async getAllMatchesInProgress(boolean: boolean): Promise<IMatch[]> {
    const allMatches = await this.matchModel.getAllMatchesInProgress(boolean);
    return allMatches;
  }

  public async matchFinish(id: number) {
    const [result] = await this.matchModel.matchFinish(id);
    if (result > 0) {
      return {
        status: 200,
        data: { message: 'Finished' },
      };
    }

    return {
      status: 400,
      data: { message: 'Nada encontrado' },
    };
  }

  public async matchUpdate(id: number, data: IMatchUpdate) {
    const [result] = await this.matchModel.matchUpdate(id, data);
    if (result > 0) {
      return {
        status: 200,
        data: { message: 'Partida atualizada' },
      };
    }

    return {
      status: 400,
      data: { message: 'Nada encontrado' },
    };
  }

  public async matchCreate(data: IMatch) {
    const { homeTeamId, awayTeamId } = data;

    const homeTeam = await this.teamModel.findById(homeTeamId);
    const awayTeam = await this.teamModel.findById(awayTeamId);

    if (!homeTeam || !awayTeam) {
      return {
        status: 404,
        data: { message: 'There is no team with such id!' },
      };
    }

    const response = await this.matchModel.matchCreate(data);
    return {
      status: 201,
      data: response,
    };
  }
}
