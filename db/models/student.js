"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.belongsTo(models.GradeLevel, {
        foreignKey: "GradeLevelId",
        onDelete: "CASCADE",
      });

      Student.belongsTo(models.Semester, {
        foreignKey: "SemesterId",
      });

      Student.belongsTo(models.ClassRoom, {
        foreignKey: "ClassRoomId",
      });

      Student.hasMany(models.Score, {
        foreignKey: "StudentId",
      });
    }
  }
  Student.init(
    {
      fname: DataTypes.STRING,
      mName: DataTypes.STRING,
      lName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      birthdate: DataTypes.DATE,
      imageAddress: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Student",
    }
  );
  return Student;
};