"use strict";
const { Model } = require("sequelize");
const jwt = require("jsonwebtoken");
require("dotenv").config();
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

    async generateToken() {
      const secret = process.env.JWT_SECRET;
      const id = this.id;

      const token = jwt.sign({ id }, secret);
      return token;
    }
  }
  Student.init(
    {
      fName: DataTypes.STRING,
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
