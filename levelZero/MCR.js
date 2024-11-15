console.log("Machine Coding Round")
console.log("---- ---- ----")
let freelancer1 = "Sneha"
let freelancer2 = "Vikram"

let jobDescription1 = "Web Developer"
let jobDescription2 = "SEO Specialist"

let hourlyRate1 = 400
let hourlyRate2 = 350

let hoursWorked1 = 78
let hoursWorked2 = 45

let ratings1 = 88
let ratings2 = 78

let isEligibleForBonus1 = hoursWorked1 > 50 || ratings1 > 80
let isEligibleForBonus2 = hoursWorked2 > 50 || ratings2 > 80

let totalPayment1 = hourlyRate1 * hoursWorked1
let totalPayment2 = hourlyRate2 * hoursWorked2

console.log("Payments  Details")
console.log("--------------------")

console.log("Freelancer1:", freelancer1)
console.log("Job Description:", jobDescription1)
console.log("Hourly Rate:", hourlyRate1)
console.log("Hours Worked:", hoursWorked1)
console.log("Total Paymnet:", totalPayment1)
console.log("Ratings:", ratings1)
console.log("Is Eligible for Bonus:",isEligibleForBonus1)

console.log("--------------------")

console.log("Freelancer1:", freelancer2)
console.log("Job Description:", jobDescription2)
console.log("Hourly Rate:", hourlyRate2)
console.log("Hours Worked:", hoursWorked2)
console.log("Total Paymnet:", totalPayment2)
console.log("Ratings:", ratings2)
console.log("Is Eligible for Bonus:",isEligibleForBonus2)
