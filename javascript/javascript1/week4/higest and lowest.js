function highAndLow(numbers) {
  let numArray = numbers.split(" ").map(Number);

  let max = numArray[0];
  let min = numArray[0];

  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > max) {
      max = numArray[i];
    }
    if (numArray[i] < min) {
      min = numArray[i];
    }
  }

  return ` " ${max} ${min}"`;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));
