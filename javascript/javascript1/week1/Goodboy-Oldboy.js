const dogYearOfBirth = 2020;
const dogYearFuture = 2037;
const humanYear = dogYearFuture - dogYearOfBirth;
const dogYear = 7 * humanYear;

const shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears === true) {
  console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}`);
} else {
  console.log(
    `Your dog will be ${humanYear} human years old in ${dogYearFuture}`
  );
}
