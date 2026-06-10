let number : void = undefined; // Only undefined can be assigned to void type

function getInfo(msg: string): void {
    console.log(msg);

}

console.log(getInfo("Hello, World!"));

// console.log(number); // Error: Variable 'number' is of type 'void' and cannot be used.