let expenses = {"groceries": 150, "dining out": 100, "transportation": 50, "entertainment": 80};
let total = 0;

for (let category in expenses) {
    total += expenses[category];
}

console.log("Total expenses " + total);


