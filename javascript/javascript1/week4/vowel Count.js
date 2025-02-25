function getCount(string) {
  let count = 0;
  const vowels = "aeiou";
  for (let letter of string) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}

console.log(getCount("monireh zargarnejad"));
console.log(getCount("hack your future"));
