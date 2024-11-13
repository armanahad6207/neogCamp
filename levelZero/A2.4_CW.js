console.log("A2.4_CW");

console.log("---- ---- ----");
console.log("Exercise 1");
console.log("---- ---- ----");

console.log("1.1");
let originalPrice = 1000;
let discountPercentage = 25;
let discountAmount = (originalPrice * discountPercentage) / 100;
let finalPrice = originalPrice - discountAmount;

console.log("Original Price:", originalPrice);
console.log("Discount Percentage:", discountPercentage);
console.log("Discount Amount:", discountAmount);
console.log("Final Price:", finalPrice);

console.log("---- ---- ----");
console.log("1.2");
let itemOne = "T-Shirt";
let itemTwo = "Jeans";
let itemThree = "Shoes";

let itemOnePrice = 500;
let itemTwoPrice = 1500;
let itemThreePrice = 2000;

let itemOneQunatity = 2;
let itemTwoQunatity = 1;
let itemThreeQuantity = 1;

let totalItemOnePrice = itemOnePrice * itemOneQunatity;
let totalItemTwoPrice = itemTwoPrice * itemTwoQunatity;
let totalItemthreePrice = itemThreePrice * itemThreeQuantity;

let totalCartPrice =
  totalItemOnePrice + totalItemTwoPrice + totalItemthreePrice;

console.log("Item One", itemOne);
console.log("Item Two", itemTwo);
console.log("Item Two", itemThree);

console.log("--------------------");

console.log("Price of ", itemOne, "x", itemOneQunatity, ":", totalItemOnePrice);
console.log("Price of ", itemTwo, "x", itemTwoQunatity, ":", totalItemTwoPrice);
console.log("Price of ", itemTwo, "x", itemTwoQunatity, ":", totalItemTwoPrice);

console.log("--------------------");

console.log("Total Cart Price:", totalCartPrice);
