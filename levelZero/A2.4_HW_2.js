console.log("A2.4_HW_2");
console.log("---- ---- ----");

console.log("Kiran  Store Income Statement");

let sales1 = 50000;
let sales2 = 60000;
let sales3 = 45000;
let sales4 = 55000;
let rentExpense = 25000;
let salaryExpense = 18000;
let inventoryExpense = 12000;
let utilityExpense = 15000;

console.log("------------------------------");

let totalSales = sales1 + sales2 + sales3 + sales4;
console.log("Total Sales:", totalSales);

console.log("------------------------------");

console.log("Rent Expense:", rentExpense);
console.log("Salary Expense:", salaryExpense);
console.log("Inventor Expense:", inventoryExpense);
console.log("Utility Expense:", utilityExpense);

console.log("------------------------------");

let totalExpense =
  rentExpense + salaryExpense + inventoryExpense + utilityExpense;
console.log("Total Expense:", totalExpense);

console.log("------------------------------");

let netIncome =  totalSales - totalExpense;
console.log("Net Income:", netIncome);
