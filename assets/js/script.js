let getTimeStamp = moment();
let weekDay = getTimeStamp.format(`dddd`);
let month = getTimeStamp.format(`MMMM`);
let day = getTimeStamp.format(`Do`);
let currentDay = `${weekDay}, ${month} ${day}`;
$("#current-day").text(currentDay);
console.log(currentDay);
let hour = moment().format().split("T")[1].split(":")[0];
console.log(hour);

// 9am - 5pm
let hours = [
  {
    timeLabel: "9am",
    timeValue: 9,
    note: "chistmas",
  },
  {
    timeLabel: "10am",
    timeValue: 10,
    note: "chistmas",
  },
  {
    timeLabel: "11am",
    timeValue: 11,
    note: "chistmas",
  },
  {
    timeLabel: "12am",
    timeValue: 12,
    note: "chistmas",
  },
  {
    timeLabel: "1pm",
    timeValue: 13,
    note: "chistmas",
  },
  {
    timeLabel: "2pm",
    timeValue: 14,
    note: "chistmas",
  },
  {
    timeLabel: "3pm",
    timeValue: 15,
    note: "chistmas",
  },
  {
    timeLabel: "4pm",
    timeValue: 16,
    note: "chistmas",
  },
  {
    timeLabel: "5pm",
    timeValue: 17,
    note: "chistmas",
  },
];

let hoursEl = hours.map((h, i) => {
  return `
    <h1>${h.note}</h1>
  `;
});
console.log(hoursEl);
$("#container").empty().html(hoursEl);
