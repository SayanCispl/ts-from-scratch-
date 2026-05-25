// tuple vs array 
// tuple is a fixed length array with specific types for each element, fixed size and type for each element
// array is a variable length array with same type for all elements , variable size and same type for all elements

// tuple example
let person: [string, number, boolean] = ["Alice", 25, true];
console.log(person[0]); // Alice
console.log(person[1]); // 25
console.log(person[2]); // true

let customer: [number, string] = [1, "John Doe"];
customer.push(50, "Koles"); // This will work but it will not be type safe
console.log(customer); // [1, "John Doe", 50, "Koles"] - This is not a valid tuple but it will not throw an error