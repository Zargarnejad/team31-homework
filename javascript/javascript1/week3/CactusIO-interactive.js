// ****************** Adding an activity *******************

const activities = [];
const limit = 100;

function addActivity(activity, duration) {
  let date = new Date();
  let localdate = date.toLocaleDateString("en-GB");
  activities.push({ date: localdate, activity: activity, duration: duration });
}
addActivity("Youtube", 30);
addActivity("w3school", 60);
addActivity("GitHub", 80);
addActivity("Facebook", 25);
console.log(activities);

// ****************** Show my status *****************

function showStatus(activities) {
  if (activities == undefined || activities.length == 0) {
    console.log("Add some activities before calling showStatus.");
  } else {
    let sumDuration = 0;
    for (i = 0; i < activities.length; i++) {
      sumDuration = sumDuration + activities[i].duration;
    }
    console.log(
      `You have added ${activities.length} activities. They amount to ${sumDuration} min. of usage`
    );
    if (sumDuration >= limit) {
      console.log("You have reached your limit, no more smartphoning for you!");
    }
  }
}

showStatus(activities);

// ****************** Extra future *****************
function findLongestActivity(activities) {
  if (activities == undefined || activities.length == 0) {
    console.log("Add some activities before calling findLongestActivity.");
  } else {
    let longestActivity = activities[0];
    for (i = 0; i < activities.length; i++) {
      if (activities[i].duration > longestActivity.duration) {
        longestActivity = activities[i];
      }
    }
    return longestActivity.activity;
  }
}
const longestActivity = findLongestActivity(activities);
console.log(longestActivity);
