import Match from '../database/models/Matches';

export default interface IMatchService {
  getAll(): Promise<Match[]>,
  getAllMatchesInProgress(inProgress: boolean): Promise<Match[]>,
}
