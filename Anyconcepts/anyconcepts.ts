let something : any = 5; 
something = "Sayan Koley";
something = true;
something = [1,2,3,4,5];
something = {name: "Sayan", age: 25}; // The 'any' type allows us to assign any type of value to the variable 'something' without any type checking.
console.log(something); // Output: { name: 'Sayan', age: 25 }

let language : any [] = ["TypeScript", "JavaScript", "Python"]; // The 'any[]' type allows us to create an array that can hold values of any type without any type checking.
language.push(12345);
language.push(true);
language.push({name: "Sayan", age: 25}); // The 'any[]' type allows us to create an array that can hold values of any type without any type checking.

function info(a: number, b: number): any { // The 'any' type allows the function to return a value of any type without any type checking.
    if(a>b){
        return "Testing"
    }
    else{
        return 12345
    }
}

console.log(info(10, 5)); // Output: "Testing"
console.log(info(5, 10)); // Output: 12345

// console.log(info("Sayan", "Koley")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.