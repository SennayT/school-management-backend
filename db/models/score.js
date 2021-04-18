"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Score.belongsTo(models.Student, {
        foreignKey: "StudentId",
      });

      Score.belongsTo(models.Semester, {
        foreignKey: "SemesterId",
      });

      Score.belongsTo(models.Subject, {
        foreignKey: "SubjectId",
      });

      Score.belongsTo(models.GradeLevel, {
        foreignKey: "GradeLevelId",
      });
    }
  }
  Score.init(
    {
      score: DataTypes.INTEGER,
      start_year: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Score",
    }
  );
  return Score;
};
