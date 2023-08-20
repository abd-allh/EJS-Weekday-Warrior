const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]
function currentDay() {
  const date = new Date()
  let day = weekDays[date.getDay()]
  return day
}

export default currentDay()
