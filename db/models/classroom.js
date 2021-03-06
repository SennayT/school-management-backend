"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ClassRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ClassRoom.belongsTo(models.GradeLevel, {
        foreignKey: "GradeLevelId",
      });

      ClassRoom.hasMany(models.Student, {
        foreignKey: "ClassRoomId",
      });
    }
  }
  ClassRoom.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ClassRoom",
    }
  );
  return ClassRoom;
};
