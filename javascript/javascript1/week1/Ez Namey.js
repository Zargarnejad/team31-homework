const firstWord = [
  "Easy",
  "First",
  "Great",
  "Second",
  "Danish",
  "Social",
  "Awesome",
  "Family",
  "King",
  "Queen",
];
const secondWord = [
  "Company",
  "Holding",
  "Board",
  "Lion",
  "Tiger",
  "Panda",
  "One",
  "Book",
  "Face",
  "Baby",
];
const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);

const startupName = firstWord[randomNumber1] + " " + secondWord[randomNumber2];

console.log(
  `The startup: " ${startupName}" contains ${startupName.length} characters`
);
