"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("Scores", "StudentId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Students",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });

    await queryInterface.addColumn("Scores", "SemesterId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Semesters",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });

    await queryInterface.addColumn("Scores", "SubjectId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Subjects",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });

    await queryInterface.addColumn("Scores", "GradeLevelId", {
      type: Sequelize.INTEGER,
      references: {
        model: "GradeLevels",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("ClassRooms", "GradeLevelId");

    await queryInterface.removeColumn("ClassRooms", "StudentId");

    await queryInterface.removeColumn("ClassRooms", "SemesterId");

    await queryInterface.removeColumn("ClassRooms", "SubjectId");
  },
};
