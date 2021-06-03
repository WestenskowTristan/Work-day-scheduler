let getTimeStamp = moment();
let weekDay = getTimeStamp.format(`dddd`);
let month = getTimeStamp.format(`MMMM`);
let day = getTimeStamp.format(`Do`);
let currentDay = `${weekDay}, ${month} ${day}`;
$("#current-day").text(currentDay);
let hour = moment().format().split("T")[1].split(":")[0];

// 9am - 5pm
let hours = JSON.parse(localStorage.getItem("hoursState")) || [
  {
    timeLabel: "9am",
    timeValue: 9,
    note: "",
  },
  {
    timeLabel: "10am",
    timeValue: 10,
    note: "",
  },
  {
    timeLabel: "11am",
    timeValue: 11,
    note: "",
  },
  {
    timeLabel: "12am",
    timeValue: 12,
    note: "",
  },
  {
    timeLabel: "1pm",
    timeValue: 13,
    note: "",
  },
  {
    timeLabel: "2pm",
    timeValue: 14,
    note: "",
  },
  {
    timeLabel: "3pm",
    timeValue: 15,
    note: "",
  },
  {
    timeLabel: "4pm",
    timeValue: 16,
    note: "",
  },
  {
    timeLabel: "5pm",
    timeValue: 17,
    note: "",
  },
];

let hoursEl = hours.map((h, i) => {
  let isThreeCharacters = h.timeLabel.length === 3;
  let isPast = h.timeValue < hour;
  let isPresent = h.timeValue === hour;
  let isFuture = h.timeValue > hour;
  return `
    <div id="${`hour-${i}`}" class="row">
      <div class="hour">
        ${isThreeCharacters ? `${h.timeLabel}  ` : h.timeLabel} 
      </div>
      <textarea
        class="textarea ${isPast && "past"} ${isPresent && "present"} ${
    isFuture && "future"
  }">${h.note}</textarea>
      <button class="saveBtn">
        <i class="bi-save"></i>
      </button>
    </div>
  `;
});
$("#container").empty().html(hoursEl);

let saveTask = (index, value) => {
  hours[index].note = value;
  localStorage.setItem("hoursState", JSON.stringify(hours));
};

hours.map((_, i) => {
  $(`#hour-${i} button`)
    .off()
    .click(() => {
      let textAreaValue = $(`#hour-${i} textarea`).val();
      saveTask(i, textAreaValue);
    });
});

let myFavorites = [
  {
    favorited: true,
    name: "mommy milkers",
  },
  {
    favorited: false,
    name: "justin ass",
  },
];

myFavorites.map((favorite, i) => {
  if (favorite.favorited) {
    return `
    <option></option>
    `;
  }
});
