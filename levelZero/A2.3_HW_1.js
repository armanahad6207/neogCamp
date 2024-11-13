console.log("A2.3_HW_1");

console.log("---- ---- ----");
console.log("Exercise 1");
console.log("---- ---- ----");

console.log("1.1");
let subject1Marks = 85;
let subject2Marks = 92;
let subject3Marks = 78;
let hasDramaSchoolEndorsement = true;

let averageMarks = (subject1Marks + subject2Marks + subject3Marks) / 3;
let isSelected = averageMarks >= 80 || hasDramaSchoolEndorsement === "true";

console.log("Is the user selected?", isSelected);

console.log("---- ---- ----");

console.log("1.2");
let foodBill = 1500;
let hasZomatoGoldMemebership = true;
let quilifiesForDiscountedBill =
  foodBill <= 2000 || hasDramaSchoolEndorsement === true;

console.log(
  "Does the user qualify to pay the food bill at a discounted price?",
  quilifiesForDiscountedBill
);

console.log("---- ---- ----");

console.log("1.3");
let piggy1BankBalance = 2000;
let piggy2BankBalance = 1500;
let penCost = 50;
let notebookCost = 100;
let pencilCost = 20;

let totalCost = penCost + notebookCost + pencilCost;
let canWeAffordStationery =
  totalCost <= piggy1BankBalance || totalCost <= piggy2BankBalance;
console.log("Can you afford the purchase?", canWeAffordStationery);

console.log("---- ---- ----");
console.log("Exercise 2");
console.log("---- ---- ----");

console.log("2.1");
let personAge = 25;
let isAgeRange = personAge >= 18 && personAge <= 60;
console.log("Is the person's age between 18 and 60?", isAgeRange);

console.log("---- ---- ----");
console.log("Exercise 3");
console.log("---- ---- ----");

console.log("3.1");
let tvScreenSize = 55;
let tvBrand = "Sony";
let tvPrice = 50000;

let meetsCriteria =
  tvScreenSize >= 55 &&
  (tvBrand === "Sony" || tvBrand === "Sumsung") &&
  tvPrice <= 60000;

console.log("does the TV meet the criteria", meetsCriteria);

console.log("---- ---- ----");

console.log("3.2");
let watchReleaseYear = 2022;
let currentYear = 2024;
let watchSize = "L";
let watchBrand = "Apple";

let isDiscountApplicable =
  watchReleaseYear >= currentYear &&
  (watchSize === "L" || watchSize === "M") &&
  (watchBrand === "Apple" || watchBrand === "Samsung");

console.log("Is discount apllicable?", isDiscountApplicable);
