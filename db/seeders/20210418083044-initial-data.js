"use strict";
const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "GradeLevels",
      [
        { name: "Grade 1", createdAt: new Date(), updatedAt: new Date() },
        { name: "Grade 2", createdAt: new Date(), updatedAt: new Date() },
        { name: "Grade 3", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Semesters",
      [
        { value: 1, createdAt: new Date(), updatedAt: new Date() },
        { value: 2, createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );

    const levels = await queryInterface.sequelize.query(
      'SELECT id FROM "GradeLevels"'
    );

    const rooms = getRooms(levels[0]);
    await queryInterface.bulkInsert("ClassRooms", rooms, {});

    const subjects = getSubjects(levels[0]);
    await queryInterface.bulkInsert("Subjects", subjects, {});

    const classRooms = await queryInterface.sequelize.query(
      'SELECT id,"GradeLevelId" FROM "ClassRooms"'
    );

    const students = getStudents(classRooms[0]);
    await queryInterface.bulkInsert("Students", students, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Students");
    await queryInterface.bulkDelete("Subjects");
    await queryInterface.bulkDelete("ClassRooms");
    await queryInterface.bulkDelete("Semesters");
    await queryInterface.bulkDelete("GradeLevels");
  },
};

function getRooms(levels) {
  const sections = ["A", "B", "C", "D"];
  const rooms = [];

  for (const level of levels) {
    for (const section of sections) {
      rooms.push({
        name: section,
        GradeLevelId: level.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
  }

  return rooms;
}

function getSubjects(levels) {
  const subjectNames = ["English", "Amharic", "Math", "Science", "Sport"];
  const subjects = [];

  for (const level of levels) {
    for (const subjectName of subjectNames) {
      subjects.push({
        name: subjectName,
        GradeLevelId: level.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
  }

  return subjects;
}

function getStudents(classRooms) {
  const students = [];

  for (const classRoom of classRooms) {
    for (let i = 0; i < 10; i++) {
      const student = {
        fName: faker.name.firstName(),
        mName: faker.name.middleName(),
        lName: faker.name.lastName(),
        email: faker.internet.email(),
        password: "password",
        birthdate: new Date(),
        imageAddress: "File Here",
        SemesterId: 1,
        GradeLevelId: classRoom.GradeLevelId,
        ClassRoomId: classRoom.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      students.push(student);
    }
  }

  return students;
}
