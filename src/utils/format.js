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

function getSubject(subjectNumber) {
  const arrayPosition = +subjectNumber - 1;
  return subjects[arrayPosition];
}

function convertHoursToMinutes(time) {
  const [hour, minutes] = time.split(":");
  return Number(hour * 60 + minutes);
}

module.exports = {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes,
};
