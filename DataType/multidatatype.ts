// Example of multiple data types in TypeScript

// Primitive types
let age: number = 25;
let myName: string = "Arka Mondal";
let isStudent: boolean = true;

// Special types
let unused: void = undefined; // void type can only be assigned undefined or null
let nothing: null = null;
let notDefined: undefined = undefined;

// Array types
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["apple", "banana", "cherry"];
let booleans: boolean[] = [true, false, true];

// Tuple type - fixed length array with known types
let person: [string, number, boolean] = ["Alice", 30, true];

// Enum type
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Green;

// Any type - use sparingly
let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;

// Object type
let user: { id: number; name: string; email?: string } = {
    id: 1,
    name: "Jane Doe",
    email: "jane@example.com" // optional property
};

// Function examples
function add(a: number, b: number): number {
    return a + b;
}

function greet(person: string): void {
    console.log("Hello, " + person);
}

// Using the functions
let sum: number = add(5, 3);
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