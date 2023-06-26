import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes, CreationOptional,
} from 'sequelize';
import db from '.';

import TeamModel from './Team';

class Leaderboard extends Model<
InferAttributes<Leaderboard>,
InferCreationAttributes<Leaderboard>
> {
  declare id: CreationOptional<number>;
  declare teamId: number;
  declare name: string;
  declare totalPoints: number;
  declare totalGames: number;
  declare totalVictories: number;
  declare totalDraws: number;
  declare totalLosses: number;
  declare goalsFavor: number;
  declare goalsOwn: number;
  declare goalsBalance: number;
  declare efficiency: number;
}

Leaderboard.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    teamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    totalPoints: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalGames: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalVictories: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalDraws: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalLosses: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    goalsFavor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    goalsOwn: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    goalsBalance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    efficiency: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'leaderboards',
    timestamps: false,
  },
);

Leaderboard.belongsTo(TeamModel, {
  foreignKey: 'teamId',
  as: 'teamIdLeader',
});

export default Leaderboard;
