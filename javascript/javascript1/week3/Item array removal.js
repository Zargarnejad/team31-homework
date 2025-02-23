const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const indexofAhmad = names.indexOf("Ahmad");
console.log(indexofAhmad);
if (indexofAhmad >= 0) {
  names.splice(indexofAhmad, 1);
} else {
  console.log("No such name was found in the list");
}

console.log(names);
