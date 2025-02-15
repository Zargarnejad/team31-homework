
let firstWord = ['Easy','First','Great','Second','Danish','Social','Awesome','Family','King','Queen']
let secondWord = ['Company','Holding','Board','Lion','Tiger','Panda','One','Book','Face','Baby']
const randomNumber = Math.floor(Math.random() * 10);
let startupName = firstWord[randomNumber]+' '+secondWord[randomNumber ]

console.log(`The startup: " ${startupName}" contains ${startupName.length} characters`)
