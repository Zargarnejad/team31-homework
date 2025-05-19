process.argv.splice(0, 2);
if (!validateInput()) {
  return;
}
let average = calculateAverage(process.argv);
console.log("The average is: " + average);

function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + Number(numbers[i]);
  }
  return sum / numbers.length;
}

function validateInput() {
  // check if list is empty
  if (process.argv.length == 0) {
    console.log("No number provided as argument.");
    return false;
  }

  // check if parameters are number
  for (let i = 0; i < process.argv.length; i++) {
    if (isNaN(process.argv[i])) {
      console.log(`The type of "${process.argv[i]}" isn't valid.`);
      return false;
    }
  }
  return true;
}
