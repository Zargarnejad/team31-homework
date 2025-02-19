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
const nameToRemove = "Ahmad";
const indexofAhmad = names.indexOf("Ahmad");
console.log(indexofAhmad);
if (indexofAhmad >= 0) {
  names.splice(indexofAhmad, 1);
}

console.log(names);
