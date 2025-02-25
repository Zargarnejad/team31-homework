function squareDigits(num) {
  let text = num.toString();
  let resultString = "";
  for (let i = 0; i < text.length; i++) {
    let square = text[i] * text[i];
    resultString += square;
  }
  return Number(resultString);
}

console.log(squareDigits(2435));
console.log(squareDigits(11919));
console.log(squareDigits(534));
console.log(squareDigits(44));
