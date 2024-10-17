let person = {name: "Alice", age: 30, city: "Wonderland"};
let count = 0;

for (let prop in person) {
    count++;
}

console.log("Number of properties: " + count);

