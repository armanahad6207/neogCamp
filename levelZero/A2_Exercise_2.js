console.log("A2_Exercise_2");
console.log("---- ---- ----");

let contracter1 = "Rajesh";
let contracter2 = "Priya";
let contracter3 = "Amit";
let contracter4 = "Ananya";

let jobDescription1 = "Web Developer";
let jobDescription2 = "Content Writer";
let jobDescription3 = "Graphic Designer";
let jobDescription4 = "Digital Market";

let hourlyRate1 = 300;
let hourlyRate2 = 250;
let hourlyRate3 = 350;
let hourlyRate4 = 200;

let hourlyWorked1 = 80;
let hourlyWorked2 = 60;
let hourlyWorked3 = 40;
let hourlyWorked4 = 20;

let ratings1 = 90;
let ratings2 = 80;
let ratings3 = 92;
let ratings4 = 88;

let isEligibleForGoodieBag1 = hourlyWorked1 > 15 || ratings1 > 85;

let isEligibleForGoodieBag2 = hourlyWorked2 > 15 || ratings2 > 85;

let isEligibleForGoodieBag3 = hourlyWorked3 > 15 || ratings3 > 85;

let isEligibleForGoodieBag4 = hourlyWorked4 > 15 || ratings4 > 85;

let totalPaymentOneHour1 = hourlyRate1 * hourlyWorked1;
let totalPaymentOneHour2 = hourlyRate2 * hourlyWorked2;
let totalPaymentOneHour3 = hourlyRate3 * hourlyWorked3;
let totalPaymentOneHour4 = hourlyRate4 * hourlyWorked4;

console.log("Payement Chars:");
console.log("----------------------");

console.log("Contractor:", contracter1);
console.log("Job Description:", jobDescription1);
console.log("Hourly Rate:", hourlyRate1);
console.log("Hourly Worked:", hourlyWorked1);
console.log("TotalPayment:", totalPaymentOneHour1);
console.log("ratings", ratings1);
console.log("Is Eligible For Goodie Bag:", isEligibleForGoodieBag1);

console.log("----------------------");

console.log("Contractor:", contracter2);
console.log("Job Description:", jobDescription2);
console.log("Hourly Rate:", hourlyRate2);
console.log("Hourly Worked:", hourlyWorked2);
console.log("TotalPayment:", totalPaymentOneHour2);
console.log("ratings", ratings2);
console.log("Is Eligible For Goodie Bag:", isEligibleForGoodieBag2);

console.log("----------------------");

console.log("Contractor:", contracter3);
console.log("Job Description:", jobDescription3);
console.log("Hourly Rate:", hourlyRate3);
console.log("Hourly Worked:", hourlyWorked3);
console.log("TotalPayment:", totalPaymentOneHour3);
console.log("ratings", ratings1);
console.log("Is Eligible For Goodie Bag:", isEligibleForGoodieBag3);

console.log("----------------------");

console.log("Contractor:", contracter4);
console.log("Job Description:", jobDescription4);
console.log("Hourly Rate:", hourlyRate4);
console.log("Hourly Worked:", hourlyWorked4);
console.log("TotalPayment:", totalPaymentOneHour4);
console.log("ratings", ratings1);
console.log("Is Eligible For Goodie Bag:", isEligibleForGoodieBag4);
