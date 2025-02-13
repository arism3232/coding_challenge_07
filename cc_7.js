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

// Task3 - Arrow Function
const calculateLoyaltyDiscount = (amount, years) => {
    let discount = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05; // Applying 15%, 10%, and 5% discount.
    let discountedPrice = amount - (amount * discount);
    console.log(`Disocunted Price: $${discountedPrice.toFixed(2)}`);
}; // Writing an arrow function that applies a discount. 
// Test Data
calculateLoyaltyDiscount(100, 6); // Expected output: "Discounted Price: $85.00"
calculateLoyaltyDiscount(200, 2); // Expected output: "Discounted Price: $190.00"

// Task4 - Parameters and Arguments 
function calculateShippingCost(weight, location, expedited = false) {
    let cost = location === "USA" ? 5 + (weight * 0.5) : (10 + (weight * 0.7)); // USA and Canada's shipping fees depending on weight.
    if (expedited) cost += 10; // Additional $10 fee if shipping is expedited.
    console.log(`Shipping Cost : $${cost.toFixed(2)}`);
}; // Writing function to calculate shipping fees. 
// Test Data 
calculateShippingCost(10, "USA", true); // Expected output: "Shipping Cost: $20.00"
calculateShippingCost(5, "Canada", false); // Expected output: "Shipping Cost: $13.50"

