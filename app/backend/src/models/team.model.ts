// import teamModel from '../database/models/Team';
// import { ITeam } from '../Interfaces/ITeam';
// import { ITeamModel } from '../Interfaces/ITeamModel';

// export default class TeamModel implements ITeamModel {
//   private team = teamModel;

//   async findAll(): Promise<ITeam[]> {
//     const db = await this.team.findAll();
//     return db.map(({ id, teamName }) => (
//       { id, teamName }
//     ));
//   }

//   async findById(id: number): Promise<ITeam | null> {
//     const db = await this.team.findByPk(id);

//     return db;
//   }
// }
