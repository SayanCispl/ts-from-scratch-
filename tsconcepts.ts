// Any datatypes

let a: any =10;
a = "hello";
a = true;
a = [1,2,3];
a = {name: "John", age: 30};

// Void datatype

function greet(): void {
    console.log("Hello World");
}

// Null and Undefined datatypes

let b: null = null;
let c: undefined = undefined;

// Never datatype

function throwError(message: string): never {
    throw new Error(message);
}

// Object datatype      
let d: object = {name: "Alice", age: 25};
