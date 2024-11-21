console.log("A3.3_HW_1");
console.log("---- ---- ----");

let employee1Name = "Rahul";
let employee1Grade = 90;
let employee1HoursWorked = 27;
let employee1Salary = 45000;
let employee1VacationLeaveTaken = 2;
let employee1SickLeaveTaken = 1;
let employee1Bonus;

if (employee1HoursWorked > 10 && employee1Grade > 75 && employee1Grade < 85) {
  employee1Bonus = 0.2;
} else if (employee1HoursWorked > 20 && employee1Grade > 95) {
  employee1Bonus = 0.15;
} else if (employee1HoursWorked > 25 && employee1Grade > 85) {
  employee1Bonus = 0.1;
}

let employee1PFDeduction;

if (employee1Salary > 35000) {
  employee1PFDeduction = (employee1Salary * 12.5) / 100;
} else {
  employee1PFDeduction = 2500;
}

let employee1TDSDeduction;

if (employee1Salary > 40000) {
  employee1TDSDeduction = employee1Salary * 0.1;
} else {
  employee1TDSDeduction = 199;
}

let employee1VacationDeduction =
  employee1VacationLeaveTaken * (employee1Salary / 30);

let employee1SickDeduction = employee1SickLeaveTaken * (employee1Salary / 30);

const employee1NetSalary =
  employee1Salary +
  (employee1Salary * employee1Bonus) -
  (employee1VacationDeduction + employee1SickDeduction +employee1PFDeduction + employee1TDSDeduction);

const employee1PlaySlip =
  "Employee name: " +
  employee1Name +
  "\nGrade: " +
  employee1Grade +
  "\nHours Worked: " +
  employee1HoursWorked +
  "\nSalary: " +
  employee1Salary +
  "\nBonus: " +
  employee1Bonus +
  "\nPF Deducation: " +
  employee1PFDeduction +
  "\nTDS Deduction: " +
  employee1TDSDeduction +
  "\nVacation Deduction: " +
  employee1VacationDeduction +
  "\nSick Deduction: " +
  employee1SickDeduction +
  "\nNet Salary: " +
  employee1NetSalary;

console.log("Payslip for Employee 1:");

console.log(employee1PlaySlip);

console.log("---- ---- ----")
let employee2Name = "Aditya";
let employee2Grade = 80;
let employee2HoursWorked = 40;
let employee2Salary = 30000;
let employee2VacationLeaveTaken = 4;
let employee2SickLeaveTaken = 2;
let employee2Bonus;

if (employee2HoursWorked > 10 && employee2Grade > 75 && employee2Grade < 85) {
  employee2Bonus = 0.2;
} else if (employee2HoursWorked > 20 && employee2Grade > 95) {
  employee2onus = 0.15;
} else if (employee2HoursWorked > 25 && employee2Grade > 85) {
  employee2Bonus = 0.1;
}

let employee2PFDeduction;

if (employee2Salary > 35000) {
  employee1PFDeduction = (employee2Salary * 12.5) / 100;
} else {
  employee2PFDeduction = 2500;
}

let employee2TDSDeduction;

if (employee2Salary > 40000) {
  employee2TDSDeduction = employee2Salary * 0.1;
} else {
  employee2TDSDeduction = 199;
}

let employee2VacationDeduction = 
  employee2VacationLeaveTaken * (employee2Salary / 30);

let employee2SickDeduction = employee2SickLeaveTaken * (employee2Salary / 30);

const employee2NetSalary =
  employee2Salary +
  (employee2Salary * employee2Bonus) -
  (employee2VacationDeduction + employee2SickDeduction +employee2PFDeduction + employee2TDSDeduction);

const employee2PlaySlip =
  "Employee name: " +
  employee2Name +
  "\nGrade: " +
  employee2Grade +
  "\nHours Worked: " +
  employee2HoursWorked +
  "\nSalary: " +
  employee2Salary +
  "\nBonus: " +
  employee2Bonus +
  "\nPF Deducation: " +
  employee2PFDeduction +
  "\nTDS Deduction: " +
  employee2TDSDeduction +
  "\nVacation Deduction: " +
  employee2VacationDeduction +
  "\nSick Deduction: " +
  employee2SickDeduction +
  "\nNet Salary: " +
  employee2NetSalary;

console.log("Payslip for Employee 2:");

console.log(employee2PlaySlip);

console.log("---- ---- ----")

let employee3Name = "Arman";
let employee3Grade = 95;
let employee3HoursWorked = 30;
let employee3Salary = 60000;
let employee3VacationLeaveTaken = 3;
let employee3SickLeaveTaken = 5;
let employee3Bonus;

if (employee3HoursWorked > 10 && employee3Grade > 75 && employee3Grade < 85) {
  employee3Bonus = 0.2;
} else if (employee3HoursWorked > 20 && employee3Grade > 95) {
  employee3Bonus = 0.15;
} else if (employee3HoursWorked > 25 && employee3Grade > 85) {
  employee3Bonus = 0.1;
}

let employee3PFDeduction;

if (employee3Salary > 35000) {
  employee3PFDeduction = (employee3Salary * 12.5) / 100;
} else {
  employee3PFDeduction = 2500;
}

let employee3TDSDeduction;

if (employee3Salary > 40000) {
  employee3TDSDeduction = employee3Salary * 0.1;
} else {
  employee3TDSDeduction = 199;
}

let employee3VacationDeduction =
  employee3VacationLeaveTaken * (employee3Salary / 30);

let employee3SickDeduction = employee3SickLeaveTaken * (employee3Salary / 30);

const employee3NetSalary =
  employee3Salary +
  (employee3Salary * employee3Bonus) -
  (employee3VacationDeduction + employee3SickDeduction +employee3PFDeduction + employee3TDSDeduction);

const employee3PlaySlip =
  "Employee name: " +
  employee3Name +
  "\nGrade: " +
  employee3Grade +
  "\nHours Worked: " +
  employee3HoursWorked +
  "\nSalary: " +
  employee3Salary +
  "\nBonus: " +
  employee3Bonus +
  "\nPF Deducation: " +
  employee3PFDeduction +
  "\nTDS Deduction: " +
  employee3TDSDeduction +
  "\nVacation Deduction: " +
  employee3VacationDeduction +
  "\nSick Deduction: " +
  employee3SickDeduction +
  "\nNet Salary: " +
  employee3NetSalary;

console.log("Payslip for Employee 3:");

console.log(employee3PlaySlip);
