# TypeScript Data Types Guide

This guide covers all the fundamental data types in TypeScript with practical examples.

## Primitive Types

TypeScript has several primitive data types:

### Number
Used for both integers and floating-point numbers.
```typescript
let age: number = 25;
```

### String
Used for textual data.
```typescript
let myName: string = "Arka Mondal";
```

### Boolean
Represents true/false values.
```typescript
let isStudent: boolean = true;
```

## Special Types

### Void
Used for functions that don't return a value. Can only be assigned `undefined` or `null`.
```typescript
let unused: void = undefined;
```

### Null and Undefined
Represent the absence of a value.
```typescript
let nothing: null = null;
let notDefined: undefined = undefined;
```

## Collection Types

### Arrays
TypeScript arrays can be typed in two ways:
```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["apple", "banana", "cherry"];
let booleans: boolean[] = [true, false, true];
```

Alternative syntax using Array generic:
```typescript
let numbers: Array<number> = [1, 2, 3, 4, 5];
```

### Tuples
Fixed-length arrays where each element has a known type.
```typescript
let person: [string, number, boolean] = ["Alice", 30, true];
```

## Enums
Enums allow you to define a set of named constants.
```typescript
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Green;
```

By default, enums start at 0 and increment by 1. You can also assign specific values:
```typescript
enum StatusCode {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
```

## Any Type
Use `any` when you don't want a particular value to cause type-checking errors. Use sparingly as it bypasses TypeScript's type safety.
```typescript
let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;
```

## Object Types
Define objects with specific properties:
```typescript
let user: { id: number; name: string; email?: string } = {
    id: 1,
    name: "Jane Doe",
    email: "jane@example.com" // optional property (marked with ?)
};
```

## Functions
TypeScript allows you to specify types for function parameters and return values:
```typescript
function add(a: number, b: number): number {
    return a + b;
}

function greet(person: string): void {
    console.log("Hello, " + person);
}
```

## Type Inference
TypeScript can automatically infer types when you initialize variables:
```typescript
let inferredNumber = 42; // TypeScript infers this is a number
let inferredString = "Hello"; // TypeScript infers this is a string
```

## Best Practices

1. **Always specify types** for function parameters and return values
2. **Use interfaces** for complex object shapes instead of inline types
3. **Prefer specific types** over `any` whenever possible
4. **Use const** for values that won't change
5. **Leverage type inference** when the type is obvious

## Example Usage
See `multidatatype.ts` for complete working examples of all these concepts.

## Further Learning
- [TypeScript Handbook - Basic Types](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
- [TypeScript Handbook - Enums](https://www.typescriptlang.org/docs/handbook/2/enums.html)
- [TypeScript Handbook - Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)