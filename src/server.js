// Data
const proffys = [
  {
    name: "Diego Fernandes",
    avatar:
      "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "89898455423",
    bio: "Entusiasta das melhores tecnologias de química avançada",
    subject: "Quimica",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220],
  },
  {
    name: "Daniele Evangelista",
    avatar:
      "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "89898455423",
    bio: "  Entusiasta das melhores tecnologias de química avançada.",
    subject: "Quimica",
    cost: "20",
    weekday: [1],
    time_from: [720],
    time_to: [1220],
  },
];

const subjects = [
  "Arts",
  "Biology",
  "Sciences",
  "Physical Education",
  "Physics",
  "Geography",
  "History",
  "Math",
  "English",
  "Chemistry",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Functions
function pageLanding(req, res) {
  return res.render("index.html");
}
function pageStudy(req, res) {
  const filters = req.query;
  return res.render("study.html", { proffys, filters, subjects, weekdays });
}

function getSubject(subjectNumber) {
  const arrayPosition = +subjectNumber - 1;
  return subjects[arrayPosition];
}

function pageGiveClasses(req, res) {
  // add new teachers to the database
  const dataNew = req.query;

  const isNotEmpty = Object.keys(dataNew).length > 0;
  if (isNotEmpty) {
    dataNew.subject = getSubject(dataNew.subject);
    proffys.push(dataNew);

    return res.redirect("/study");
  }
  return res.render("give-classes.html", { subjects, weekdays });
}

// Server
const express = require("express");
const server = express();

// Nunjucks template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

// Start and server config

server
  .use(express.static("public"))
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .listen(5500);
