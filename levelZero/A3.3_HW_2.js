console.log("A3.3_HW_2");
console.log("---------------------------");
console.log("Quarterly Savings Report");
console.log("---------------------------");

let goalAmount = 12000;

let currentSavingMonth1 = 3000;
let currentSavingMonth2 = 5000;
let currentSavingMonth3 = 8000;

let savingContributionMonth1 = 1000;
let savingContributionMonth2 = 1500;
let savingContributionMonth3 = 2000;

let totalCurrentSavings =
  currentSavingMonth1 + currentSavingMonth2 + currentSavingMonth3;

let totalContributionsMonth =
  savingContributionMonth1 +
  savingContributionMonth2 +
  savingContributionMonth3;

let quarterlyGoalAmount = goalAmount / 4;

let percentageAchieved = (totalCurrentSavings / quarterlyGoalAmount) * 100;
let projectTimeLine = "";
let savingTips = "";

if (percentageAchieved >= 100) {
  projectTimeLine =
    "Congratulation! you have already achieved your quarterly saving goal!";
} else if (percentageAchieved >= 75) {
  projectTimeLine =
    "At your current saving rate, you are on the track to reach your quartely by the end of the quarter.";
} else {
  projectTimeLine =
    " Based on your current saving rate, you are on track to reach your quarterly goal.Consider increasing your savings contribution.";
}

if (percentageAchieved >= 80) {
  savingTips =
    "Great job! you are making excellent progress towards your quarterly goal.Keep up the good work!";
} else if (percentageAchieved >= 50) {
  savingTips =
    "You are half there! Try to find addditional ways to save money and increase your saving rate.";
} else {
  savingTips =
    "To reach your quarterly saving goal sooner, consider cutting back on non-essential expenses and finding opportunities to save more. ";
}

console.log("Goal Amount:" + "$" + goalAmount);
console.log("Quarterly Goal Amount:" + " $" + quarterlyGoalAmount);
console.log("Total Current Savings " + " $" + totalCurrentSavings);
console.log("Total Saving Contribution:" + " $" + totalContributionsMonth);
console.log("Percentage Achieved:", percentageAchieved + "\n");

console.log("Project Timeline:", projectTimeLine + "\n");
console.log("Saving tips:", savingTips + "\n");
