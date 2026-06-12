"use strict";
// Example of multiple data types in TypeScript
// Primitive types
let age = 25;
let myName = "Arka Mondal";
let isStudent = true;
// Special types
let unused = undefined; // void type can only be assigned undefined or null
let nothing = null;
let notDefined = undefined;
// Array types
let numbers = [1, 2, 3, 4, 5];
let strings = ["apple", "banana", "cherry"];
let booleans = [true, false, true];
// Tuple type - fixed length array with known types
let person = ["Alice", 30, true];
// Enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Green;
// Any type - use sparingly
let randomValue = 10;
randomValue = "Hello";
randomValue = true;
// Object type
let user = {
    id: 1,
    name: "Jane Doe",
    email: "jane@example.com" // optional property
};
// Function examples
function add(a, b) {
    return a + b;
}
function greet(person) {
    console.log("Hello, " + person);
}
// Using the functions
let sum = add(5, 3);
greet("TypeScript");
// Logging values to console (for demonstration)
console.log("Number:", age);
console.log("String:", name);
console.log("Boolean:", isStudent);
console.log("Void:", unused);
console.log("Null:", nothing);
console.log("Undefined:", notDefined);
console.log("Numbers Array:", numbers);
console.log("Strings Array:", strings);
console.log("Booleans Array:", booleans);
console.log("Tuple:", person);
console.log("Enum (Green):", favoriteColor);
console.log("Any (after reassignment):", randomValue);
console.log("Object:", user);
console.log("Sum:", sum);
