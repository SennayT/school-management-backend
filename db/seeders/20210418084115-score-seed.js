"use strict";

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
    const students = await queryInterface.sequelize.query(
      'SELECT id,"GradeLevelId", "fName" FROM "Students"'
    );
    const subjects = await queryInterface.sequelize.query(
      'SELECT * FROM "Subjects"'
    );
    const semesters = await queryInterface.sequelize.query(
      'SELECT id FROM "Semesters"'
    );
    if (semesters[0].length === 0) {
      throw new Error("No semesters in database");
    }
    const semesterId = semesters[0][0].id;
    const scores = getScores(students[0], subjects[0], 1);
    await queryInterface.bulkInsert("Scores", scores, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Scores");
  },
};

function getScores(students, subjects, semesterId) {
  const scores = [];

  for (const student of students) {
    const studentSubjects = subjects.filter((studentSubject) => {
      return studentSubject.GradeLevelId === student.GradeLevelId;
    });

    for (const studentSubject of studentSubjects) {
      const score = {
        score: getRandomScore(50, 100),
        start_year: 2000,
        createdAt: new Date(),
        updatedAt: new Date(),
        StudentId: student.id,
        SemesterId: semesterId,
        SubjectId: studentSubject.id,
        GradeLevelId: student.GradeLevelId,
      };
      scores.push(score);
    }
  }

  return scores;
}

function getRandomScore(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
