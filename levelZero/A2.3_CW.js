console.log("A2.3_CW");
console.log("---- ---- ----");
console.log("Exercise 1");
console.log("---- ---- ----");

console.log("1.1");
let totalAverage = 87;
let hasSportsEndorsement = true;

let isEligibleForScholarship =
  totalAverage > 85 || hasSportsEndorsement === true;

console.log(
  "Is the student eligible for a scholarship?",
  isEligibleForScholarship
);

console.log("---- ---- ----");

console.log("1.2");
let shoppingAmount = 1250;
let hasPrimeMembership = true;

let qualifiesForFreeShipping =
  shoppingAmount > 999 || hasPrimeMembership === true;

console.log(
  "Does the user qualify for free ahipping?",
  qualifiesForFreeShipping
);

console.log("---- ---- ----");

console.log("1.3");
let sbiBalance = 5000;
let hdfBalance = 3000;
let sareeCost = 2500;
let kurtiCost = 1500;
let jewelryCost = 1000;

let totalCost = sareeCost + kurtiCost + jewelryCost;

let isAffordable = totalCost <= sbiBalance || totalCost <= hdfBalance;

console.log("Can you afford the purchase?", isAffordable);

console.log("---- ---- ----");
console.log("Exercise 2");
console.log("---- ---- ----");

console.log("2.1");
let selectedNumber = 85;
let isInRange = selectedNumber >= 75 && selectedNumber <= 100;

console.log("Is the selected nummber between 75 and 100?", isInRange);

console.log("---- ---- ----");
console.log("Exercise 3");
console.log("---- ---- ----");

console.log("3.1");
let shirtColor = "red";
let shirtSize = "L";
let shirtBrand = "Jockey";

let matchesFilters =
  shirtColor === "red" &&
  shirtSize === "L" &&
  (shirtBrand === "Jockey" || shirtBrand === "USPA");

console.log("Does the shirt match the filters?", matchesFilters);

console.log("---- ---- ----");

console.log("3.2");
let remainingItems = 4;
let itemSize = "M";
let itemBrand = "Nike";

let isDiscountApplicable =
  remainingItems < 5 &&
  itemSize === "M" &&
  (itemBrand === "Nike" || itemBrand === "Adidas");
console.log("Is the discount applicable?", isDiscountApplicable);