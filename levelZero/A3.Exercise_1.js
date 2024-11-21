console.log("A3_Exercise_1");
console.log("-----------------------------------");

let salesPerson1 = "Rahul";
let salesPerson2 = "Priya";
let salesPerson3 = "Amit";

let rahulSalesTarget = 100;
let priyaSalesTarget = 200;
let amitSalesTarget = 150;

let rahulActualSales = 85;
let priyaActualSales = 180;
let amitActualSales = 120;

let rahulSalesPercentage = (rahulActualSales / rahulSalesTarget) * 100;
let priyaSalesPercentage = (priyaActualSales / priyaSalesTarget) * 100;
let amitSalesPercentage = (amitActualSales / amitSalesTarget) * 100;

let rahulBonus;
let rahulPerformance = "";
if (rahulSalesPercentage >= 90) {
  rahulBonus = 0.2;
  rahulPerformance = "High Performer";
} else if (rahulSalesPercentage >= 70 && rahulSalesPercentage < 90) {
  rahulBonus = 0.1;
  rahulPerformance = "Average Performer";
} else {
  rahulBonus = 0;
  rahulPerformance = "Low Performer";
}

let priyaBonus;
let priyaPerformance = "";
if (priyaSalesPercentage >= 90) {
  priyaBonus = 0.2;
  priyaPerformance = "High Performer";
} else if (priyaSalesPercentage >= 70 && priyaSalesPercentage < 90) {
  priyaBonus = 0.1;
  priyaPerformance = "Average Performer";
} else {
  priyaBonus = 0;
  priyaPerformance = "Low Performer";
}

let amitBonus;
let amitPerformance = "";
if (amitSalesPercentage >= 90) {
  amitBonus = 0.2;
  amitPerformance = "High Performer";
} else if (amitSalesPercentage >= 70 && amitSalesPercentage < 90) {
  amitBonus = 0.1;
  amitPerformance = "Average Performer";
} else {
  amitBonus = 0;
  amitPerformance = "Low Performer";
}

let rahulBonusAmount = rahulActualSales * rahulBonus;

let priyaBonusAmount = priyaActualSales * priyaBonus;

let amitBonusAmount = amitActualSales * amitBonus;

console.log("Sales Performance Report");

console.log("-----------------------------------");

let rahulReport =
  salesPerson1 +
  "\nSales target: " +
  rahulSalesTarget +
  " units" +
  "\nUnits sold: " +
  rahulActualSales +
  " units" +
  "\nSales Percentaage: " +
  rahulSalesPercentage +
  "%" +
  "\nPerformance category: " +
  rahulPerformance +
  "\nBonus amount: " +
  rahulBonusAmount +
  " units";

let priyaReport =
  salesPerson2 +
  "\nSales target: " +
  priyaSalesTarget +
  " units" +
  "\nUnits sold: " +
  priyaActualSales +
  " units" +
  "\nSales Percentaage: " +
  priyaSalesPercentage +
  "%" +
  "\nPerformance category: " +
  priyaPerformance +
  "\nBonus amount: " +
  priyaBonusAmount +
  " units";

let amitReport =
  salesPerson3 +
  "\nSales target: " +
  amitSalesTarget +
  " units" +
  "\nUnits sold: " +
  amitActualSales +
  " units" +
  "\nSales Percentaage: " +
  amitSalesPercentage +
  "%" +
  "\nPerformance category: " +
  amitPerformance +
  "\nBonus amount: " +
  amitBonusAmount +
  " units";

const salesReport = rahulReport + "\n\n" + priyaReport + "\n\n" + amitReport;
console.log(salesReport);
