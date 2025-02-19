const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = getArrivingTime(travelInformation);
console.log(travelTime);

function getArrivingTime(travelData) {
  const calculatedTime = travelData.destinationDistance / travelData.speed;
  const hours = Math.floor(calculatedTime);
  const minutes = 60 * (calculatedTime - hours);
  const roundMinutes = Math.round(minutes);
  return hours + " hours and " + roundMinutes + " minutes. ";
}
