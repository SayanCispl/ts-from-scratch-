let val : any = "Arka Mondal";
console.log(val);

function ProcessData(x: any, y: any) {      
    return x + y;      
}      
console.log(ProcessData(5, 10)); // Output: 15
console.log(ProcessData("Hello, ", "world!")); // Output: Hello, world!

// Additional any type examples

// Example 1: any array with mixed types
let mixedArray: any[] = [1, "hello", true, {name: "John"}, [1,2,3]];
console.log("Mixed array:", mixedArray);

// Example 2: any object
let anyObject: any = {
    id: 1,
    name: "Arka",
    isActive: true
};
console.log("Any object:", anyObject);
anyObject = "Now I'm a string"; // any allows reassignment to any type
console.log("Any object after reassignment:", anyObject);

// Example 3: Function returning any
function getRandomValue(): any {
    const values = [42, "TypeScript", true, [1,2,3], {key: "value"}];
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
}

console.log("Random value:", getRandomValue());

// Example 4: any with type assertion (though not recommended, shows flexibility)
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
// Alternative syntax
let strLength2: number = (<string>someValue).length;
console.log("String length:", strLength);

// Example 5: any in callback functions
function processItems(items: any[], callback: (item: any) => any): any[] {
    return items.map(callback);
}

const numbers = [1, 2, 3, 4, 5];
const processed = processItems(numbers, (item) => {
    if (typeof item === 'number') {
        return item * 2;
    }
    return item;
});
console.log("Processed numbers:", processed);