const seriesDurations = [
  {
    title: "Black Mirror",
    days: 6,
    hours: 22,
    minutes: 48,
  },
  {
    title: "The Night Agent",
    days: 7,
    hours: 15,
    minutes: 8,
  },
  {
    title: "Chesapeake Shores",
    days: 9,
    hours: 8,
    minutes: 23,
  },
  {
    title: "Emily in Paris",
    days: 0,
    hours: 18,
    minutes: 40,
  },
  {
    title: "Freinds",
    days: 4,
    hours: 6,
    minutes: 16,
  },
];

function getseriesDurations() {
  let percentageOfLifepan = 0;
  for (i = 0; i < seriesDurations.length; i++) {
    const duration = seriesDurations[i];
    const days =
      duration.days + duration.hours / 24 + duration.minutes / (24 * 60);
    const years = days / 365;
    const yearsInPrecent = (years * 100) / 80;
    percentageOfLifepan += yearsInPrecent;
    console.log(
      duration.title + " took " + yearsInPrecent.toFixed(3) + " % of my life."
    );
  }
  console.log(
    "In Total that is " + percentageOfLifepan.toFixed(3) + "% of my life."
  );
}

getseriesDurations();
