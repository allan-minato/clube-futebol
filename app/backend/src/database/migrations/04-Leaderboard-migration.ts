import { Model, QueryInterface, DataTypes } from "sequelize";
import { ILeaderboard } from "../../Interfaces/ILeaderboard";

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ILeaderboard>>("leaderboards", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
          },
        teamId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references: {
                model: "teams",
                key: "id",
              },
          },
          name: {
            type: DataTypes.STRING,
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
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable("leaderboards");
  },
};