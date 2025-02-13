// Task1 - Function Declaration
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount;
    console.log(`Total Invoice: $${total.toFixed(2)}`);
}; // Writing a function that calculates the final invoice amount.
// Test Data
calculateInvoice(100, 0.08, 5); // Expected output: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); // Expected output: "Total Invoice: $530.00"

// Task2 - Function Expression
const calculateHourlyWage = function(salary, hoursPerweek) {
    let hourlyWage = salary / (hoursPerweek * 52);
    console.log(`Hourly Wage: $${hourlyWage.toFixed(2)}`);
}; // Declaring a function that calculates hourly wage.
// Test Data
calculateHourlyWage(52000, 40); // Expected output: "Hourly Wage: $25.00"
calculateHourlyWage(75000, 35); // Expected output: "Hourly Wage: $41.21"