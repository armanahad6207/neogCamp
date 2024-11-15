console.log("Machine Coding Round")
console.log("---- ---- ----")

let freelancer1 = "Sneha"
let freelancer2 = "Vikram"

let jobDescription1 = "App Developer"
let jobDescription2 = "SEO Specialist"

let hourlyRate1 = 400
let hourlyRate2 = 350

let hoursWorked1 = 78
let hoursWorked2 = 45

let rating1 = 88
let rating2 = 78

let isEligibleForBonus1 = hoursWorked1 > 50 || rating1 > 80

let isEligibleForBonus2 = hoursWorked2 > 50 || rating2 > 80

let totalPayment1 = hourlyRate1 * hoursWorked1
let totalPayment2 = hourlyRate1 * hoursWorked2

console.log("Payment Details")
console.log("--------------------")

console.log("Freelancer1:", freelancer1)
console.log("Job Description:", jobDescription1)
console.log("Hourly rate:", hourlyRate1)
console.log("Hours Worked:", hoursWorked1)
console.log("Total Payment:", totalPayment1)
console.log("Rating:", rating1)
console.log("Is Eligible for bonus:", isEligibleForBonus1)

console.log("--------------------")

console.log("Freelancer2:", freelancer2)
console.log("Job Description:", jobDescription2)
console.log("Hourly rate:", hourlyRate2)
console.log("Hours Worked:", hoursWorked2)
console.log("Total Payment:", totalPayment2)
console.log("Rating:", rating2)
console.log("Is Eligible for bonus:", isEligibleForBonus2)