let firstname: string[] = ["Sayan", "Koles", "John", "Doe"];

console.log(firstname[0]);
console.log(firstname.length);

// generic array

let emplynames : Array<string> = [" Alice", "Bob", "Charlie"];
let emplyages : Array<number> = [25, 30, 35];
let emplyinfo : Array<any> = ["Alice", 25, true, {name: "Bob", age: 30}]; // any type array
console.log(emplynames);
console.log(emplyages);
console.log(emplyinfo);

//multi type array

let multiTypeArray : (string | number | boolean)[] = ["Alice", 25, true, "Bob", 30, false];
console.log(multiTypeArray);

// first array declaration with type annotation and then initialization

let usernames: Array <string>;
usernames = ["Alice", "Bob", "Charlie"];
console.log(usernames);


// iterating over array

let emplyeeNames : Array<string> = ["Alice", "Bob", "Charlie"];

for(let i=0; i<emplyeeNames.length; i++){
    console.log(emplyeeNames[i]);
}

// for in loop

for(let index in emplyeeNames){
    console.log(emplyeeNames[index]);
}

// for of loop

for(let name of emplyeeNames){
    console.log(name);
}
