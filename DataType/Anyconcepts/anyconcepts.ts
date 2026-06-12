let something : any = 5; 
something = "Sayan Koley";
something = true;
something = [1,2,3,4,5];
something = {name: "Sayan", age: 25};

let language : any [] = ["TypeScript", "JavaScript", "Python"];
language.push(12345);
language.push(true);
language.push({name: "Sayan", age: 25});

function info(a: number, b: number): any {
    if(a>b){
        return "Testing"
    }
    else{
        return 12345
    }
}

console.log(info(10, 5));
console.log(info(5, 10));

// console.log(info("Sayan", "Koley")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.