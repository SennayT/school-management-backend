"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("Students", "GradeLevelId", {
      type: Sequelize.INTEGER,
      references: {
        model: "GradeLevels",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });

    await queryInterface.addColumn("Students", "SemesterId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Semesters",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });

    await queryInterface.addColumn("Students", "ClassRoomId", {
      type: Sequelize.INTEGER,
      references: {
        model: "ClassRooms",
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
    await queryInterface.removeColumn("Subjects", "ClassRoomId");
    await queryInterface.removeColumn("Subjects", "SemesterId");
    await queryInterface.removeColumn("Subjects", "GradeLevelId");
  },
};
