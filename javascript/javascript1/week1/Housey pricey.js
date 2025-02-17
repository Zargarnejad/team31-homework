// Peter's House Estimation

let houseWidth = 8;
let houseHight = 10;
let houseDepth = 10;
let gardenSizeInM2 = 100;
let buyingPrice = 2500000;

let volumeInMeters = houseWidth * houseHight * houseDepth;

let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (housePrice > buyingPrice) {
  console.log("Congradulation Peter! you bought your house at good price.");
} else if (housePrice < buyingPrice) {
  console.log("Sorry Peter! you paid too much!!!!!!!!!!");
} else {
  console.log("WOW!!! you bought the house at the exact right price.");
}

// Julia's House Estimation

houseWidth = 5;
houseHight = 8;
houseDepth = 11;
gardenSizeInM2 = 70;
buyingPrice = 1000000;

volumeInMeters = houseWidth * houseHight * houseDepth;

houseEstimatedPrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (houseEstimatedPrice > buyingPrice) {
  console.log("Congradulation Julia! you bought your house at good price.");
} else if (housePrice < buyingPrice) {
  console.log("Sorry Julia! you paid too much!!!!!!!!!!");
} else {
  console.log("WOW!!! you bought the house at the exact right price.");
}
