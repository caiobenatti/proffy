const Database = require("./db");
const createProffy = require("./createProffy");

Database.then(async (db) => {
  //add data

  proffyValue = {
    name: "Caio Benatti",
    avatar:
      "https://avatars2.githubusercontent.com/u/54548466?s=460&u=5fdbdf9c3f26222b533ff0bf614cd39e96ae0cab&v=4",
    whatsapp: "07543754154",
    bio: "Coder",
  };

  classValue = {
    subject: 0,
    cost: "200",
  };

  classScheduleValues = [
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220,
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220,
    },
  ];

  //await createProffy(db, { proffyValue, classValue, classScheduleValues });
  //query inserted data
  const selectedProffys = await db.all("SELECT * FROM proffys");
  // console.log(selectedProffys);

  //query a class of a specific teacher and bring the data of the professor
  const selectClassesAndProffys = await db.all(`
  SELECT classes.*,proffys.*
  FROM proffys
  JOIN classes ON (classes.proffy_id = proffys.id)
  WHERE classes.proffy_id = 1;  
  `);
  //  console.log(selectClassesAndProffys);

  const selectClassesSchedules = await db.all(`
  SELECT class_schedule.*
  FROM class_schedule
  WHERE class_schedule.class_id = "1"
  AND class_schedule.weekday = "0"
  AND class_schedule.time_from <= "520"
  AND class_schedule.time_to > "1120";  
`);
  console.log(selectClassesSchedules);
});
