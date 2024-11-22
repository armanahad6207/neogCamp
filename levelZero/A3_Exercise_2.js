console.log("A3_Exercise_2");
console.log("----------------------");

let day1Burnt = 400;
let day1Intake = 1500;

let day2Burnt = 450;
let day2Intake = 1800;

let day3Burnt = 300;
let day3Intake = 1600;

let day4Burnt = 500;
let day4Intake = 2000;

let day5Burnt = 350;
let day5Intake = 1700;

let baseCalorie = 1500;

let day1Surplus = day1Burnt - (day1Intake + baseCalorie);
let day1 = "";

if (day1Surplus < 0) {
  day1 = "Day1:" + " Dificit: " + day1Surplus + " (Dificit)";
} else {
  day1 = "Day1:" + " Surplus: " + day1Surplus + " (Surplus)";
}

let day2Surplus = day2Burnt - (day2Intake + baseCalorie);
let day2 = "";

if (day2Surplus < 0) {
  day2 = "Day2:" + " Dificit: " + day2Surplus + " (Dificit)";
} else {
  day2 = "Day2:" + " Surplus: " + day2Surplus + " (Surplus)";
}

let day3Surplus = day3Burnt - (day3Intake + baseCalorie);
let day3 = "";

if (day3Surplus < 0) {
  day3 = "Day3:" + " Dificit: " + day3Surplus + " (Dificit)";
} else {
  day3 = "Day3:" + " Surplus: " + day3Surplus + " (Surplus)";
}

let day4Surplus = day4Burnt - (day4Intake + baseCalorie);
let day4 = "";

if (day4Surplus < 0) {
  day4 = "Day4:" + " Dificit: " + day4Surplus + " (Dificit)";
} else {
  day4 = "Day4:" + " Surplus: " + day1Surplus + " (Surplus)";
}

let day5Surplus = day5Burnt - (day5Intake + baseCalorie);
let day5 = "";

if (day5Surplus < 0) {
  day5 = "Day5:" + " Dificit: " + day5Surplus + " (Dificit)";
} else {
  day5 = "Day5:" + " Surplus: " + day5Surplus + " (Surplus)";
}

let totalBurnt = day1Burnt + day2Burnt + day3Burnt + day4Burnt + day5Burnt;

let totalIntake =
  day1Intake + day2Intake + day3Intake + day4Intake + day5Intake;

let totalSurplus = totalBurnt - (totalIntake + 5 * baseCalorie);
if (totalSurplus < 0) {
  totalSurplus = totalSurplus + " (Dificit)";
} else {
  totalSurplus = totalSurplus + " (Surplus)";
}

let weeklySummary = "\nWeekly Summary:\n";

weeklySummary += "Total Calories Burnt: " + totalBurnt + "\n";
weeklySummary += "Total Calories Intake: " + totalIntake + "\n";
weeklySummary += "Total Surplus/Dificit: " + totalSurplus + "\n";

let standingGoalAwards = " ";

if (totalBurnt >= 1000) {
  standingGoalAwards +=
    "Standing Goal Award: Congratulation! You have kept moving throughout. keep it up!";
} else {
  standingGoalAwards = "No Award yet";
}

weeklySummary += "\nAward:\n" + standingGoalAwards;

console.log("Daily Reports:\n");
console.log(day1);
console.log(day2);
console.log(day3);
console.log(day4);
console.log(day5);

console.log(weeklySummary);
