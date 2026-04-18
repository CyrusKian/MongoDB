// Step 2: Use let and const
const name = "Kian";
let age = 20;

// Step 3: Arrow Functions
const greet = (user) => {
    return `Hello ${user}`;
};

// Step 5: Default Parameters
const add = (a, b = 5) => a + b;

// Step 5: Spread Operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

// Step 5: Object Destructuring
const person = {
    firstName: "Juan",
    lastName: "Dela Cruz"
};

const { firstName, lastName } = person;

// Step 4: Template Literals
console.log(greet(name));
console.log(`Sum: ${add(10)}`);
console.log(`New Numbers: ${newNumbers}`);
console.log(`Person: ${firstName} ${lastName}`);