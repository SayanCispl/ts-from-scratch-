// Type Assertions
let value: unknown = "Hello, TypeScript!";
let strValue = value as string;
console.log(strValue.length); // Output: 21

// Type Assertions with DOM Elements
let inputElement = document.getElementById("myInput") as HTMLInputElement;
inputElement.value = "TypeScript is awesome!";

// Type Assertions with Functions
function getLength(value: unknown): number {
    return (value as string).length;
}
console.log(getLength("Hello, TypeScript!")); // Output: 21

// Type Assertions with Objects
interface User {
    name: string;
    age: number;
}

let userData: unknown = { name: "Alice", age: 30 };
let user = userData as User;
console.log(user.name); // Output: Alice
console.log(user.age);  // Output: 30

// Type Assertions with Arrays
let data: unknown = [1, 2, 3, 4, 5];
let numbers = data as number[];
console.log(numbers.length); // Output: 5
