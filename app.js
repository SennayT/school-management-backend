const { Score, GradeLevel, ClassRoom } = require("./db/models");

async function test() {
  const score = await Score.findOne({
    where: {
      id: 3,
    },
  });

  const { fName } = await score.getStudent();
  console.log(fName);
}

test()
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });
