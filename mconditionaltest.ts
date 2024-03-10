let name: string = 'Alice';
let age: number = 30;
let fruits: string[] = ['apple', 'banana', 'orange'];

// Tests for equality and inequality with strings
console.log("Is name == 'Alice'? I predict True.");
console.log(name == 'Alice');

console.log("Is name != 'Bob'? I predict True.");
console.log(name != 'Bob');

// Tests using the lower case function
console.log("Is name.toLowerCase() == 'alice'? I predict True.");
console.log(name.toLowerCase() == 'alice');

// Numerical tests
console.log("Is age == 30? I predict True.");
console.log(age == 30);

console.log("Is age != 25? I predict True.");
console.log(age != 25);

console.log("Is age > 25? I predict True.");
console.log(age > 25);

console.log("Is age < 35? I predict True.");
console.log(age < 35);

console.log("Is age >= 30? I predict True.");
console.log(age >= 30);

console.log("Is age <= 30? I predict True.");
console.log(age <= 30);

// Tests using "and" and "or" operators
console.log("Is age > 25 && age < 35? I predict True.");
console.log(age > 25 && age < 35);

console.log("Is age > 35 || age < 25? I predict False.");
console.log(age > 35 || age < 25);

// Test whether an item is in an array
console.log("Is 'banana' in fruits? I predict True.");
console.log(fruits.includes('banana'));

// Test whether an item is not in an array
console.log("Is 'grape' not in fruits? I predict True.");
console.log(!fruits.includes('grape'));
